import roasts from "../mocks/roasts";
import { currentRoast } from "../signals";

const baseUrl = process.env.NODE_ENV == "production" ? 'https://roast-api.nolanmiller.me' : 'http://localhost:8080'

export const getRoast = async (id, user) => {
  // Mock Calls
  // const foundIndex = user.roasts.findIndex((item) => item.id === id)
  // if (foundIndex) return user.roasts[foundIndex]
  fetch(process.env.REACT_APP_API_URI)
}

 
export const saveRoast = async (user) => {
  const newRoast = {
    ...currentRoast.value,
    userId: user.id
  }
  const response = await fetch(`${baseUrl}/roasts/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newRoast)
  })
  if (!response) return;
  return response;
}

export const updateRoast = async (roast, user) => {
  const updatedRoast = {
    id: roast.id,
    isFavorite: roast.isFavorite,
    notes: roast.notes,
    rating: roast.rating
  }
  const response = await fetch(`${baseUrl}/roasts/${roast.id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedRoast)
  })
  if (!response) return;
  return response;
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
