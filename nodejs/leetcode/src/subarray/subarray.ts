function getAllSubArray(arr: number[]) {
  console.log(`ORIGINAL Array [${arr}]`);
  let listOfSubArrays = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(`currentToEnd   ${i} -> ${arr.slice(i)}`);
    console.log(`currentToStart ${i} -> ${arr.slice(0, i)}`);
    listOfSubArrays.push(arr.slice(i));
    if (i != 0) listOfSubArrays.push(arr.slice(0, i));
  }
  console.dir(listOfSubArrays);
  return listOfSubArrays;
}

function sumOfAllElementsInArr(arr: Array<number>): number {
  const sumOfArray = arr.reduce(
    (sum: number, item: number) => (sum += item),
    0
  );
  console.log(`Sum = ${sumOfArray} \t[${arr}]`);
  return sumOfArray;
}

function returnIndex(arr: number[], target: number): number[][] {
  const allPermutations = getAllSubArray(arr);
  let result = [];
  for (let item of allPermutations) {
    if (sumOfAllElementsInArr(item) === target) {
      result.push(item);
    }
  }
  // could be multiple results
  return result;
}

// getAllSubArray([2, 3, 5, 1]);
sumOfAllElementsInArr([3, 2, 1, 4]);
console.log(returnIndex([1, 2, 3, 4, 5], 10));
