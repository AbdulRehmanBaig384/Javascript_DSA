function findNumbersLessThan(arrays, limit) {
    let result = []; 
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] < limit) {
            result[result.length] = arrays[i]; 
        }
    }
    return result;
}

let numbers = [10, 5, 20, 3, 15, 8];
let limit = 10;
console.log("Numbers less than", limit, ":", findNumbersLessThan(numbers,limit));

//output
PS C:\Users\PMLS\Desktop\New folder> node arrays.js
Numbers less than 10 : [ 5, 3, 8 ]



let array=[1,2,3,4,5,6,7,5,9]
let max=array[0]
let secmax=array[0]  //3

for(let i=0;i<array.length;i++){
  if(array[i]>max){
    max=array[i] 
  }
  for(let j=0;j<array.length-1;j++){ 
  if( array[j]>secmax && array[j]!==max){
    secmax=array[j]
  }
  } 

  //
  }
  console.log(max,secmax)
 




let array=[1,2,3,4,5,6,7,5,9]
let max=array[0]
let secmax=array[0]  //3

for(let i=0;i<array.length;i++){
  if(array[i]>max){
    secmax=max
    max=array[i]
     
  } else if(array[i]>secmax && array[i]!==max){
    secmax=array[i]
  }


  //
  }
  console.log(max,secmax)



let array=[1,2,3,4,5,6,7,8,9]
let newarr=[]
for(let i=array.length-1;i>=0;i--){
  newarr=[...newarr,array[i]]
}
console.log(newarr)
