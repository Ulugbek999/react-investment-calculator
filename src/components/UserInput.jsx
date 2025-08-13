import { useState } from "react";

export default function UserInput({values, onChange}){

// const [inputObject, setInputObject] = useState({
//     initialInvestment: 0,
//     annualInvestment: 0,
//     expectedReturn: 0,
//     duration: 0
// })



// function handleOnChange(e){
//     //a function to take the onChange events event and pull the name of the event and the value entered
//     //and then assign them appropriately to the inputObject state.
//     const {name, value} = e.target;
//     setInputObject(prev => ({...prev, [name]: Number(value) }));
// }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>INITIAL INVESTMENT</label>
                    <input 
                        id="initial-investment"
                        type="number" 
                        value={values.initialInvestment}
                        onChange={(e) => onChange("initialInvestment", e.target.value)}

                    />
                </p>

                <p>
                   <label>ANNUAL INVESTMENT</label>
                   <input 
                        id="annual-investment"
                        type="number" 
                        value={values.annualInvestment}
                        onChange={(e) => onChange("annualInvestment", e.target.value)}
                   />                    
                </p>

            </div>

            <div className="input-group">
                <p>
                    <label>EXPECTED RETURN</label>
                    <input
                        id="expected-return"
                        type="number" 
                        value={values.expectedReturn}
                        onChange={(e) => onChange("expectedReturn", e.target.value)}
                    />
                    
                   
                </p>
                <p>
                   <label>DURATION</label>
                   <input 
                        id="duration"
                        type="number" 
                        value={values.duration}
                        onChange={(e) => onChange("duration", e.target.value)}
                   />  
                
                </p>
            </div>

            {console.log(values)}

        </section>

    );
}