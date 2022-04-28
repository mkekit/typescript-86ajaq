import { TVideoPlayerOptions } from './types';

/**
 *
 */
export default class VideoPlayerOptions implements TVideoPlayerOptions {
  loop?: boolean;
  autoplay?: boolean;

  static from_el(el: HTMLElement): VideoPlayerOptions {
    /*
    for (const [key, value] of el.dataset) {
    }*/

    const options = new VideoPlayerOptions();
    options.loop = el.dataset?.loop === 'true' ? true : false;
    options.autoplay = el.dataset?.autoplay === 'true' ? true : false;

    return options;
  }

  onReady() {}
  onPlay() {}
  onPause() {}
  onStop() {}
}
