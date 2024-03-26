import React, { component } from 'react';
import FRinputDemo from './FRinputDemo';

class FRfocus extends component{
    constructor(props){
        super(props)
        this.inputRef=React.createRef()
    }
    clickhere=()=>{
        this.inputRef.current.focus()
    }
    render(){
        return(
            <div>
                <FRinputDemo ref={this.inputRef}/>
                <button onClick={this.clickhere}>focus here</button>
            </div>
            
        );
    }
}
export default FRfocus;
