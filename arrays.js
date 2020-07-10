var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"]

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToBeginningOfArray(array, element) {
  var newadd = [element,...array]
  return newadd
}
