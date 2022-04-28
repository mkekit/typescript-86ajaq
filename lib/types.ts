export enum TVideoType {
  Cliplister = 'cliplister',
  Youtube = 'youtube',
  Vimeo = 'vimeo',
}

export interface TVideoPlayer {
  el: HTMLElement;
  init: Function;
  play: Function;
  stop: Function;
  addEventListener: Function;
}
