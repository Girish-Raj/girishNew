import './App.css';
import React from "react";
import TimeLeft from './Component/TimeLeft/TimeLeft';
import { BrowserRouter, Route, Routes,  createBrowserRouter,


  redirect,
  RouterProvider, } from "react-router-dom";
import Intro from './Component/Intro/Intro';
import {useThemeProvider} from './Context/ThemeContext';
import { CourseProvider } from './Context/CourseContext';
import { ToastProvider } from './Context/ToastContext';
import { DialogProvider } from './Context/DialogContext';
import Home from './Page/Home/Home';
import Login from './Page/Login/Login.tsx';
import QuickQuiz from './Page/QuickQuiz';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
     
    },
    {
      path: "/signin",
      element: <Login />,
   
    },
    {
      path: "/quiz_link/:token",
      element: <QuickQuiz />,
     
    },
    
  
  ]);


  return (
    <div className="App h-screen">
    <useThemeProviderr>
  
        <CourseProvider>
          <ToastProvider>
            <DialogProvider>
              <React.StrictMode>
                <RouterProvider router={router} />
              </React.StrictMode>
            </DialogProvider>
          </ToastProvider>
        </CourseProvider>
     
    </useThemeProviderr>
  </div>
  
  )
}



export default App;
