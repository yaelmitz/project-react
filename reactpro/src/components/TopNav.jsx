import React from 'react'
import  {Routes,Route,Link,Outlet} from "react-router-dom"
import About from './About'
import Tips from './Tips'
import Blogs from './Blogs'
import Destinations from './Destinations'
import Sign from './Sign'
import Home from './Home'
import LayOut from './LayOut'

 function TopNav(){
    return(
<>
 
<nav>
    <Link to={'/home'}>----home-----</Link>
    <Link to={'/about'}>----about----</Link>
    <Link to={'/tips'}>-----tips----</Link>
    <Link to={'/blogs'}>-----blogs------</Link>
    <Link to={'/destinations'}>------destinations------</Link>
    <Link to={'/sign'}>-----sign in/up----</Link>
    
</nav>
 
<Outlet/>
</>
    );
}
export default TopNav;