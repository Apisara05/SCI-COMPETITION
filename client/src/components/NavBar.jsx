import React from "react";
import { Home } from "lucide-react";

const NavBar = ({
  currentPage,
  setCurrentPage,
  isLoggedIn,
  setIsLoggedIn,
  user,
  setUser,
}) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setCurrentPage("home");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="text-2xl font-bold cursor-pointer flex items-center gap-2"
          onClick={() => setCurrentPage("home")}
        >
          <Home size={28} />
          MyApp
        </h1>
        <div className="flex gap-4">
          <button
            onClick={() => setCurrentPage("home")}
            className={`px-4 py-2 rounded-lg transition-all ${
              currentPage === "home"
                ? "bg-white text-blue-600 font-medium"
                : "hover:bg-blue-500"
            }`}
          >
            หน้าแรก
          </button>
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => setCurrentPage("login")}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentPage === "login"
                    ? "bg-white text-blue-600 font-medium"
                    : "hover:bg-blue-500"
                }`}
              >
                เข้าสู่ระบบ
              </button>
              <button
                onClick={() => setCurrentPage("register")}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentPage === "register"
                    ? "bg-white text-blue-600 font-medium"
                    : "hover:bg-blue-500"
                }`}
              >
                สมัครสมาชิก
              </button>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <span className="text-sm">สวัสดี, {user?.name}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition-all"
              >
                ออกจากระบบ
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
