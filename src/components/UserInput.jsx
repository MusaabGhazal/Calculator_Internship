import { calculateInvestmentResults } from "../util/investment";

const investmentValues = {
    initialInvestment : 0,
    annualInvestment : 0,
    expectedReturn : 0,
    duration : 0            
  }  

export default function UserInput({label, value, setReturnedData}){

    function handleChange(event){
        investmentValues[value]= +event.target.value
        setReturnedData(calculateInvestmentResults(investmentValues));
    }
    
    return (
        <p>
            <label>{label}</label>
            <input type="number" required onChange={handleChange}/>
        </p>
    );
}