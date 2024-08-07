import roasts from "../mocks/roasts";
import { currentRoast } from "../signals";

export const getRoast = async (id, user) => {
  // Mock Calls
  // const foundIndex = user.roasts.findIndex((item) => item.id === id)
  // if (foundIndex) return user.roasts[foundIndex]
  fetch(process.env.REACT_APP_API_URI)
}

export const saveRoast = (user) => {
  const newRoast = {
    ...currentRoast.value,
    id: user.roasts.length
  }
  user.roasts.push(newRoast);
  return user.roasts[roasts.length - 1]
}

export const updateRoast = (roast, user) => {
  const foundIndex = user.roasts.findIndex((item) => item.id === roast.id)
  console.log(roast);
  if (foundIndex || foundIndex === 0) {
    user.roasts[foundIndex] = roast;
    console.log(user.roasts[foundIndex]);
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
