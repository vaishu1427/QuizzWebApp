import './index.css';
import { useState } from 'react';
import Button from './Button';

export default function Card(props){
    // const ans=['Yellow','Red','Green','Grey'];
    const [ansClicked,setAnsClicked]=useState(false)
    const handleClick =(value)=>{
        setAnsClicked(true)
        console.log("Handle Click")
        if(value===props.finalans){
            props.correctans()
            console.log('textcrt')
        }
        else{
            props.totalans()
            console.log('wrongcrt')
        }
    }
    return(
        <div className="Card">
            <h3>{props.question}</h3>
            {
                Object.keys(props.ans).map((i)=>(
                    <Button disabled={ansClicked} onClick={handleClick}>{props.ans[i]}</Button>
                ))
            }
            
        </div>
    )
}