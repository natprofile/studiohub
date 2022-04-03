import React from "react";
import { ReactDOM } from "react";


/* function Arrow(){

    return(
        <button>My button</button>
    );

} */
const AlertMe=(a)=>{
 alert(a);
}
const Arrow=()=>{
    return(

        <button onClick={AlertMe.bind(this,"I am from arrow function")} className="btn btn-danger m-5">my new button</button>

    );
}

export default Arrow;