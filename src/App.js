import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';


function App() {

const[comments,setComments]=useState([])
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(json => setComments(json))
})
  return (
    <div className="App">
    

  {
    comments.map((comment)=>{
      return   <Table striped bordered hover size="sm">
      <thead>
        <tr>
          
          <th> Name</th>
          <th> Email</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        <tr>
      
          <td  className=''>{comment.name}</td>
          <td>{comment.email}</td>
          <td>{comment.body}</td>
        </tr>
     
      </tbody>
    </Table>
    })
  }
    </div>
  );
}

export default App;
