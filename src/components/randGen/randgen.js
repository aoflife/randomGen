function randomGenerator(minLimit = 1, maxLimit = 100, excludeNumbers = []) {

  
  const min = Math.floor(minLimit)
  const max = Math.floor(maxLimit)

  // * check that max > min else stop 
  let alreadyChosen = true

  const excludeNumbersSet = new Set()
  excludeNumbers.forEach((num) => excludeNumbersSet.add(Number(num)))


  // * what if exclude has all the numbers? How do we account for that?
  // * How do not get stuck in a loop? How can we check that it won't get stuck in a while loop? 
  // * iterate maxLimit with excludeNumbersSet, as soon as it fails then we can continue



  let randomNumber;
  while (alreadyChosen) {
    randomNumber= randomizeNumber(min, max)
    alreadyChosen = excludeNumbersSet.has(randomNumber)

  }

  console.log("randomNumber", randomNumber)

  return randomNumber


}

function randomizeNumber(min = 1, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

randomGenerator(-10, 2, [101, 100, 102, 103, 104, 105, 106, 107, 108])