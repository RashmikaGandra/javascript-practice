function largestAmongTwo(one , two) {
    return one > two ? one : two;
}
function smallestAmongTwo(two , three) {
    return two < three ? two : three
}
const largestOfFirstTwo = (largestAmongTwo(1,-5));
const largestOfSecondTwo = (smallestAmongTwo(largestOfFirstTwo,-6));
const secondLargest = smallestAmongTwo(largestOfFirstTwo,largestOfSecondTwo);
console.log(secondLargest);
