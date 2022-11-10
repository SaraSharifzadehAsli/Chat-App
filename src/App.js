import { Routes, Route } from "react-router-dom";

// Components
import Login from "./components/Login.js";
import Chats from "./components/Chats.js"

// Contexts
import AuthCotextProvider from "./Contexts/AuthCotextProvider.js";

function App() {
  return (
    <div className="App">
      <AuthCotextProvider>
        <Routes>
          <Route path="/chats" element = <Chats/> />
          <Route path="/" element = <Login/> />
        </Routes>
      </AuthCotextProvider>
    </div>
  );
}

export default App;
