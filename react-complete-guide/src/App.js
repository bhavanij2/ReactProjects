import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      { id: "1", name: "Bill", age: 10 },
      { id: "2", name: "John", age: 20 },
      { id: "3", name: "Cathy", age: 30 },
    ],
    someProperty: "someValue",
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 10 },
        { name: "John", age: 20 },
        { name: "Cathy", age: 35 },
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Bill Joe', age: 10 },
        { name: event.target.value, age: 20 },
        { name: "Cathy", age: 35 },
      ]
    })
  }

  toggleDisplayHandler = () => {
    this.setState(
      {
        showPersons: !this.state.showPersons
      }
    )
  }

  deletePersonHandler = (personIndex) => {
    let personsCopy = [...this.state.persons];
    personsCopy.splice(personIndex, 1);
    this.setState({
      persons: personsCopy
    })
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
            />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>

        <button onClick={this.toggleDisplayHandler} >Toggle Display</button>

        {persons}


      </div>
    );
  }
}

export default App;

