import UserInput from "./UserInput";

export default function UserInputs({setReturnedData}){

    return (
        <section id="user-input">
            <div className="input-group">
                <UserInput setReturnedData={setReturnedData} value="initialInvestment" label="Initial Investment"></UserInput>
                <UserInput setReturnedData={setReturnedData} value="annualInvestment" label="Annual Investment"></UserInput>
            </div>
            <div className="input-group">
                <UserInput setReturnedData={setReturnedData} value="expectedReturn" label="Expected Return" ></UserInput>
                <UserInput setReturnedData={setReturnedData} value="duration" label="Duration"></UserInput>
            </div>
        </section>
    );
}