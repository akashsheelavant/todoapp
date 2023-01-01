import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post';

class App extends Component {

state = {
  todos: [
    {id: 1, content: 'buy some milk'},
    {id: 2, content: 'play some game'}
  ]
}

deleteTodo = (id) => {
  const filterTodo = this.state.todos.filter(todo => {
    return todo.id !== id
  })
  this.setState({
    todos: filterTodo
  })
}

addTodo = (todo) => {
  todo.id = Math.random()
  let newtodos = [...this.state.todos, todo]
  this.setState({
    todos: newtodos
  })
}

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <NavBar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/:post_id" element={<Post />} />        
        </Routes>
        
      </div>
      </BrowserRouter>      
    );
  }
}

export default App;
