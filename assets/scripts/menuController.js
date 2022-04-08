import co from './co.cc';

cc.Class({
  extends: cc.Component,

  properties: {},

  onLoad() {
    const settingsPanel = cc.find('SettingsPanel', this.node);
    settingsPanel.y = this.node.height;

    function* doDropDown() {
      if (droppingDown === 1 || droppingDown === 2) {
        try {
          const speed = 1.6;

          let t0 = co.currentRuntime.lastTickTime;
          let dt = 0;

          while (true) {
            const dy = speed * dt;
            if (dy > dist) {
              dy = dist;
            }
            dist -= dy;

            const sd = droppingDown === 1 ? -1 : +1;
            settingsPanel.y += dy * sd;

            yield;

            if (dist <= 0) {
              break;
            }

            const t1 = co.currentRuntime.lastTickTime;
            dt = t1 - t0;
            t0 = t1;
          }
        } finally {
          coRunning = null;
        }
      }
    }

    let droppingDown = 0;
    const maxDist = this.node.height;
    let dist = 0;
    let coRunning = null;

    this.dropDown = () => {
      if (droppingDown === 1) {
        droppingDown = 2;
      } else if (droppingDown === 0 || droppingDown === 2) {
        droppingDown = 1;
      }
      dist = dist === 0 ? maxDist : maxDist - dist;
      if (coRunning === null) {
        coRunning = co.start(doDropDown);
      }
    };
  },

  start() {
    const settingsPanel = cc.find('SettingsPanel', this.node);
    if (cc.store.soundEnabled === true) {
      const soundOnButton = cc.find('SoundOnButton', settingsPanel);
      soundOnButton.active = false;
      soundOnButton.getComponent(cc.Button).interactable = false;

      const soundOffButton = cc.find('SoundOffButton', settingsPanel);
      soundOffButton.active = true;
      soundOffButton.getComponent(cc.Button).interactable = true;
    } else {
      const soundOnButton = cc.find('SoundOnButton', settingsPanel);
      soundOnButton.active = true;
      soundOnButton.getComponent(cc.Button).interactable = true;

      const soundOffButton = cc.find('SoundOffButton', settingsPanel);
      soundOffButton.active = false;
      soundOffButton.getComponent(cc.Button).interactable = false;
    }
  }
});
