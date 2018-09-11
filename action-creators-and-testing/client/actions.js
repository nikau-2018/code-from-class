export function addWombat (wombat) {
  return 'A string'
}

export function delWombat (wombat) {
  return {
    type: 'DEL_WOMBAT',
    wombat
  }
}

export function updateWombat (wombat, newWombat) {
  return {
    type: 'UPDATE_WOMBAT',
    newWombat,
    wombat
  }
}