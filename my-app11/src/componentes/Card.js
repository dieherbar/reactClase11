export default function Card(props){
    return(
        // <div className="tarjeta">
        <div>
        <h3>Card component</h3>
        <span>Card text description</span>
        <img src={props.image} width={props.width} height={props.height}></img>
        <button>Call to action</button>
        </div>
    )
}