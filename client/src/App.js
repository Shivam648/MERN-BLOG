import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//pages
import Home from "./pages/home";
import About from "./pages/About";
import ArticleList from "./pages/articleList";
import Article from "./pages/Article";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/ArticleList" element={<ArticleList />} />
          <Route path="/articles/:name" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
