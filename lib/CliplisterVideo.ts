import BaseVideo from './BaseVideo';
import CliplisterVideoPlayerOptions from './options/CliplisterPlayerOptions';
import { TCliplisterPlayerOptions } from './options/types';
import { TVideoPlayer } from './types';

export default class CliplisterVideo extends BaseVideo implements TVideoPlayer {
  // settings?: TCliplisterPlayerOptions;

  init(): void {
    console.log('CliplisterVideo => init()');
    console.log(' |- el: ', this.el);

    this.settings = CliplisterVideoPlayerOptions.from_el(this.el);

    console.log(' |- settings: ', this.settings);
  }
}
