
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header'
import React from 'react';
import Menu from "./components/Menu";
import '../src/index.css'
import '../src/style.css' 
import { ChakraProvider } from "@chakra-ui/react";

const Home = React.lazy(()=> import("./components/pages/Home"));
const Task = React.lazy(()=> import("./components/pages/Task"));
const AboutUS = React.lazy(()=> import("./components/pages/AboutUs"))   


function App() {
    return(  
      <ChakraProvider>
   <BrowserRouter>
   <Header/>
   <div>
    <Menu/>
    <Routes>
      <Route 
         path="/"
         element={
          <Suspense fallback="Loading...">
             <Home/>
          </Suspense>
         }/>
     <Route 
         path="/Task"
         element={
          <Suspense fallback="Loading...">
             <Task/>
          </Suspense>
         }/>  

     <Route 
         path="/AboutUs"
         element={
          <Suspense fallback="Loading...">
             <AboutUS/>
          </Suspense>
         }/>    
    </Routes>
   </div>
   </BrowserRouter>
   </ChakraProvider>
  )
}

       

export default App
