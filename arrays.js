var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"]

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToBeginningOfArray(array, element) {
  var newadd = [element,...array]
  return newadd
}
function addElementToEndOfArray(array, element) {
  var newend = [...array, element]
  return newend
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element)
  return array
}
function removeElementFromBeginningOfArray(array) {
  array.slice(0)
  return array
}
function
