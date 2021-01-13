// -------------------------- fusion --------------------------
var countFusion = 0;

const fusion = (t1, t2) => {
  var i = 0, j = 0, k = 0;
  var n = t1.length, m = t2.length;
  var t = new Array(n+m);

  while (i < n && j < m) {
    if (t1[i] < t2[j]) {
      t[k] = t1[i];
      i++;
    } else {
      t[k] = t2[j];
      j++;
    }
    k++;
    countFusion++;
  }
  while (i < n) {
    t[k] = t1[i];
    i++;
    k++;
    countFusion++;
  }
  while (j < m) {
    t[k] = t2[j];
    j++;
    k++;
    countFusion++;
  }
  return t;
}

const sliceAndFusion = (t) => {

  var n = t.length;
  var t1, t2;

  if (n == 0 || n == 1) {
    return t;
  } else {
    t1 = sliceAndFusion(t.slice(0,n/2));
    t2 = sliceAndFusion(t.slice(n/2));
    return fusion (t1,t2);
  }
}
// -------------------------- end fusion -------------------------

// -------------------------- bubble -----------------------------
var countBubble = 0;
let bubbleSort = (inputArr) => {
  let len = inputArr.length; //mesure la longueur de l'array
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      countBubble++
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j]; //stock temporairement data
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  return inputArr;
};
// -------------------------- end bubble ------------------------

// -------------------------- selection -------------------------

var countSelection = 0;
const selectionSort = (inputArr) => {
  let n = inputArr.length;
  for(let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for(let j = i+1; j < n; j++){
      if(inputArr[j] < inputArr[min]) {
          min=j;
      }
      countSelection++;
    }
    if (min != i) {
      // Swapping the elements
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
  }
  return inputArr;
}

// -------------------------- end selection ---------------------

//Define array
const createArrayData = (data) => {
  return data.split(" ").map(string => parseInt(string, 10));
}

//Alert if NaN
const alertIfNaN = (arrayData) => {
  if(arrayData.includes(NaN))return true;
}

const fs = require('fs');
const fileName = process.argv[2];
// Méthode asynchrone
fs.readFile(fileName, 'utf8', (error, data) => {
  if (error) {
    console.error(error.message);
    return ;
  }
  const arrayData = createArrayData(data);
    if (!alertIfNaN(arrayData)) {
      //fusion
      let fusionOutput = sliceAndFusion(arrayData);
      console.log(`Tri fusion: ${countFusion} comparaisons - ${fusionOutput}`);
      //bubble
      let bubbleOutput = bubbleSort(arrayData);
      console.log(`Tri bubble: ${countBubble} comparaisons - ${bubbleOutput}`);
      //selection
      let selectionOutput = selectionSort(arrayData);
      console.log(`Tri selection: ${countSelection} comparaisons - ${selectionOutput}`);


  } else {
    console.log('ERROR: wrong input values or empty file');
  }
});