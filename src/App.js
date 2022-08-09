import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, PostPage } from "./pages";
import { Toolbar } from "./components/Toolbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { bootstrapLoginState } from "./store/auth/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLoginState());
  }, [dispatch]);

  return (
    <div className="App">
      <Toolbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
