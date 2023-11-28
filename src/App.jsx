import { useState } from 'react'

function App() {
  const [id, setId] = useState('');
  const [result, setResult] = useState('');

  const check = ()=> {
    const letters = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
  
    let number = id.substring(1, id.length-1);
    let letter = id.substring(id.length - 1);
  
    if (id.substring(0, id.length-8).toUpperCase() === "X"){
      number = "0" + number;
    }
    else if (id.substring(0, id.length-8).toUpperCase() === "Y") {
      number = "1" + number;
    }
    else if (id.substring(0, id.length-8).toUpperCase() === "Z") {
      number = "2" + number;
    } else {
      number = id.substring(0, id.length-1);
    }
  
  if (number.length < 8 || number.length > 8 || isNaN(number)) {
    setResult("El número de DNI es incorrecto o no es un número");
  } else if (letter == "" || !isNaN(letter)) {
    setResult("La letra del DNI no es correcta");
  } else if (letters[number % 23] !== letter.toUpperCase()) {
    setResult("El DNI no es válido");
  } else {
    setResult("Es un DNI válido");
  }
}

  return (
    <>
    <div className="container-md">
    <nav className="navbar navbar-dark bg-dark mt-2 mb-2">
      <div className="container-fluid">
        <a className='navbar-brand' href="#"><h1>Validador de DNI</h1></a>
      </div>
    </nav>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">DNI</span>
          <input 
            type="text"
            className="form-control" 
            placeholder="Introduce el número y una letra (9 digitos)" 
            //maxLength="9"
            value={id}
            onChange={(e) => setId(e.target.value)}></input>
      </div>
      <input type="button" className="btn btn-secondary" value="Validar" id="Check" onClick={() => check()}></input>
      <div>{result}</div>
    </div>
    <nav className='navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark'></nav>
    </>
  )
}

export default App
