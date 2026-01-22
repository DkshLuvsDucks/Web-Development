import './App.css'
import Title from './Title.jsx'
import Desc from './Desc.jsx'
import ProductTab from './ProductTab.jsx';
import Greeting from './Greeting.jsx';
import ProductCardTab from './AmazonCards/ProductCardTab.jsx';
import Button from './Button.jsx';
import Form from './Form.jsx';

function App() { 
  return (
  <div>
    <Greeting username="Duzz" textColor="pink"/>
    <h1>This is my app component</h1>

    <p> inside app component we have :</p>
    
    <Button/>

    <Title/>
    {/* or use this <Title></Title> */}
    <Desc></Desc>

    <Title/>
    <Desc/>

    <Form/>

    <ProductTab/>

    <h1>Blockbuster Deals | Shop Now</h1>
    <ProductCardTab/>

  </div> 
  );
}

export default App
 