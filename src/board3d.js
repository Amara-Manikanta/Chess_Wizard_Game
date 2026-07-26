// Three.js Real 3D Wizard Chess Renderer & Interactive Board System

import * as THREE from 'three';
import { soundEngine } from './audio.js';
import { particleEngine } from './particles.js';

export class WizardBoard3D {
  constructor(containerId, onMoveCallback) {
    this.container = document.getElementById(containerId);
    this.onMoveCallback = onMoveCallback;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.game = null;
    this.pieceMeshes = new Map(); // squareName -> 3D Mesh
    this.squareMeshes = new Map(); // squareName -> 3D Board Tile Mesh
    
    this.selectedSquare = null;
    this.legalMoves = [];
    this.lumosSquare = null;
    this.isFlipped = false;
    this.animatingPieces = [];

    // Materials
    this.materials = {
      lightSquare: new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.4, metalness: 0.1 }),
      darkSquare: new THREE.MeshStandardMaterial({ color: 0x1f2438, roughness: 0.3, metalness: 0.2 }),
      whitePiece: new THREE.MeshStandardMaterial({ color: 0xf0f3f8, roughness: 0.2, metalness: 0.1, roughnessMap: null }),
      blackPiece: new THREE.MeshStandardMaterial({ color: 0x141622, roughness: 0.15, metalness: 0.4 }),
      selectedSquare: new THREE.MeshStandardMaterial({ color: 0x9d50bb, roughness: 0.3, emissive: 0x9d50bb, emissiveIntensity: 0.5 }),
      highlightSquare: new THREE.MeshStandardMaterial({ color: 0x38ef7d, roughness: 0.3, emissive: 0x38ef7d, emissiveIntensity: 0.6 }),
      captureSquare: new THREE.MeshStandardMaterial({ color: 0xff4b2b, roughness: 0.3, emissive: 0xff4b2b, emissiveIntensity: 0.6 })
    };

    this.init3DScene();
  }

  init3DScene() {
    if (!this.container) return;

    const width = this.container.clientWidth || 560;
    const height = this.container.clientHeight || 560;

    // 1. Create Scene
    this.scene = new THREE.Scene();
    this.scene.background = null; // transparent to show Great Hall backdrop

    // 2. Camera Setup
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.updateCameraPosition();

    // 3. Renderer Setup
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Clear old elements and append canvas
    this.container.innerHTML = '';
    this.container.appendChild(this.renderer.domElement);

    // 4. Lighting Setup (Great Hall Ambient & Magic Point Lights)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xf3e5ab, 1.2);
    dirLight.position.set(10, 20, 15);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    this.scene.add(dirLight);

    const magicLight = new THREE.PointLight(0x9d50bb, 1.5, 30);
    magicLight.position.set(-10, 10, -10);
    this.scene.add(magicLight);

    // 5. Build 3D Chess Board Mesh
    this.build3DBoard();

    // 6. Bind Mouse Raycasting Events
    this.renderer.domElement.addEventListener('pointerdown', (e) => this.onPointerDown(e));

    // 7. Start Render Loop
    this.animate();
  }

  updateCameraPosition() {
    if (this.isFlipped) {
      this.camera.position.set(0, 10, -11);
      this.camera.lookAt(0, 0, 0);
    } else {
      this.camera.position.set(0, 10, 11);
      this.camera.lookAt(0, 0, 0);
    }
  }

  build3DBoard() {
    const boardSize = 8;
    const squareWidth = 1.2;
    const offset = (boardSize * squareWidth) / 2 - squareWidth / 2;

    // Outer Board Base Box
    const baseGeo = new THREE.BoxGeometry(10.2, 0.4, 10.2);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x0a0c14, roughness: 0.5, metalness: 0.3 });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = -0.25;
    baseMesh.receiveShadow = true;
    this.scene.add(baseMesh);

    // Build 64 3D Square Tiles
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const squareName = String.fromCharCode(97 + c) + (r + 1);
        const isLight = (r + c) % 2 !== 0;

        const tileGeo = new THREE.BoxGeometry(1.15, 0.1, 1.15);
        const tileMat = isLight ? this.materials.lightSquare.clone() : this.materials.darkSquare.clone();
        const tileMesh = new THREE.Mesh(tileGeo, tileMat);

        const x = c * squareWidth - offset;
        const z = (7 - r) * squareWidth - offset;

        tileMesh.position.set(x, 0, z);
        tileMesh.receiveShadow = true;
        tileMesh.userData = { squareName, isLight };

        this.scene.add(tileMesh);
        this.squareMeshes.set(squareName, tileMesh);
      }
    }
  }

  // --- PROCEDURAL 3D PIECE MESH CREATION ---
  create3DPieceMesh(type, color) {
    const group = new THREE.Group();
    const mat = color === 'w' ? this.materials.whitePiece : this.materials.blackPiece;

    // Base pedestal for all pieces
    const baseGeo = new THREE.CylinderGeometry(0.4, 0.45, 0.15, 16);
    const baseMesh = new THREE.Mesh(baseGeo, mat);
    baseMesh.position.y = 0.075;
    baseMesh.castShadow = true;
    group.add(baseMesh);

    if (type === 'p') {
      // Pawn: Cone body + sphere top
      const bodyGeo = new THREE.CylinderGeometry(0.2, 0.35, 0.55, 16);
      const bodyMesh = new THREE.Mesh(bodyGeo, mat);
      bodyMesh.position.y = 0.4;
      bodyMesh.castShadow = true;
      group.add(bodyMesh);

      const topGeo = new THREE.SphereGeometry(0.22, 16, 16);
      const topMesh = new THREE.Mesh(topGeo, mat);
      topMesh.position.y = 0.75;
      topMesh.castShadow = true;
      group.add(topMesh);
    } else if (type === 'r') {
      // Rook: Castle turret cylinder
      const bodyGeo = new THREE.CylinderGeometry(0.35, 0.4, 0.7, 16);
      const bodyMesh = new THREE.Mesh(bodyGeo, mat);
      bodyMesh.position.y = 0.5;
      bodyMesh.castShadow = true;
      group.add(bodyMesh);

      const turretGeo = new THREE.CylinderGeometry(0.42, 0.35, 0.2, 8);
      const turretMesh = new THREE.Mesh(turretGeo, mat);
      turretMesh.position.y = 0.9;
      turretMesh.castShadow = true;
      group.add(turretMesh);
    } else if (type === 'n') {
      // Knight: Horse head & body
      const bodyGeo = new THREE.CylinderGeometry(0.25, 0.38, 0.5, 16);
      const bodyMesh = new THREE.Mesh(bodyGeo, mat);
      bodyMesh.position.y = 0.4;
      bodyMesh.castShadow = true;
      group.add(bodyMesh);

      const headGeo = new THREE.BoxGeometry(0.35, 0.45, 0.5);
      const headMesh = new THREE.Mesh(headGeo, mat);
      headMesh.position.set(0, 0.75, 0.05);
      headMesh.rotation.x = 0.2;
      headMesh.castShadow = true;
      group.add(headMesh);
    } else if (type === 'b') {
      // Bishop: Mitre cone + sphere finial
      const bodyGeo = new THREE.ConeGeometry(0.35, 0.85, 16);
      const bodyMesh = new THREE.Mesh(bodyGeo, mat);
      bodyMesh.position.y = 0.55;
      bodyMesh.castShadow = true;
      group.add(bodyMesh);

      const topGeo = new THREE.SphereGeometry(0.12, 12, 12);
      const topMesh = new THREE.Mesh(topGeo, mat);
      topMesh.position.y = 1.05;
      topMesh.castShadow = true;
      group.add(topMesh);
    } else if (type === 'q') {
      // Queen: Tapered crown cylinder + crown finial
      const bodyGeo = new THREE.CylinderGeometry(0.28, 0.4, 0.95, 16);
      const bodyMesh = new THREE.Mesh(bodyGeo, mat);
      bodyMesh.position.y = 0.6;
      bodyMesh.castShadow = true;
      group.add(bodyMesh);

      const crownGeo = new THREE.SphereGeometry(0.3, 16, 16);
      const crownMesh = new THREE.Mesh(crownGeo, mat);
      crownMesh.position.y = 1.15;
      crownMesh.castShadow = true;
      group.add(crownMesh);
    } else if (type === 'k') {
      // King: Regal crown + cross top
      const bodyGeo = new THREE.CylinderGeometry(0.32, 0.42, 1.1, 16);
      const bodyMesh = new THREE.Mesh(bodyGeo, mat);
      bodyMesh.position.y = 0.65;
      bodyMesh.castShadow = true;
      group.add(bodyMesh);

      const crossVGeo = new THREE.BoxGeometry(0.12, 0.35, 0.12);
      const crossVMesh = new THREE.Mesh(crossVGeo, mat);
      crossVMesh.position.y = 1.35;
      crossVMesh.castShadow = true;
      group.add(crossVMesh);

      const crossHGeo = new THREE.BoxGeometry(0.3, 0.1, 0.12);
      const crossHMesh = new THREE.Mesh(crossHGeo, mat);
      crossHMesh.position.y = 1.35;
      crossHMesh.castShadow = true;
      group.add(crossHMesh);
    }

    return group;
  }

  attachGame(game) {
    this.game = game;
    this.render();
  }

  flip() {
    this.isFlipped = !this.isFlipped;
    this.updateCameraPosition();
    this.render();
  }

  setLumosHint(square) {
    this.lumosSquare = square;
    this.render();
  }

  clearSelection() {
    this.selectedSquare = null;
    this.legalMoves = [];
    this.render();
  }

  render() {
    if (!this.game || !this.scene) return;

    // Clear previous piece meshes
    this.pieceMeshes.forEach(mesh => this.scene.remove(mesh));
    this.pieceMeshes.clear();

    const boardState = this.game.board();
    const squareWidth = 1.2;
    const offset = (8 * squareWidth) / 2 - squareWidth / 2;

    // Update 3D Tile Materials & Highlights
    this.squareMeshes.forEach((tileMesh, squareName) => {
      const isLight = tileMesh.userData.isLight;
      tileMesh.material = isLight ? this.materials.lightSquare : this.materials.darkSquare;

      if (this.selectedSquare === squareName) {
        tileMesh.material = this.materials.selectedSquare;
      } else if (this.lumosSquare === squareName) {
        tileMesh.material = this.materials.highlightSquare;
      } else {
        const legalMove = this.legalMoves.find(m => m.to === squareName);
        if (legalMove) {
          tileMesh.material = legalMove.captured ? this.materials.captureSquare : this.materials.highlightSquare;
        }
      }
    });

    // Populate 3D Pieces
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const piece = boardState[7 - r][c];
        if (piece) {
          const squareName = String.fromCharCode(97 + c) + (r + 1);
          const pieceMesh = this.create3DPieceMesh(piece.type, piece.color);

          const x = c * squareWidth - offset;
          const z = (7 - r) * squareWidth - offset;

          pieceMesh.position.set(x, 0, z);

          if (this.selectedSquare === squareName) {
            pieceMesh.position.y = 0.35; // 3D Levitation rise!
          }

          this.scene.add(pieceMesh);
          this.pieceMeshes.set(squareName, pieceMesh);
        }
      }
    }
  }

  onPointerDown(event) {
    if (!this.container || !this.game) return;

    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(Array.from(this.squareMeshes.values()));

    if (intersects.length > 0) {
      const clickedSquare = intersects[0].object.userData.squareName;
      if (clickedSquare) {
        this.handleSquareClick(clickedSquare);
      }
    }
  }

  handleSquareClick(squareName) {
    soundEngine.init();

    if (this.selectedSquare === squareName) {
      this.clearSelection();
      return;
    }

    const move = this.legalMoves.find(m => m.to === squareName);
    if (move) {
      this.executeWizardMove(move);
      return;
    }

    const piece = this.game.get(squareName);
    if (piece && piece.color === this.game.turn()) {
      soundEngine.playSpellSelectSound();
      this.selectedSquare = squareName;
      this.legalMoves = this.game.moves({ square: squareName, verbose: true });
      this.lumosSquare = null;
      this.render();
    } else {
      this.clearSelection();
    }
  }

  executeWizardMove(move) {
    if (move.captured) {
      soundEngine.playCaptureSound();
    } else {
      soundEngine.playMoveSound();
    }

    const moveResult = this.game.move(move);

    if (this.game.inCheck()) {
      soundEngine.playCheckSound();
    }

    this.selectedSquare = null;
    this.legalMoves = [];
    this.lumosSquare = null;
    this.render();

    if (this.onMoveCallback) {
      this.onMoveCallback(moveResult);
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Float selected levitating piece in 3D
    if (this.selectedSquare && this.pieceMeshes.has(this.selectedSquare)) {
      const mesh = this.pieceMeshes.get(this.selectedSquare);
      mesh.rotation.y += 0.02;
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }
}
