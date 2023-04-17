export default function Saludo(props){   //({texto}){   //(props){
    return(
        <div>
            {/* <h1>Hola k'ace {texto}</h1> */}
        <h2>Hola {props.texto} de {props.edad} años</h2>
        <br></br>
        <button>{props.children}</button>
        <br></br>
        {props.children}
        </div>
    )
}