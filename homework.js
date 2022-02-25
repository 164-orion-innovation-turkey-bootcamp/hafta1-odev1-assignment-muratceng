//Bir sayı dizisi ve hedef değeri veriliyor. Toplamı, hedefe eşit olan ikililerin indexlerini dönen fonksiyonu yazınız.

//örnekler
const example1Array = [2, 7, 11, 15];
const target1 = 9;
const example2Array = [3, 2, 4];
const target2 = 6;
const example3Array = [3, 3];
const target3 = 6;

//ilk çözüm Execution time: 10 ms
function findIndexes(arr, target) {
  let indexes = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        let tmp = [i, j];
        indexes.push(tmp);
      }
    }
  }
  if (indexes.length == 1) {
    return indexes[0];
  }
  return indexes;
}

//date.now() kullanılarak execution time hesaplanmıştır.
let start = Date.now();
console.log(findIndexes(example1Array, target1));
console.log(findIndexes(example2Array, target2));
console.log(findIndexes(example3Array, target3));
let end = Date.now();

console.log(`Execution time: ${end - start} ms`);
