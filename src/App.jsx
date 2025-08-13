import Header from "./components/Header"
import ResultsTable from "./components/ResultsTable"
import UserInput from "./components/UserInput"
import { useState } from "react"
import { calculateInvestmentResults, formatter } from "./util/investment";



function App() {

const [userInput, setUserInput] = useState({

    initialInvestment: 100000,
    annualInvestment: 10000,
    expectedReturn: 1000000,
    duration: 2
});

function updateField(field, value){
  setUserInput(prev => ({...prev, [field] : Number(value)}));
}

const isValid = 
  userInput.initialInvestment > 0 &&
  userInput.annualInvestment > 0 &&
  userInput.expectedReturn > 0 &&
  userInput.duration > 0;

  const base = isValid ? calculateInvestmentResults(userInput) : [];

  let runningInterest = 0;

  const rows = base.map((r, i) => {
    runningInterest += r.interest;
    const investedCapital = userInput.initialInvestment + userInput.annualInvestment * (i + 1);

    return {
      year: r.year,
      valueEndOfYear: r.valueEndOfYear,
      interestThisYear: r.interest,
      totalInterest: runningInterest,
      investedCapital,
    };
  
  });

//saving the results and so we can send them into the ResultsTable component later.
//const [results, setResults] = useState([]); // a new state that stores and empty array for now


const results = calculateInvestmentResults(userInput);

  return (

    <>
        <Header/>



        <UserInput 
          // initialInvestment = {initialInvestment}
          // onInitialChange={(val) => setInitialInvestment(Number(val))}
          values={userInput} 
          onChange={updateField}
          
        />

        <ResultsTable rows = {rows} formatter={formatter} />
    </>

    
  )
}

export default App
