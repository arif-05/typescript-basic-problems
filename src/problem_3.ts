function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}



console.log(concatenateArrays(["a", "b"], ["c"]));
// Output: ["a", "b", "c"]

console.log(concatenateArrays([1, 2], [3, 4], [5]));
// Output: [1, 2, 3, 4, 5]
