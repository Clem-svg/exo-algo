
const fs = require("fs");

const fileName = process.argv[2];



// SUJET 1
// Exo 1


var countExo1 = 0

  const SumToJEx1 = (array, k) => {
    let arr_data = [...array]
    for (a=0; a<arr_data.length; a++){
      for (b=0; b<arr_data.length; b++){
        countExo1++
        if (arr_data[a]+arr_data[b] == k){
          console.log(`trouvé! ${arr_data[a]} + ${arr_data[b]} = ${k}` );
          return true;
        }
      }
    }
    return false;

  }

// Exo 2

  const sumToJEx3 = (array) => {
    let data = [...array]
    for (let firstIndex = 0; firstIndex < data.length; firstIndex++) {
      const addition = data.find((item) => {
        return data[firstIndex] + item == 17
      });
      if (addition) return true;
    }
    return false;
  }



// SUJET 2
// Exo 1


const howManySunsetViewsEx1 = (inputArr) => {
	let count = 0;
  let max = -1;
  let n = inputArr.length;
  for(let i = max+1; i < n; i++) {
    for(let j = i+1; j < n; j++){
      if(inputArr[j] > inputArr[i]) {
          max=j;
          i=max;
      }
    }
    count++;
  }
  return count;
}






fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }
  arr_data = data.split(" ").map((num) => parseInt(num, 10));


  console.log('************** SUJET 1 ***********************')
  console.log('Exercice 1 : ')
  console.log(SumToJEx1(arr_data, 17));
  console.log(`Nombre de comparaisons : ${countExo1}`);

  console.log('')
  console.log('Exercice 2 : ')
  console.log(sumToJEx3(arr_data));

  console.log('')
  console.log('Exercice 3 : ')
  console.log();


  console.log('************** SUJET 2 ***********************')
  console.log('Exercice 1 : ')
  console.log(howManySunsetViewsEx1(arr_data) + ' immeubles pourront vous offrir une vue sur le sunset');
  console.log(`Nombre de comparaisons :`);

  console.log('Exercice 2 : ')
  console.log();
  console.log(`Nombre de comparaisons :`);

  console.log('Exercice 3 : ')
  console.log();
  console.log(`Nombre de comparaisons :`);




  });
