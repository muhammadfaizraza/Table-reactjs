import logo from './logo.svg';
import './App.css';
import Table from './Components/Table';
import TableData from '../src/Data.json'


function App() {
  
  const columns = [

    {field : 'id',header : 'ID'},
    {field : 'first_name',header : 'FirstName'},
    {field : 'last_name',header : 'Last Name'},
    {field : 'gender',header : 'Gender'},
    {field : 'email',header : 'Email'},
    {field : 'Country',header : 'Country'}
  ]
  
  
  
  
  
  return  (
    <div className="App">
<Table data ={TableData} column = {columns}/>
   </div>
  );
}

export default App;
