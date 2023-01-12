import React from "react";
import LoginPage from "./components/loginPage";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Create from "./components/create";
import Edit from "./components/edit";
import HomePage from "./components/homePage";
// import LoginPage from "./components/loginPage";
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import FormOne from "./components/formCreate";
import FormTwo from "./components/formCreateTwo";
import NeedsList from "./components/needsList";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <LoginPage /> */}
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/records" element={<RecordList />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/formCreate" element={<FormOne />} />
        <Route path="/formCreateTwo" element={<FormTwo />} />
        <Route path="/needsList" element={<NeedsList />} />
        {/* <Route path="/create" element={<Create />} /> */}
        {/* <Route path="/pipeline" element={<Create />} /> */}
      </Routes>
    </div>
  );
};

export default App;
