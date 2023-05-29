import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import { ListTask } from "./components/ListTask";

import "./global.css";

function App() {
  return (
    <>
      <div>
        <div>
          <Header />
          <AddTask />
        </div>
        <div>
          <ListTask />
        </div>
      </div>
    </>
  );
}

export default App;
