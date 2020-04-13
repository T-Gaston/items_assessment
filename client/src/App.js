import React from 'react';
import './App.css';
import ItemList from './components/ItemList';
import axios from 'axios';

class App extends React.Component{
  
  state={ items:[], }
  
  componentDidMount(){
    axios.get('/api/items')
    .then(res => {
      console.log(res)
      this.setState({ items: res.data })
    })
    .catch(err => {
      console.log(err)
    })
  }

  createItem(){

  }


  render(){
    return (
      <div>
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;
