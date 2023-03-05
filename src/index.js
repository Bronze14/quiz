import React from "react"
import ReactDOM from "react-dom/client"
import "./style.css"
import App from "./App"


function Index(){
    return (
        <App />
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Index/>)