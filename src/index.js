import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import Main from './BookStore/Book';
import GenerateNo from './Numbers/GenerateNo';
import Date from './Numbers/Date';
// import Main from './components/Main';
// import CrudMain from './components/CrudMain';
// import Table from './newComponents/table';
// import Validation from './newComponents/validation';
// import PostOffice from './newComponents/PostOffice';





// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  

<Date/>

{/* <Main/> */}
{/* <GenerateNo/> */}

  {/* <App/> */}
  {/* <BrowserRouter>
    <Main/>
  </BrowserRouter> */}


{/* <CrudMain/> */}
  
    {/* <Table/> */}
   
{/* <Validation/> */}
{/* <PostOffice/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
