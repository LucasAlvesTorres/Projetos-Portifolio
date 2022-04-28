import React from "react";
// eslint-disable-next-line
import App from "../App";
import './Header.css';


// eslint-disable-next-line
export default ({black}) => {
   // console.log('aqui ', black);  

    return (
        
       <header className={black ? 'black':''}>
            <div className="Header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix"></img>
                    </a>
                    </div>
            <div className="Header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="Usuário"></img>
                    </a></div>

        </header>
    );

}