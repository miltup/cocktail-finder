import React from 'react';
import './App.css';
import { useState } from 'react';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

function App() {
  const [drink, setDrink] = useState('');
  const [drinkname, setDrinkname] = useState('');
  const [instruction, setInstruction] = useState('');
  const [ing1, setIng1] = useState('');
  const [ing2, setIng2] = useState('');
  const [ing3, setIng3] = useState('');
  const [ing4, setIng4] = useState('');
  const [ing5, setIng5] = useState('');
  const [ing6, setIng6] = useState('');
  const [ing7, setIng7] = useState('');
  const [mes1, setMes1] = useState('');
  const [mes2, setMes2] = useState('');
  const [mes3, setMes3] = useState('');
  const [mes4, setMes4] = useState('');
  const [mes5, setMes5] = useState('');
  const [mes6, setMes6] = useState('');
  const [mes7, setMes7] = useState('');

  async function search(e) {
    e.preventDefault();
    try {
      const address = URL + drink
      const response = await fetch(address);

      if (response.ok) {
        const json = await response.json();
        console.log(json.drinks[0].strInstructions);
        setInstruction(json.drinks[0].strInstructions);

        setIng1(json.drinks[0].strIngredient1);
        setIng2(json.drinks[0].strIngredient2);
        setIng3(json.drinks[0].strIngredient3);
        setIng4(json.drinks[0].strIngredient4);
        setIng5(json.drinks[0].strIngredient5);
        setIng6(json.drinks[0].strIngredient6);
        setIng7(json.drinks[0].strIngredient7);

        setMes1(json.drinks[0].strMeasure1);
        setMes2(json.drinks[0].strMeasure2);
        setMes3(json.drinks[0].strMeasure3);
        setMes4(json.drinks[0].strMeasure4);
        setMes5(json.drinks[0].strMeasure5);
        setMes6(json.drinks[0].strMeasure6);
        setMes7(json.drinks[0].strMeasure7);

        setDrinkname(json.drinks[0].strDrink);

      } else {
        alert('Error retrieving recipe.');
        console.log(response);
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div id="container" style={{margin:20}}>
      <form onSubmit={search}>
        <h3>Find a recipe for a drink</h3>
        <p>Write down the name of the drink you wish to find the recipe for:</p>
        <div style={{margin:20}}>
          <label>Drink:</label>&nbsp;
          <input type="text" value={drink} onChange={e => setDrink(e.target.value)}/>
        </div>
        <div style={{margin: 20}}>
          <button>Find Recipe</button>
        </div>
        <div>
          <h4>{drinkname}</h4>
        </div>
        <div style={{margin: 20}}>
          <label>Ingredients:</label>
          <ol>
            <li>{ing1} {mes1}</li>
            <li>{ing2} {mes2}</li>
            <li>{ing3} {mes3}</li>
            <li>{ing4} {mes4}</li>
            <li>{ing5} {mes5}</li>
            <li>{ing6} {mes6}</li>
            <li>{ing7} {mes7}</li>
          </ol>
        </div>
        <div style={{margin: 20}}>
          <label>Instructions:</label>
          <br/>
          <output style={{margin: 20}}>{instruction}</output>
        </div>
      </form>
    </div>
  );
}

export default App;
