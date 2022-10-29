import React from 'react'
import  ReactDOM from 'react-dom'
import App from './app';
import "./style.css";



function Page(){
    return(<div>
<App/>


</div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));