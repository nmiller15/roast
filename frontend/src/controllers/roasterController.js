import roasts from "../mocks/roasts";
import { currentRoast } from "../signals";

export const saveRoast = (roast) => {
  const found = roasts.find((item, index) => {
    if (item.id === currentRoast.value.id) {
        return index
    }
  })   
  if (found) {
      roasts[found] = currentRoast.value;
  } else {
      roasts.push(currentRoast.value);
  }
  return roasts[roasts.length - 1]
}

export const logTime = (roastStep, time) => {
  let key = '';
  if (roastStep === 1) key = 'firstCrackSeconds'
  if (roastStep === 2) key = 'tempRiseSeconds'
  if (roastStep === 3) key = 'openedLidSeconds'
  if (roastStep === 4) key = 'heatOffSeconds'
  if (roastStep === 5) key = 'dumpedSeconds'
  currentRoast.value[key] = time
}