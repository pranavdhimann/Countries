
import { useState } from "react";
import "./App.css"
import Header from "./components/Header";

import { Outlet } from "react-router-dom";
import {  ThemeProvider } from "./contexts/ThemeContext";

const App=()=>{
//    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("isDarkMode")) );
    return(
        <ThemeProvider >
       <Header />
       < Outlet />
        </ThemeProvider>
    )
}

export default App;