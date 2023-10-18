
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header'
import React from 'react';
import Menu from "./components/Menu";
import '../src/index.css'
import '../src/style.css' 
import { ChakraProvider, CSSReset, ColorModeProvider } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react';
const Home = React.lazy(()=> import("./components/pages/Home"));
const Task = React.lazy(()=> import("./components/pages/Task"));
const AboutUS = React.lazy(()=> import("./components/pages/AboutUs"))   

const theme = extendTheme({
   config: {
     initialColorMode: 'light', // Set initial color mode to 'light'
     useSystemColorMode: false, // Allow user to override
   },
 });
function App() {
    return(  
      <ChakraProvider theme={theme}>
          <ColorModeProvider>
          <CSSReset />
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
   </ColorModeProvider>
   </ChakraProvider>
  )
}

       

export default App
