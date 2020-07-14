import React, { useState } from 'react';
import './App.css'

function App() {
  const [transactions, setTransactions] = useState([])
  let [name, setName] = useState("");

  const inputChange = (e) => {
    setName(name = e.target.value)
    console.log(name)
  }

  const SubmitFnc = (e) => {
    e.preventDefault()
    setTransactions([...transactions, { name, id: Math.random() }])
    setName(name = "")
  }


  return (
    <div className="App">
      <h1 > Todo App </h1>
      <h4> Created by Ubaid Ali </h4>

      <form onSubmit={SubmitFnc}>

        <input onChange={inputChange}  value={name} placeholder="Enter Text..." required /> <br />
        <button type="submit" onSubmit={SubmitFnc}
          className="submit-btn"
        >Add</button> <br />

        <ul className='ul'>
          {transactions.map((listItem) => {
            return (
              <li key={listItem.id}>
                {listItem.name}

                <button
                  className="delete-btn"
                  type="button"
                  onClick={() => {
                    setTransactions(transactions.filter((item) =>
                      item.id !== listItem.id
                    ))
                  }} > x </button>

              </li> )})}
        </ul>
      </form>

    </div>
  );
}

export default App;
