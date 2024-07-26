import roasts from "../mocks/roasts";
import { currentRoast } from "../signals";

export const getRoast = (id) => {
  const foundIndex = roasts.findIndex((item) => item.id === id)
  if (foundIndex) return roasts[foundIndex]
}

export const saveRoast = () => {
  const found = getRoast(currentRoast.value.id)  
  if (found) {
      roasts[found] = currentRoast.value;
  } else {
      roasts.push(currentRoast.value);
  }
  return roasts[roasts.length - 1]
}

export const updateRoast = (roast) => {
  const foundIndex = roasts.findIndex((item) => item.id === roast.id)
  if (foundIndex) {
    roasts[foundIndex] = roast;
  }
  return roast;
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
