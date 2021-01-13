
const fs = require("fs");

const fileName = process.argv[2];



// MERGE SORT

var mergeCount = 0;
const merge = (arr1, arr2) => {
  let sorted = [];

  while (arr1.length && arr2.length) {
    mergeCount ++;
    if (arr1[0] < arr2[0]) sorted.push(arr1.shift()) ;
    else sorted.push(arr2.shift());
  };

  return sorted.concat(arr1.slice().concat(arr2.slice()));

};


const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2),
        left = mergeSort(arr.slice(0, mid)),
        right = mergeSort(arr.slice(mid));

  return merge(left, right);

};


// BUBBLE SORT
var bubbleCount = 0;
const bubbleSort = (inputArr) => {
  let len = inputArr.length; //mesure la longueur de l'array
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      bubbleCount ++;
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j]; //stock temporairement data
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  console.log(`Tri bulle: ${bubbleCount} comparaisons - [${inputArr}]`);
};


//SELECTION SORT
const selectionSort = (inputArr) => {
  let count = 0;
  let n = inputArr.length;
  for(let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for(let j = i+1; j < n; j++){
      if(inputArr[j] < inputArr[min]) {
          min=j;
      }
      count++;
    }
    if (min != i) {
      // Swapping the elements
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
  }
  console.log(`Tri par selection : ${count} comparaisons - [${inputArr}]`);
}


fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }
  arr_data = data.split(" ").map((num) => parseInt(num, 10));


  bubbleSort(arr_data);
  console.log('')
  selectionSort(arr_data);
  console.log('')
  console.log('Tri fusion ' + mergeSort(arr_data));

});

