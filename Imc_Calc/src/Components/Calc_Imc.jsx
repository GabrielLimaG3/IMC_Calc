import './Calc_Imc.css'

export default function Label(prop){

    return (
        <>
            <label htmlFor="">Peso</label>

            <input type="text" 
            value={prop.peso} 
            onChange={(c) => prop.setpeso(c.target.value)}/>

            <label htmlFor="">Altura</label>

            <input type="text" 
            value={prop.altura} 
            onChange={(e) => prop.setaltura(e.target.value)}/>

            <button 
            onClick={() => prop.StateImc()}>Calcular</button>

            <input type="" 
            value={"IMC : " + prop.res} 
            disabled />

            <h3>{prop.imc}</h3>

        </>
    )
}