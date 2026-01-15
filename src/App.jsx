import Header from "./components/Header"
import Table from "./components/Table"
import UserInputs from "./components/UserInputs"
import { useState } from "react";

function App() {

  const [returnedData, setReturnedData] = useState();
  
  return (
    <>
      <Header id="header"/>
      <UserInputs setReturnedData={setReturnedData}/>
      <Table returnedData={returnedData}/>
    </>
  )
}

export default App
