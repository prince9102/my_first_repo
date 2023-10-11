
import './App.css';
import UserInfo from './components/UserInfo';
import OtpValidation from './components/otpValidation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import GetInfo from './components/GetInfo';
// import StepperForm from './components/demo';
// import Login from './components/Login';
// import Register from './components/Register';
// import MovieApp from './components/MovieApp';
// import NavBar from './components/NavBar';
import UserRegister from './newComponents/Signin';
import Login from './newComponents/login';
import PostData from './newComponents/PostData';
import GetPost from './newComponents/GetPost';
import Header from './newComponents/Nav';




function App() {
  return (
    <>

      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>

            {/* <Route path='/login' element={ <UserInfo/>}/>
        <Route path='/otp' element={<OtpValidation/>}/>
        <Route path='/get' element={<GetInfo/>}/>
   <Route path ='/demo' element={<StepperForm/>}/> */}
            {/* <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/movie' element={<MovieApp/>}/> */}

            <Route path='/signin' element={<UserRegister />} />
            <Route path='/login' element={<Login />} />
            <Route path='/postdata' element={<PostData />} />
            <Route path='/getpost' element={<GetPost />} />
          </Routes>
        </BrowserRouter>
      </div>


    </>
  );
}

export default App;
