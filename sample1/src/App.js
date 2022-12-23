import {Component} from 'react';
import './Todo'
import Todo from './Todo';

class App extends Component
{
State={
  name: 'SUNILRAJ',
  address: '18 CHESTER STREET',
  post: 'OLDHAM'
};

HandleChange=()=>{
  this.setState({
  name: 'PAZHAMKANNUR'
  })
  console.log('RUNNING...' + this.State.name)
}

  render()
  {
    return(
      <div className='App'>
      <h1> WELCOME...</h1>    
      <h1>{this.State.name}</h1> 
      <h2>{this.State.address}</h2>
      <h2>{this.State.post}</h2>

      <button onClick={this.HandleChange} >CHENAGE TEXT</button>     


      <Todo name={this.State.name}/>      

      </div>
    );
  }

}


export default App;
