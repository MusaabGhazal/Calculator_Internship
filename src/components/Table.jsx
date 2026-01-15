import { formatter } from "../util/investment";

export default function Table({returnedData}) {
  
  console.log("TABLE RETURNED DATA");
  console.log(returnedData);
  

  const printedValues = (
    returnedData &&
    returnedData.map( (record) => {
      console.log(Object.values(record));
      return (
        <tr>
          { 
            Object.values(record).map((element) => {
              return (
                <td>{formatter.format(element)}</td>
              );
            })
          }
        </tr>
      );
    })
  );
  
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {
            printedValues
          }
        </tbody>
      </table>
    </>
  );
}
