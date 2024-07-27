import { useContext } from "react";
import roasts from "../mocks/roasts";
import { currentRoast } from "../signals";
import { AuthContext } from "./authContext";

export const getRoast = (id, user) => {
  const foundIndex = user.roasts.findIndex((item) => item.id === id)
  if (foundIndex) return user.roasts[foundIndex]
}

export const saveRoast = (user) => {
  const found = getRoast(currentRoast.value.id, user)  
  if (found) {
      user.roasts[found] = currentRoast.value;
  } else {
      user.roasts.push(currentRoast.value);
  }
  return user.roasts[roasts.length - 1]
}

export const updateRoast = (roast, user) => {
  const foundIndex = user.roasts.findIndex((item) => item.id === roast.id)
  if (foundIndex) {
    user.roasts[foundIndex] = roast;
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
