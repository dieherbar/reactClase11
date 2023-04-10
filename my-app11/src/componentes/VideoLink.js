export default function VideoLink(props){
    return(
        <div>
            <h2>iframe en el componente VideoLink.js</h2>
        <iframe width={props.width} height={props.height} src={props.fuente} > 
        {/* src="https://youtu.be/d4jT-TO-C_U?t=124"> */}
        </iframe>
        </div>
    )
}