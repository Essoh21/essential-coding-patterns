"use strict";
/**
 * a function to sort the objects in-place on their creation sequence
 * number in O(n) and without any extra space.
 * @param {Array} list Of Objects containing Order number
 * @returns {Array}
 */
function sortInPlace(listOfObjects) {
  if (!Array.isArray(listOfObjects)) {
    throw new Error("param must be an array of objects");
  }
  for (const obj of listOfObjects) {
    //make sure each element is an object that contains num

    const isObject = (variable) => {
      return (
        typeof variable === "object" &&
        variable !== null &&
        !Array.isArray(variable)
      );
    };
    if (!isObject(obj) || obj.num === undefined) {
      throw new Error(
        "each element of the list must be an object that contains num"
      );
    }
  }

  // traverse listOfObject and place objects on their correct places
  let i = 0;
  while (i < listOfObjects.length) {
    console.log(i);
    const currentNumPosition = listOfObjects[i].num - 1;
    if (currentNumPosition !== i) {
      let temporarryObj = listOfObjects[i];
      listOfObjects[i] = listOfObjects[currentNumPosition];
      listOfObjects[currentNumPosition] = temporarryObj;
    } else {
      i += 1;
    }
  }

  return listOfObjects;
}

console.log(
  sortInPlace([{ num: 2 }, { num: 5 }, { num: 3 }, { num: 1 }, { num: 4 }])
);

// time complexity O(n)
// space complexity 0(1)
