// Chess clock with optional Fischer increment.
//
// Deliberately driven by wall-clock timestamps rather than by counting timer
// ticks: setInterval drifts, and browsers throttle timers in background tabs,
// which would hand a player free time by switching away.

export class ChessClock {
  // `initialMs` per side, `incrementMs` added after each completed move.
  constructor({ initialMs = 5 * 60 * 1000, incrementMs = 0 } = {}) {
    this.initialMs = initialMs;
    this.incrementMs = incrementMs;
    this.onTick = null;
    this.onFlag = null;
    this.reset();
  }

  reset(config = {}) {
    if (config.initialMs !== undefined) this.initialMs = config.initialMs;
    if (config.incrementMs !== undefined) this.incrementMs = config.incrementMs;

    this.remaining = { w: this.initialMs, b: this.initialMs };
    this.activeColor = null;
    this.startedAt = null;
    this.flagged = null;
    this.stopTicking();
  }

  get enabled() {
    return this.initialMs > 0;
  }

  // Begin counting down for `color`, banking any time the previous side used.
  start(color) {
    if (!this.enabled || this.flagged) return;
    this.bank();
    this.activeColor = color;
    this.startedAt = Date.now();
    this.startTicking();
  }

  // Called when a player completes a move: bank their elapsed time, add the
  // increment, and hand the clock to the opponent.
  press(color) {
    if (!this.enabled || this.flagged) return;
    this.bank();
    // The increment is earned by completing a move, so it is always credited to
    // the player who just moved — including on the game's first move, when the
    // clock was not yet running for anyone.
    this.remaining[color] += this.incrementMs;
    this.activeColor = color === 'w' ? 'b' : 'w';
    this.startedAt = Date.now();
    this.startTicking();
  }

  pause() {
    if (!this.enabled) return;
    this.bank();
    this.activeColor = null;
    this.startedAt = null;
    this.stopTicking();
  }

  // Move elapsed real time out of the running side's budget.
  bank() {
    if (this.activeColor && this.startedAt !== null) {
      const elapsed = Date.now() - this.startedAt;
      this.remaining[this.activeColor] = Math.max(
        0, this.remaining[this.activeColor] - elapsed
      );
    }
    this.startedAt = null;
  }

  // Live remaining time, including the currently running side's elapsed time.
  timeFor(color) {
    let ms = this.remaining[color];
    if (this.activeColor === color && this.startedAt !== null) {
      ms = Math.max(0, ms - (Date.now() - this.startedAt));
    }
    return ms;
  }

  startTicking() {
    this.stopTicking();
    if (!this.enabled) return;
    this.timer = setInterval(() => {
      if (this.activeColor && this.timeFor(this.activeColor) <= 0) {
        const loser = this.activeColor;
        this.remaining[loser] = 0;
        this.flagged = loser;
        this.pause();
        if (this.onFlag) this.onFlag(loser);
        return;
      }
      if (this.onTick) this.onTick();
    }, 100);
  }

  stopTicking() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}

// 3:05 style for normal play, 12.4 when under ten seconds.
export function formatClock(ms) {
  const totalSeconds = Math.max(0, ms) / 1000;
  if (totalSeconds < 10) return totalSeconds.toFixed(1);
  const mins = Math.floor(totalSeconds / 60);
  const secs = Math.floor(totalSeconds % 60);
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

export const TIME_CONTROLS = [
  { id: 'unlimited', label: 'Unlimited',  initialMs: 0,            incrementMs: 0 },
  { id: 'blitz3',    label: '3 + 2',      initialMs: 3 * 60000,    incrementMs: 2000 },
  { id: 'blitz5',    label: '5 + 0',      initialMs: 5 * 60000,    incrementMs: 0 },
  { id: 'rapid10',   label: '10 + 5',     initialMs: 10 * 60000,   incrementMs: 5000 }
];
