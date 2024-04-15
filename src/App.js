
import './App.css';
import ImagemCoffe from './coffe_background.jpg'
import Coffe1 from './coffe1.jpg'
import Coffe2 from './coffe3.jpg'
import Chocolate from './chocolate.jpg'
import { useState } from 'react';

function App() {
  const [valor, setValor] = useState(5);
  const [valor2, setValor2] = useState(5);
  const [valor3, setValor3] = useState(5);


  return (
    <div className="App" >
      <header className="App-header" style={{background:'#000000', display:'flex'}}>
        <div className='inicio' style={{display:'flex', alignItems: 'initial', }}>
          <div className='titulo'> 
            <h1>COFFEE SHOPS TIA ROSA</h1>
          </div>
          <div className='menu' style={{display:'flex', justifyContent:'space-around', position:'relative', bottom:'50px'}}>
              <a style={{textDecoration: 'none', color:'white', fontWeight:'200', paddingRight:'10px'}} href='#cardapio'>Cardápio</a>
              <a style={{textDecoration: 'none', color:'white', fontWeight:'200'}} href='#contato'>Contato</a>
          </div>
        </div>
        <img style={{width:'40vw'}} src={ImagemCoffe}></img>
      </header>
    {/* CARDÁPIO */}
      <div className='card' id='cardapio' style={{background:'#000000', display:'flex', flexDirection:'column' ,alignItems:'center'}}>
        <div style={{display:'flex', marginBottom:'10px'}}>
          <img src={Coffe1} style={{width:'20vw'}}/>
          <div style={{color:'white'}}>
            <p style={{color:'white'}}>Café expresso</p>
            <p style={{color:'white'}}>R$ {valor},00</p>
            <div style={{display:'flex'}}>
              <button type="button" class="btn btn-outline-primary" style={{width:'50px'}} value='5' onClick={(e) => setValor(valor + 5)}>+</button>
              <button type="button" class="btn btn-outline-danger"  style={{width:'50px'}} onClick={() => setValor(valor > 5 ? valor - 5 : 5)}>-</button>

            </div>
          </div>

        </div>
        <div style={{display:'flex' , marginBottom:'10px'}}>
          <img src={Coffe2} style={{width:'20vw'}}/>
          <div>
            <p style={{color:'white'}}>Café com leite</p>
            <p style={{color:'white'}}>R$ {valor2},00</p>
            <div style={{display:'flex'}}>
              <button type="button" class="btn btn-outline-primary" style={{width:'50px'}} onClick={(e) => setValor2(valor2 + 5)}>+</button>
              <button type="button" class="btn btn-outline-danger"  style={{width:'50px'}}  onClick={() => setValor2(valor2 > 5 ? valor2 - 5 : 5)}>-</button>

            </div>
          </div>

        </div>
        <div style={{display:'flex' , marginBottom:'10px'}}>
          <img src={Chocolate} style={{width:'20vw'}}/>
          <div>
            <p style={{color:'white'}}>Chocolate quente </p>
            <p style={{color:'white'}}>R$ {valor3},00</p>
            <div style={{display:'flex'}}>
              <button type="button" class="btn btn-outline-primary" style={{width:'50px'}} onClick={(e) => setValor3(valor3 + 5)}>+</button>
              <button type="button" class="btn btn-outline-danger"  style={{width:'50px'}}  onClick={() => setValor3(valor3 > 5 ? valor3 - 5 : 5)}>-</button>
            </div>
          </div>
        </div>
        <div id='contato' style={{height:'10vh', color:'white'}}>
          <p>Telefone: (61) 99999-9999</p>
          <p>E-mail: cafe@hotmail.com.br</p>
          
        </div>
        <div style={{color:'white'}}>
          RUA SANDRA, CEP: 12345-678
        </div>
      </div>
    </div>
  );
}

export default App;
