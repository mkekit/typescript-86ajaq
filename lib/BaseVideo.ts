import { TVideoPlayerOptions } from './options/types';
import { TVideoPlayer } from './types';

/**
 *
 */
export default class BaseVideo implements TVideoPlayer {
  el: HTMLElement;
  settings?: TVideoPlayerOptions;

  constructor(el: HTMLElement, settings?: TVideoPlayerOptions) {
    this.el = el;
    this.settings = settings;
  }

  init(): void {
    console.log(`${this.constructor.name} => init()`);
  }

  play(): void {
    console.log(`${this.constructor.name} => play()`);
  }
  stop(): void {
    console.log(`${this.constructor.name} => stop()`);
  }
  addEventListener(type: string, callback: Function): void {
    console.log(`${this.constructor.name} => addEventListener()`);
  }
}
