import React from 'react'
import {Link,Switch,Route} from 'react-router-dom'
import Chats from '../../pages/chats'
import Profil from '../../pages/profil'



export class Header extends React.Component{  
  render(){
    
    return <>
    <Link to="/"> home </Link>   
    <Link to='/pages/profil'> profil </Link>
    <Link to='/pages/chats/:roomId'> chats </Link>
    <Switch>
      <Route path={['/pages/profil']}>
         <Profil/>
      </Route>
      <Route path={['/pages/chats']}>
         <Chats/>
      </Route>
    </Switch>
    </>
  }
}

