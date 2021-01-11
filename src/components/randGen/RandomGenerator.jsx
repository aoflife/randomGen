import { Box, Button, Card, CircularProgress, Paper, TextField, Typography } from "@material-ui/core"
import React, { useState } from "react"


const randomGenerator = (minLimit = 1, maxLimit = 100, excludeNumbers = []) => {
  
  console.log("excludedNumbers", excludeNumbers)

  let min = Math.floor(minLimit)
  let max = Math.floor(maxLimit)

  if (min > max) {
    // let temp = min
    // min = max
    // max = temp

    return window.alert("You should swap your max and min limits")
  }





  
  

  const excludeNumbersSet = new Set()
  excludeNumbers.forEach((num) => excludeNumbersSet.add(Number(num)))

  const possibleNumbers = []

  for (let i = min; i <= max; i++) {
    possibleNumbers.push(i)
  }

  const noPossibleChoices = possibleNumbers.every(num => {
    return excludeNumbersSet.has(num)
  })

  if (noPossibleChoices) {
    return window.alert("Your excluded list has every number possible")
    
  }

  // * what if exclude has all the numbers? How do we account for that?
  // * How do not get stuck in a loop? How can we check that it won't get stuck in a while loop? 
  // * iterate maxLimit with excludeNumbersSet, as soon as it fails then we can continue

  let alreadyChosen = true

  let randomNumber;
  while (alreadyChosen) {
    randomNumber = randomizeNumber(min, max)
    alreadyChosen = excludeNumbersSet.has(randomNumber)

  }

  console.log("randomNumber", randomNumber)

  return randomNumber


}

function randomizeNumber(min = 1, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function RandomGenerator() {
  const [minNum, setMinNum] = useState(0)
  const [maxNum, setMaxNum] = useState(100)
  const [excludeNums, setExcludeNums] = useState([])
  const [generatedNum, setGeneratedNum] = useState("")
  const [inProgress, setInProgress] = useState(false)

  const handleExcludeNums = (e) => {
    
    console.log("handleExclude", e.target.value)
    if (!e.target.value) {
      setExcludeNums([])
    } else {
      const excludeNums = e.target.value.split(",").map((num) => num.trim())
      setExcludeNums(excludeNums)

    }
  }


  const handleNumGen = () => {
    console.log("excludeNums", excludeNums)

    setInProgress(true)
    setGeneratedNum(randomGenerator(minNum, maxNum, excludeNums))
   setTimeout(() => setInProgress(false), 1000)
  }

  return (
    
  
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%" m={2}>
      <Box m={2}>
      {inProgress ? <CircularProgress size={90}/> : <Typography variant="h1">{generatedNum}</Typography>}  
      </Box>
        <Paper>
        <Box m={2} display="flex" justifyContent="center">
      <Typography>Random Number Generator</Typography>
      </Box>
        <Box m={2} display="flex" justifyContent="center">
      <TextField label="Min Amount (Inclusive)" variant="outlined" value={minNum} onChange={(e) =>  setMinNum(e.target.value)} type="number"/>
      </Box>
        <Box m={2} display="flex" justifyContent="center">
        <TextField label="Max Amount (Inclusive)" variant="outlined" value={maxNum} onChange={(e) => setMaxNum(e.target.value)}/>
      </Box>
        <Box m={2} display="flex" justifyContent="center">
        <TextField label="Numbers to exclude" helperText="Example: 1,2,3" variant="outlined" value={excludeNums} onChange={(e) => handleExcludeNums(e)}/>
      </Box>
      <Box display="flex" justifyContent="flex-end">
      <Button onClick={handleNumGen}>Generate</Button>
        </Box>


    </Paper>
    <Box ml={5}>

        
    </Box>
      </Box>    
    
  )



  
}

export default RandomGenerator