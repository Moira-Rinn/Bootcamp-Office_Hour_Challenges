// Office Hour Challenge 1:

function doubleArr(arr){
  let newArr=[];
  arr.forEach(val => newArr.push(val*2));
  return newArr;
}

console.log(doubleArr([-1,2,3,4]));

// Office Hour Challenge 2:
// Yes... I cheated...

function swapArr(arr){
return arr.reverse();
}
console.log(swapArr([1,2,3,4,5]));

// alternate non "cheating" way...

function swapArr2(arr){

for(let i=0;i<arr.length/2;i++){
  [arr[i],arr[arr.length-1-i]]=[arr[arr.length-1-i],arr[i]];
}
 return arr;
}
console.log(swapArr2([1,2,3,4,5]));