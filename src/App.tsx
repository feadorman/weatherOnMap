import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/components/Home";
import { Header } from "./pages/shared/Header/Header";
import { WeekStatistics } from "./pages/WeekStatistics/components/WeekStatistics";

// сonst API_KEY = '77da712ba58f4fdbad9110512221312'


function App() {

   

   return (
      <div className="container">
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/week-statistics" element={<WeekStatistics />} />
         </Routes>
      </div>
   );
}

export default App;
