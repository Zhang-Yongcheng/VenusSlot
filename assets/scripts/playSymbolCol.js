import co from './co.cc';

export default function* playSymbolCol(colIndex, speed) {
  const cols = cc.find('Canvas/Game/Machine/Performance/Cols');
  const col = cols.getChildByName(`${colIndex + 1}`);

  const spacing = col.children[1].y - col.children[0].y;
  let dist0 = col.children[col.childrenCount - 3].y - col.children[0].y;
  let dist = dist0;
  let t0 = co.currentRuntime.lastTickTime;
  let dt = 0;

  while (true) {

    const dy = speed * dt;

    if (dy >= spacing) {
      dy = speed * ((1 / 60) * 1000);
    }

    if (dy >= dist) {
      if (cc.store.isGameResultGot() === true) {
        if (col.redist > 0) {
          col.y = col.baseY;
          dy -= dist;
          dist0 = col.children[col.redist].y - col.children[0].y;
          dist = dist0;
          col.redist = 0;
        } else {
          dy = dist;
        }
      } else {
        col.y = col.baseY;
        dy -= dist;
        dist = dist0;
      }
    } else {
      if (col.redist2 > 0) {
        // dist0 = (col.children[col.redist2].y - col.children[0].y) - Math.abs(col.y - col.baseY);
        const newDist = col.children[col.redist2].y - col.children[0].y;
        const movedDist = dist0 - dist;
        dist0 = newDist - movedDist;
        dist = dist0;
        col.redist2 = 0;
      }
    }
    dist -= dy;
    col.y -= dy;

    yield;

    if (dist <= 0) {
      break;
    }

    const t1 = co.currentRuntime.lastTickTime;
    dt = t1 - t0;
    t0 = t1;
  }
}
