
import './App.css';
import Header, { Header2 } from './components/Header';

function App() {
  let data1='SUNILRAJ'
  let data2='18 CHESTER STREET, OLDHAM'
  let data3='OL97BD'
  return (
  <div>
    <Header data1={data1} />
    <Header data1={data2} />
    <Header2  data3={data3}></Header2>
    <h1 style={{color:'red', backgroundColor:'blue' }}>Hellow World!</h1>
    <h2 className='hello'>WELCOME TO MY WORLD OF COMPUTER!!</h2>
    <p>THIS IS SAMPLE DESCRIPTION </p>
    <p>THIS IS SAMPLE DESCRIPTION {data1}</p>
    {data2}
    <p>{data3}</p>
   <Hello1/>


    </div>
  );
}

export default App;

function Hello1()
{
  return(<h2 className='hello'>OLDHAM MALAYALEES ASSOCIATION</h2>);
}