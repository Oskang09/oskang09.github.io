import { Keys } from '@galacean/engine';

// removing '0', 'O', 'Q', very hard to differentiate...
const displayMapper: Map<Keys, string> = new Map();
displayMapper.set(Keys.KeyA, "A");
displayMapper.set(Keys.KeyA, "A")
displayMapper.set(Keys.KeyB, "B")
displayMapper.set(Keys.KeyC, "C")
displayMapper.set(Keys.KeyD, "D")
displayMapper.set(Keys.KeyE, "E")
displayMapper.set(Keys.KeyF, "F")
displayMapper.set(Keys.KeyG, "G")
displayMapper.set(Keys.KeyH, "H")
displayMapper.set(Keys.KeyI, "I")
displayMapper.set(Keys.KeyJ, "J")
displayMapper.set(Keys.KeyK, "K")
displayMapper.set(Keys.KeyL, "L")
displayMapper.set(Keys.KeyM, "M")
displayMapper.set(Keys.KeyN, "N")
// displayMapper.set(Keys.KeyO, "O")
displayMapper.set(Keys.KeyP, "P")
// displayMapper.set(Keys.KeyQ, "Q")
displayMapper.set(Keys.KeyR, "R")
displayMapper.set(Keys.KeyS, "S")
displayMapper.set(Keys.KeyT, "T")
displayMapper.set(Keys.KeyU, "U")
displayMapper.set(Keys.KeyV, "V")
displayMapper.set(Keys.KeyW, "W")
displayMapper.set(Keys.KeyX, "X")
displayMapper.set(Keys.KeyY, "Y")
displayMapper.set(Keys.KeyZ, "Z")
// displayMapper.set(Keys.Digit0, "0")
displayMapper.set(Keys.Digit1, "1")
displayMapper.set(Keys.Digit2, "2")
displayMapper.set(Keys.Digit3, "3")
displayMapper.set(Keys.Digit4, "4")
displayMapper.set(Keys.Digit5, "5")
displayMapper.set(Keys.Digit6, "6")
displayMapper.set(Keys.Digit7, "7")
displayMapper.set(Keys.Digit8, "8")
displayMapper.set(Keys.Digit9, "9")

const availableKeys= displayMapper.keys();
export default {
  keys: Array.from(availableKeys),
  keyDisplay: displayMapper
};