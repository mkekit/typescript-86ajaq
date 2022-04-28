import BaseVideo from './BaseVideo';
import { TVideoPlayer } from './types';

export default class VimeoVideo extends BaseVideo implements TVideoPlayer {
  init() {
    console.log('VimeoVideo => init()');
  }
}
