export default function VideoLink(props){
    return(
        <div className="tarjeta">
         {/*    <h2>iframe en el componente VideoLink.js</h2>
        <iframe width={props.width} height={props.height} src={props.fuente} > 
         src="https://youtu.be/d4jT-TO-C_U?t=124"> 
        </iframe> */}
        
        <h2>video tag en el componente VideoLink.js</h2>
        <video controls src={props.fuente} ></video>
        
        </div>
    )
}