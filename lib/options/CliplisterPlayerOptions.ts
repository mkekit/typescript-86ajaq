import { TCliplisterPlayerOptions } from './types';
import VideoPlayerOptions from './VideoPlayerOptions';

/**
 *
 */
export default class CliplisterPlayerOptions
  implements TCliplisterPlayerOptions
{
  videoTitle: string;
  assetKeys: string[];
  customer: string;
  languages: string[];
  videoUrl: string;
  backgroundVideo: string;
  keyType: number;
  playButtonUrl: string;
  assets: string;

  private static supported_keys(): string[] {
    return [
      'videoTitle',
      'assetkeys',
      'customer',
      'lang',
      'videoUrl',
      'loop',
      'autoplay',
      'backgoundvideo',
    ];
  }

  static from_el(el: HTMLElement): TCliplisterPlayerOptions {
    console.log(el.dataset);

    //
    const opts = VideoPlayerOptions.from_el(el);
    const options = new CliplisterPlayerOptions();
    options.videoTitle = el.dataset?.videotitle;
    options.assetKeys = [el.dataset?.assetkeys];
    options.customer = el.dataset?.customer;
    options.languages = [el.dataset?.lang];

    return options as TCliplisterPlayerOptions;
  }

  onReady() {}
  onPlay() {}
  onPause() {}
  onStop() {}
}
