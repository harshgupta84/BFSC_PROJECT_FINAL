import React from "react";
import { Route, Routes } from "react-router-dom";

import { Sidebar, Navbar } from "./components"; // Assuming Sidebar is imported from components directory
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
import Footer from "./components/Footer";
import About from "./pages/About";
import Logout from "./pages/Logout";

const App = () => {
  return (
    <div className="relative bg-slate-900 sm:-8 p-4 w-screen ">
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5 min-h-screen flex flex-col">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/touse" element={<About />} />
          <Route path="/logout" element={<Logout/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
