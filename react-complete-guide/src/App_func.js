import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  
  const [personState, setPersonState] = useState(
    {
      persons : [
        { name : "Bill", age : 10},
        { name : "John", age : 20},
        { name : "Cathy", age : 30},
      ]
    }
  );

  console.log(personState);

  const [otherState, setOtherState] = useState({
    someProperty : "someValue"
  });

  console.log(otherState);

  const switchNameHandler = () => {
    setPersonState(
      {
        persons : [
          { name : "Bill Joe", age : 10},
          { name : "John", age : 20},
          { name : "Cathy", age : 35},
        ]
      }
    );
  };

  return (
    <div className="App">
        <h1>Hi, I'm a React App</h1>

        <button onClick={switchNameHandler} >Switch Name</button>

        <Person name={personState.persons[0].name} age={personState.persons[0].age} />
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>This is inner HTML Text</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age} />
      </div>
  );
}

// export default App;

// function App() {
//   return (
//     <div className="App">
//       <h1>Test Code</h1> 
//       <p>Writing first paragraph</p>
//       <Person name="Bill" age="25" />
//     </div>
  
//   );

//   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is what is being compiled from the above JSX code!'))
// }



