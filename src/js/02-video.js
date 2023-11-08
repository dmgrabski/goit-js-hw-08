import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const saveTime = (data) => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

const throttledSaveTime = throttle(saveTime, 1000);

player.on('timeupdate', throttledSaveTime);

window.addEventListener('load', () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime !== null) {
    player.setCurrentTime(parseFloat(savedTime)).catch(function(error) {
      switch (error.name) {
        case 'RangeError':
          console.error('The time set is out of range.');
          break;

        default:
          console.error('An unknown error occurred when trying to set the time.');
          break;
      }
    });
  }
});

