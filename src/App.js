import logo from './logo.svg';
import './App.css';
import React from 'react';
import About  from './screens/About';
import Contact from './screens/Contact';
function App() {
  return (
    <div className="App">
      {/*This line imports the About component and renders it in the App component*/}
      <About/> 
      {/*This line imports the Contact component and renders it in the App component*/} 
      <Contact/> 
    </div>
  );
}

export default App;
