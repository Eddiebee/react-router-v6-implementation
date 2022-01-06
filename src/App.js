import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post" element={<Post />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
