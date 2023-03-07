export default function Button(props){
    return <button id="ansbuttons" disabled={props.disabled} onClick={() => props.onClick(props.children)} style={{marginLeft:10}}>{props.children}</button>
    
}


