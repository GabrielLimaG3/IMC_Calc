/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Calc from './Components/Calc_Imc'
import './App.css'

function App() {

  const [peso,setpeso] = useState(0)
  const [altura,setaltura] = useState(0)
  let [res, setres] = useState(0)
  let [imc_Calc, setimc_calc] = useState()

  const StateImc = () => {
    setres(res = peso/(altura*altura))
    if(res <= 18.5){
      setimc_calc(imc_Calc = "Cuidado! Você Esta Abaixo do Peso")
    }else if(res > 18.5 && res <= 25){
      setimc_calc(imc_Calc = "Você Esta No Peso Ideal")
    }else if(res > 25 && res <= 30){
      setimc_calc(imc_Calc = "Cuidado! Você Esta Com Sobrepeso")
    }else if(res > 30 && res <= 35){
      setimc_calc(imc_Calc = "Cuidado! Você Esta Com Obesidade Grau II ")
    }else if(res > 40){
      setimc_calc(imc_Calc = "Cuidado! Você Esta Com Obesidade Grau III ")
    }
}

  return (
    <div>
      <div className='conteiner'>
        <h1>Calculadora Imc</h1>
        <div className='content'>
          <Calc peso={peso}
          setpeso={setpeso} 
          altura={altura} 
          setaltura={setaltura} 
          res={res.toFixed(2)} 
          StateImc={() => StateImc()}
          imc={imc_Calc}/>
        </div>
      </div>
    </div>
  )
}

export default App
