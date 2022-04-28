import CliplisterVideo from './CliplisterVideo';
import { TVideoPlayer, TVideoType } from './types';
import VimeoVideo from './VimeoVideo';
import YoutubeVideo from './YoutubeVideo';

/**
 *
 */
export default class Video {
  private el: HTMLElement;
  private player: TVideoPlayer;

  /**
   *
   */
  static init(el: HTMLElement): Video {
    return new Video(el);
  }

  /**
   *
   */
  constructor(el: HTMLElement) {
    this.el = el;

    this.player = this.getPlayerImpl(el);
    this.player.init();
  }

  /**
   *
   */
  getPlayer(): TVideoPlayer {
    return this.player;
  }

  /**
   *
   */
  private getPlayerImpl(el: HTMLElement): TVideoPlayer {
    const type: TVideoType = this.getType(el);

    switch (type) {
      case TVideoType.Cliplister:
        return new CliplisterVideo(this.el);

      case TVideoType.Youtube:
        return new YoutubeVideo(this.el);

      case TVideoType.Vimeo:
        return new VimeoVideo(this.el);
    }
  }

  /**
   *
   */
  private getType(el: HTMLElement): TVideoType {
    const classList = el.classList;
    switch (true) {
      case classList.contains('video-cliplister'):
        return TVideoType.Cliplister;

      case classList.contains('video-youtube'):
        return TVideoType.Youtube;

      case classList.contains('video-vimeo'):
        return TVideoType.Vimeo;
    }
  }
}
