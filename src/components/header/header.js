import React from 'react'
import {Link,Switch,Route, Redirect} from 'react-router-dom'
import Chats from '../../pages/chats'
import Profil from '../../pages/profil'


export class Header extends React.Component{  
  render(){
    return <>
    <Link to="/"> home </Link>   
    <Link to='/pages/profil'> profil </Link>
    <Link to='/pages/chats/:roomId'> chats </Link>
    <Switch>
      <Route path='/' exact render={()=><h1>Home Page</h1>} />
      <Route path={['/pages/profil']} component={Profil}/>
      
      <Route path={['/pages/chats']}>
         <Chats/>
      </Route>
      
      <Redirect to='/'/>
    </Switch>
    </>
  }
}

