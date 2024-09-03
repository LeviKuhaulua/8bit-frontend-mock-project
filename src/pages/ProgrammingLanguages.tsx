import * as React from "react";  // Importing 
import { createRoot } from "react-dom/client";


/* 
* Arrow Function Declaration Syntax: () => {...} 
*/
const ProgrammingLanguages = () => {
    return (
        <>
        
            <div className="container text-left my-5" style={{paddingTop:100}}>

                This is the programming language page


            </div>
        
        </>
    ); 
}; 

export default ProgrammingLanguages; 

const root = document.getElementById("root"); 

createRoot(root).render(<ProgrammingLanguages />); 