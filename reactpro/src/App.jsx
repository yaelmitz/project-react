import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Routes, Route } from "react-router-dom";
import TopNav from './components/TopNav';
import Destinations from './components/Destinations';
import Tips from './components/Tips';
import Blogs from './components/Blogs';
import About from './components/About';
import Home from './components/Home';
import SignInForm from './components/SignIn'
import SignUpForm from './components/SignUp';
import './components/MyStyles.css'
import Sign from './components/Sign';
import LayOut from './components/LayOut';

function App() {


  return (
    <>
    
    <TopNav></TopNav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="tips" element={<Tips />} />
        <Route path="sign" element={<Sign/>}/>
      </Routes>
    
      
    </>
  )
}

export default App








 

// export default function App() {
//   const [type, setType] = useState("signIn");
//   const handleOnClick = text => {
//     if (text !== type) {
//       setType(text);
//       return;
//     }
//   };
//   const containerClass =
//     "container " + (type === "signUp" ? "right-panel-active" : "");
//   return (
     
    
//     <div className="App">
//       <div className={containerClass} id="container">
//         <SignUpForm />
//         <SignInForm />
        
//         <div className="overlay-container">
//           <div className="overlay">
//             <div className="overlay-panel overlay-left">
//               <h1>Welcome Back!</h1>
//               <p>
//                 To keep connected with us please login with your personal info
//               </p>
//               <button
//                 className="ghost"
//                 id="signIn"
//                 onClick={() => handleOnClick("signIn")}
//               >
//                 Sign In
//               </button>
//             </div>
//             <div className="overlay-panel overlay-right">
//               <h1>Hello, Friend!</h1>
//               <p>Enter your personal details and start journey with us</p>
//               <button
//                 className="ghost "
//                 id="signUp"
//                 onClick={() => handleOnClick("signUp")}
//               >
//                 Sign Up
                 
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
     
    
//   );
// }

 