import {Outlet } from "react-router-dom"
import classes from './App.module.css'

function App() {

  return (
    <div className={classes.app}>
      <div>Github Finder</div> 
      <Outlet/>
    </div>
  )
}

export default App
