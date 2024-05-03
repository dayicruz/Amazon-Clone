import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { FirebaseAuth } from "./firebase/config";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/Signup";
import Spinner from "./pages/Spinner";
import AppRoutet from "./router/AppRoutet";
import { PrivateRoute } from "./router/PrivateRoute";
import { PublicRoute } from "./router/PublicRoute";
import { login, logout } from "./store/auth/authSlide";

function App() {
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, email, displayName } = user;
      console.log(user);
      dispatch(login({ uid, email, displayName }));
    });
  }, []);

  if (status === "checking") {
    return <Spinner />;
  }

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <AppRoutet />
              </PrivateRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
