import "./App.css";
import React, { useEffect, useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";
import PulseLoader from "react-spinners/PulseLoader";
//pages
import HomePage from "./pages/home/HomePage";
import SinglePostPage from "./pages/blog/singlePost/SinglePostPage";
import LoginPage from "./pages/login/LoginPage";
/* import RegisterPage from "./pages/register/RegisterPage"; */
import BlogPage from "./pages/blog/BlogPage";
import AboutPage from "./pages/about/AboutPage";
import TestimonialPage from "./pages/testimonial/TestimonialPage";
import ContactPage from "./pages/contact/ContactPage";
import CreatePostPage from "./pages/blog/createPost/CreatePostPage";
import CreateTestimonyPage from "./pages/testimonial/createTestimony/CreateTestimonyPage";
//components
import Header from "./components/header/Header";
import ContactsFooter from "./components/footer/ContactsFooter";
import WhatsappBtn from "./components/whatapp/WhatsappBtn";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(Context);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <PulseLoader color="#5982d1" loading size={30} />
        </div>
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/register" element={user ? <BlogPage /> : <RegisterPage />}/> */}
            <Route
              path="/login"
              element={user ? <BlogPage /> : <LoginPage />}
            />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/testimonial" element={<TestimonialPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/writePost" element={<CreatePostPage />} />
            <Route path="/writeTestimony" element={<CreateTestimonyPage />} />
            <Route path="/post/:postId" element={<SinglePostPage />} />
            <Route path='*' element={<div>Erro 404. Págiana não encontrada!</div>} />
          </Routes>
          <ContactsFooter />
          <WhatsappBtn />
        </Router>
      )}
    </>
  );
}

export default App;
