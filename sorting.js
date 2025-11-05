let numberOfTimes = 0;

function simpleSort(data) {
  const copyOfArray = data.slice();

  for (let outerIndex = 0; outerIndex < data.length; outerIndex++) {
    for (let innerIndex = outerIndex + 1; innerIndex < data.length; innerIndex++) {
      numberOfTimes++;
      if (copyOfArray[outerIndex] < copyOfArray[innerIndex]) {
        let temp = copyOfArray[outerIndex];
        copyOfArray[outerIndex] = copyOfArray[innerIndex];
        copyOfArray[innerIndex] = temp;
      }
    }
  }

  return copyOfArray;
}

function addArrayValues(data) {
  let sum = 0;

  for (let index = 0; index < data.length; index++) {
    sum = sum + data[index];
  }

  return sum;
}

function mean(data) {
  const sumOfElements = addArrayValues(data);
  return sumOfElements / data.length;
}

function median(data) {
  const sortedData = simpleSort(data);
  const middleIndex = (sortedData.length - 1) / 2;
  const firstElement = Math.floor(middleIndex);
  const secondElement = Math.ceil(middleIndex);
  return (sortedData[firstElement] + sortedData[secondElement] ) / 2;
}

function randomNumbers(min, max) {
  return min + Math.floor(Math.random() * (max - min)) ;
}

function generaterandomNumbers(numberOfElements) {
  const randomData = [];
  
  for (let index = 0; index < numberOfElements; index++) {
    randomData.push(randomNumbers(0, 10));
  }

  return randomData;
}

function benchmark() {
  const data = generaterandomNumbers(5);
  console.log("sorted array :", simpleSort(data));
  console.log("number of elements :", data.length);
  console.log("number of times :", numberOfTimes);
  console.log("Mean :", mean(data));
  console.log("Median :", median(data));
}

benchmark(); 
