import './ButtonT.css';

function Button(props) {
    return ( 
        <button type="submit" className={props.tipo==="limpar"?" btn limpar":"btn"}>{props.rotulo}</button>
     );
}

export default Button;