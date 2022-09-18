//Extract Value
//Write a function called extract Value which accepts an array of objects 
//and a key and returns a new array with the value of each object at the key

const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
function extractValue(array, key){
  return  array.reduce(function(accumulator, nextValue){
      if(key in nextValue)
        accumulator.push(nextValue[key])
        return accumulator;
    },[]);
}


//VowelCount 
//bit stummped on this so I tried to make sense of what the solution code was doing to help me wrap my head around this reduce method
function vowelCount(str){
    //create the constant that hold all the vowels we will be looking for in the string 
    const vowels = "aeiou";
    //turn the string into a array and then use reduce to iterate through the array
    return str.split('').reduce(function(accumulator,nextLetter){
        //change all the letters to lowercase as to match the vowels constant
        let lowerCased = nextLetter.toLowerCase()
        //check to see if the lowercased letter is associated to a key in vowels and if the key is not currently empty
        if(vowels.indexOf(lowerCased) !== -1){
          //incriment the value of the key associated the nextLetter
            if(accumulator[lowerCased]){
                accumulator[lowerCased]++;
            } else {
                //if the the key didn't have a current count start the cound at 1
                accumulator[lowerCased] = 1;
            }
        }
        return accumulator;
        //defalt value is an empty ovject where the vowle key and value count will be stored. 
    }, {});
}

//AddKeyAndValue 
// addKeyAndValue
// Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

const arrOfObj = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

function addKeyAndValue(arrayOfObjects, key, value) {

  function accumulateKeyValueForEachElement (previousArray, currentObject) {
    currentObject[key] = value;
    previousArray.push(currentObject);
    return previousArray;
  }

  const initialValue = [];

  // 1 Run Reduce
  const newObjectWithKeyValues = arrayOfObjects.reduce(
    accumulateKeyValueForEachElement,
    initialValue
  );

  // 2 Return the results
  return newObjectWithKeyValues;
}

console.log(addKeyAndValue(arrOfObj, 'title', 'Instructor'));
/* partition
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. 
The partition function should run the callback function on each value in the array and if the result of the callback function 
at that specific value is true, the value should be placed in the first subarray. 
If the result of the callback function at that specific value is false, the value should be placed in the second subarray. */
function isEven(val){
   return val % 2 === 0;
       
    }
  
  function isLongerThanThreeCharacters(val){
    return val.length > 3;
  }
  
  const names = ['Elie', 'Colt', 'Tim', 'Matt'];
  const arrayNum = [1,2,3,4,5,6,7,8];

  function partition(arrayOfValues, callback){
   
    function oddOrEvenSubArray(arrays, currentNumber){
        if(callback(currentNumber) === true){
            arrays[0].push(currentNumber);
        }else if(callback(currentNumber) === false){
            arrays[1].push(currentNumber);
    }
    return arrays;
}

const initalValue = [[],[]];
const oddOrEven = arrayOfValues.reduce(oddOrEvenSubArray,initalValue);

    return oddOrEven;//


    //if callback is true add value to first subarray
    

    //if callback is false add to second subarray

  } 


 console.log (partition(arrayNum, isEven)) // [[2,4,6,8], [1,3,5,7]];
 console.log(partition(names, isLongerThanThreeCharacters))