import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

import './App.css';

function App() {
  const noayoks = ["Razzak", "Anwar", "Jafor", "Alomgir", "Manna"]
  const Products = [
    {name: "Photoshop", price: "$30"},
    {name: "Illustrator", price: "$40"},
    {name: "PDF Reader", price: "$20"},
    {name: "After Effects", price: "$220"},
    {name: "After jS", price: "$220"},
    {name: "Effects", price: "$220"}
  ]

  // const productNames = Products.map(product => product.name)
  // console.log(productNames);

  const noayokNames = noayoks.map(nayok => nayok);
  console.log(noayokNames);

  

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>

        <Counter></Counter>
        <Users></Users>

        <ul>
          {
            noayoks.map(nayok => <li>{nayok}</li>)
          }

          {
            Products.map(product => <li>{product.name}</li>)
          }
          {
            Products.map(product => <li>{product.price}</li>)
          }
        </ul>

        {
          Products.map(product =><Product  product = {product}></Product>)
        }
        
        <Person name="Rubel" nayika="Moushumi"></Person>
        <Person name="Jashim" nayika="Shabana"></Person>
        <Person name="Elias K" nayika="Champa"></Person>
        <Person name={noayoks[0]} nayika="Moushumi"></Person>
        
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(50);
  // const handleIncrease = () => setCount(count + 1);

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>

      <button onMouseMove = {() => setCount(count + 1)}>Increase</button>

    </div>
  )
}


function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("calling effect")
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  })

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.email}</li>)
        }
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>    
    </div>
  )

 }


function Product(props){

  const productStyle={
    border: "1px solid yellow",
    borderRadius: "5px",
    backgroundColor: "tomato",
    height: "300px",
    width: "300px",
    float: "left"
  }

  const {name, price} = props.product;
  console.log(name, price)

  return(
    <div style={productStyle}>
      <p>{name} </p>
      <p>{price} </p>
      <button>Buy now</button>

    </div>
  )  
}



function Person(props){
  const personStyle={
    border:"2px solid yellow",
    margin: "10px",
    padding: "10px"   
  }
  console.log(props)

  return (
  <div style={personStyle}>
    <h1>Name: {props.name}</h1>
    <h3>Hello {props.nayika}</h3>
  </div>
  );
}


export default App; 
