
const fs = require("fs");

const fileName = process.argv[2];


// Exo 1

const howManySunsetViewsEx1 = (array) => {
  let countComparaison = 0;
	let count = 0;
  let max = -1;
  let n = array.length;
  for(let i = max+1; i < n; i++) {
    for(let j = i+1; j < n; j++){
      countComparaison ++;
      if(array[j] > array[i]) {
          max=j;
          i=max;
      }
    }
    count++;
  }
  console.log(`${countComparaison} comparaisons` );
  return count;
}


// Exo 2

const howManySunsetViewsEx2 = (array) => {
  let result = [];
  let countComparaison = 0;

  result.push(array[array.length-1])
    for(let i=array.length; i > 1; i--){
    countComparaison ++;
      if (array[i-2] > array[i-1]){
        result.push(array[i-2])
      }
    }

  console.log(`${countComparaison} comparaisons` );
  return result.length
}




fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }
  arr_data = data.split(" ").map((num) => parseInt(num, 10));


  console.log('************** SUJET 2 ***********************')
  console.log('Exercice 1 : ')
  console.log(howManySunsetViewsEx1(arr_data) + ' immeubles pourront vous offrir une vue sur le sunset');
  console.log();
  console.log('Exercice 2 : ')
  console.log(howManySunsetViewsEx2(arr_data) + ' immeubles pourront vous offrir une vue sur le sunset');
  console.log();
  console.log('Exercice 3 : ')
  console.log();




  });
