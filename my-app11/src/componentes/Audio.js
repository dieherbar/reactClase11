export default function Audio(props) {
    return (
        <>
            <div>
                <h2>Audio file from JS component</h2>
                <audio controls>
                    <source src={props.fuente} type="audio/mpeg"></source>
                    Your browser does not support the audio element.
                </audio>
            </div>
        </>
    )
}