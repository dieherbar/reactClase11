export default function VideoFile(props){
    return(
        <div>
            <br></br>
            <hr></hr><br></br>
            <h2>Video file</h2>
            <video width={props.ancho} height={props.alto}>
                <source src={props.fuente}></source>
            </video>
        </div>

    )
}