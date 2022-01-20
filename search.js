const arr = ['0', '1', '2'];
let result = [];

const getPermutation = (arr, fixed) => {
  if (arr.length >= 1) {
    for (let i = 0; i < arr.length; i++) {
      const newFixed = fixed + arr[i];
      // newFixed = '0'
      // newFixed = '01'
      // newFixed = '012'

      // newFixed = '1'
      // newFixed = '10'
      const copyArr = arr.slice();
      copyArr.splice(i, 1);
      // copyArr = ['1','2']
      // copyArr = ['2']
      // copyArr = []

      // copyArr = ['0','2']
      console.log('copy:', copyArr);
      result.push(newFixed);
      //result = ['0','01','012','1',]

      getPermutation(copyArr, newFixed);
    }
  }
};

getPermutation(arr, '');

console.log(result);
