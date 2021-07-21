// Office Hour Challenge 1...

for(let i=1; i<=100; i++){
  if(i%3==0 && i%5==0){
    console.log(`${i}: Silly Cat`);
  }
  else if(i%3==0){
    console.log(`${i}: Silly`);
  }
  else if(i%5==0){
    console.log(`${i}: Cat`);
  }
  else{ console.log(`${i}: Not a Cat!`);}
}

// Office Hour Challenge 2...

function makeItBig(arr){
  bigArray=[];
  arr.forEach(val => {
    if(val>=0){
      bigArray.push("big");
    }
    else{ bigArray.push(val);}
});
return bigArray;
}
console.log(makeItBig([-1,3,5,-5,7,-9,-18,4,19]));