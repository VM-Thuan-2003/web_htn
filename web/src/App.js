import React,{ useState } from 'react'
import {LayoutHome, LayoutSetup} from "./components/layouts/master"
const App = () => {
  const [login, setLogin] = useState(1)
  const [user, setUser] = useState({
    "fullname":"user test1",
    "username":"usertest1"
  })

  const update_state = (newLogin, newUser)=>{
    console.log("new",newLogin,newUser)
    setLogin(newLogin)
    setUser(newUser)
  }

  if(login === 0)
    return (
      <div id='main_setup'>
        <LayoutSetup update_state = {update_state}/>
      </div>
    )
  else
    return (
      <div id='main_home'>
        <LayoutHome user={user}/>
      </div>
    )
}

export default App