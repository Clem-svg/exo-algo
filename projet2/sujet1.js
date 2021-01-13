
const fs = require("fs");

const fileName = process.argv[2];



// SUJET 1
// Exo 1


  const sumToJEx1 = (array, k) => {
    let arr_data = [...array]
    for (a=0; a<arr_data.length; a++){
      for (b=0; b<arr_data.length; b++){
        if (arr_data[a]+arr_data[b] == k){
          console.log(`trouvé! ${arr_data[a]} + ${arr_data[b]} = ${k}` );
          return true;
        }
      }
    }
    return false;

  }

// Exo 2

  const sumToJEx2 = (array) => {
    let data = [...array]
    for (let firstIndex = 0; firstIndex < data.length; firstIndex++) {
      const addition = data.find((item) => {
        return data[firstIndex] + item == 17
      });
      if (addition) return true;
    }
    return false;
  }






fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }
  arr_data = data.split(" ").map((num) => parseInt(num, 10));


  console.log('************** SUJET 1 ***********************')
  console.log('Exercice 1 : ')
  console.log(sumToJEx1(arr_data, 17));

  console.log('')
  console.log('Exercice 2 : ')
  console.log(sumToJEx2(arr_data, 17));

  console.log('')
  console.log('Exercice 3 : ')


  });
