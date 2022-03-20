import React from "react";
import Home from "./pages/Home";
import NavBar from "./components/Nav";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from "./pages/Footer";
import CreateBlog from "./components/CreateBlog";
import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create-blog" element={<CreateBlog />} />
          <Route exact path="/blog/:id" element={<BlogDetail />} />
          <Route  element={<div>Page Not Found</div>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;