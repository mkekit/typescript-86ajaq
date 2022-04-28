// Import stylesheets
import './style.css';

import Video from './lib/Video';

// Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

//
const videoEls = document.querySelectorAll('.video');

let player = null;
for (const video of videoEls) {
  //
  player = Video.init(video as HTMLElement).getPlayer();
  player.play();
}
