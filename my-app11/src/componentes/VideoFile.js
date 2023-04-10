export default function VideoFile(props){
    return(
        <div>
            <br></br>
            <hr></hr><br></br>
            <h2>Video del componente VideoFile.js</h2>
            <video controls width={props.ancho} height={props.alto} type={props.type}>
                <source src={props.fuente}></source>
            </video>
            {props.children}
        </div>

    )
}