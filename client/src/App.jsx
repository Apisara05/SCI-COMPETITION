import React, { useState } from "react";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Main render function
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage setCurrentPage={setCurrentPage} isLoggedIn={isLoggedIn} />
        );
      case "login":
        return (
          <LoginPage
            setCurrentPage={setCurrentPage}
            setIsLoggedIn={setIsLoggedIn}
            setUser={setUser}
          />
        );
      case "register":
        return (
          <RegisterPage
            setCurrentPage={setCurrentPage}
            setIsLoggedIn={setIsLoggedIn}
            setUser={setUser}
          />
        );
      case "notfound":
        return <NotFoundPage setCurrentPage={setCurrentPage} />;
      default:
        return <NotFoundPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        user={user}
        setUser={setUser}
      />
      {renderPage()}
    </div>
  );
};

export default App;
