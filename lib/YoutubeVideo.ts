import BaseVideo from './BaseVideo';
import { TVideoPlayer } from './types';

export default class YoutubeVideo extends BaseVideo implements TVideoPlayer {
  init() {
    console.log('YoutubeVideo => init()');
  }
}
