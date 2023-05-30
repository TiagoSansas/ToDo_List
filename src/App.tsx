import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";

import "./global.css";

function App() {
  return (
    <>
      <div>
        <div>
          <Header />
          <AddTask />
        </div>
      </div>
    </>
  );
}

export default App;
