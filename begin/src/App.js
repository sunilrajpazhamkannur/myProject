
import './App.css';
import ClassProps from './Components/ClassProps';
import Hello from './Components/Hello'
import Message from './Components/Message';
import Profile from './Components/Profile';
import Counter from './Components/Counter'
import DestructureProps from './Components/DestructureProps';
import Resume from './Components/Resume';
import FunctionEvent from './Components/FunctionEvent';
import ClassEvent from './Components/ClassEvent';
import FunctionalCounter from './Components/FunctionalCounter';
import ConditionalComponent from './Components/ConditionalComponent';
import Product from './Components/Product';
import IndexofExample from './Components/IndexofExample';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
     <Hello/>
     <Message/>
     <Profile name='SUNILRAJ' lname='PAZHAMKANNUR'>
      <h2>THIS IS PROFILE</h2>
      <h3>Experienced COMPUTER Engineer</h3>

      <ClassProps Msg='This is from Class Props'>
        <h2>Child Content from Class Props</h2>
      </ClassProps> 

      


     </Profile>
     <Counter/>
     <DestructureProps name='SUNILRAJ' lname='PAZHAMKANNUR'></DestructureProps>
     <Resume name='NIRANJANA'></Resume>
     <FunctionEvent/>
     <ClassEvent/>
    <FunctionalCounter/>
    <ConditionalComponent/>
    <Product/>
    <IndexofExample/>
    <Form/>
    </div>
  );
}
export default App
