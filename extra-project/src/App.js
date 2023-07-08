import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';
import React from 'react';
import { useState } from 'react';
export default function App() {
  const [count, setCount] = useState(0)
   function handleAdd() {
    setCount(count + 1)
   }
   function handleSub(){
    setCount(count - 1)
   }
   function handleReset(){
    setCount(0)
   }
  return (
    <>
    <Header />
    <div className='App'>
    <div className='box'>
      <p>{count}</p>
      <button onClick={handleAdd} className='add'>ADD</button>
      <button onClick={handleSub} className='sub'>SUB</button>
      <button onClick={handleReset} className='reset'>RESET</button>
    </div>
    </div>
    <Footer />
    </>
    );
}
