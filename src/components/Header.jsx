import logo from "../assets/investment-calculator-logo.png"

export default function Header({...props}){
    return (
        <header {...props}>
            <img src={logo} alt="Money photo"/>
            <h1>React Investment Calculator</h1>
        </header> 
    );
}