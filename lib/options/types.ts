export type TVideoPlayerOptions = {
  loop?: boolean;
  autoplay?: boolean;
  onReady: Function;
  onPlay: Function;
  onPause: Function;
  onStop: Function;
};

export type TCliplisterPlayerOptions = TVideoPlayerOptions & {
  videoTitle: string;
  assetKeys: string[];
  customer: string;
  languages: string[];
  videoUrl: string;
  backgroundVideo: string;
  keyType: number;
  playButtonUrl: string;
  assets: string;
};
