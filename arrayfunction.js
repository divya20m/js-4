//Print odd numbers in an array
const array1=[1,2,4,5,5,6,7,8,9,3,11,12,13]
const oddNumbers=array1.filter((i)=>{return i%2 !==0})
console.log("odd number of the array is:",oddNumbers)

//Convert all the strings to title caps in a string array
const array2=["divya","akansha","vidurshi"]
const titlestrings=array2.map((i)=>{return i.charAt(0).toUpperCase() + i.slice(1)})
console.log("titlestrings of the array is:", titlestrings)


//Sum of all numbers in an array
const array3=[1,2,3,4,5,6,7,8,2,3,57]
const sumArray=array3.reduce((acc,curr)=>acc+curr,0)
console.log("sum of array is:",sumArray)

const numbers = [2, 3, 4, 5, 6, 7, 8, 9]

const isPrime=((number)=> {
  if (number <= 1) return false
  if (number <= 3) return true
  if (number % 2 === 0 || number % 3 === 0) return false

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) 
    return false
            }

            return true

        })
        const primeNumbers = numbers.filter((number) => {return isPrime(number)})
        console.log("Prime numbers:", primeNumbers)



  //Return all the palindromes in an array
   const words = ["radar", "apple", "level", "banana", "deified"]
    const isPalindrome= ((word)=> {
      return word === word.split('').reverse().join('')
    })
  const palindromes = words.filter(word => isPalindrome(word))
    console.log("Palindromes:", palindromes)