var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"]

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToBeginningOfArray(array, element) {
  [element,...array]
  var newadd = [element,...array]
  return newadd
}
