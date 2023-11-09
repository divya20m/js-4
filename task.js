//Print odd numbers in an array
const array1=[1,2,4,5,5,6,7,8,9,3,11,12,13]
const oddNumbers=array1.filter(function od(i){return i%2 !==0})
console.log("odd number of the array is:",oddNumbers)

//Convert all the strings to title caps in a string array
  const array2=["divya","akansha","vidurshi"]
  const titlestrings=array2.map(function ts(i){return i.charAt(0).toUpperCase() + i.slice(1)})
  console.log("titlestrings of the array is:", titlestrings)

//Sum of all numbers in an array
const array3=[1,2,3,4,5,6,7,8,2,3,57]
const sumArray=array3.reduce((acc,curr)=>acc+curr,0)
console.log("sum of array is:",sumArray)


//Return all the prime numbers in an array
const numbers = [2, 3, 4, 5, 6, 7, 8, 9]

function isPrime(number) {
  if (number <= 1) return false
  if (number <= 3) return true
  if (number % 2 === 0 || number % 3 === 0) return false

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) 
    return false
            }

            return true

        }
        const primeNumbers = numbers.filter((number) => {return isPrime(number)})
        console.log("Prime numbers:", primeNumbers)


  //Return all the palindromes in an array
   const words = ["radar", "apple", "level", "banana", "deified"]
    function isPalindrome(word) {
      return word === word.split('').reverse().join('')
    }
  const palindromes = words.filter(word => isPalindrome(word))
    console.log("Palindromes:", palindromes)
  
//Return median of two sorted arrays of the same size.
function median(arr1, arr2) {
    const arr = [...arr1, ...arr2].sort((a, b) => a - b)
    const midterm = Math.floor(arr.length / 2)
    console.log("midterm of array is:", midterm)
    if (arr.length % 2 === 0) {
      return (arr[midterm - 1] + arr[midterm]) / 2
    } else {
      return arr[midterm]
    }
  }
  
  const arr1 = [1, 2, 3, 4]
  const arr2 = [5, 6, 7, 8]
  const FindMedian = median(arr1, arr2)
  console.log("Median of the two sorted arrays is:", FindMedian)



  //Remove duplicates from an array
  function removeDuplicates(nums) {
    return [...new Set(nums)]
  }
  const inputArray = [1, 2, 2, 3, 4, 4, 5]
  const deduplicatedArray = removeDuplicates(inputArray)
  console.log("Deduplicated Array:", deduplicatedArray)
  

//Rotate an array by k times
  function rotateArray(nums, k) {
    const n = nums.length
    k %= n
    const rotated = [...nums.slice(n - k), ...nums.slice(0, n - k)]
    return rotated
  }
  
  const inputArrays = [1, 2, 3, 4, 5]
  const k = 2
  const rotatedArray = rotateArray(inputArrays, k)
  console.log("Rotated Array:", rotatedArray)
  