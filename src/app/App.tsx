import { Provider } from "react-redux";
import { UsersView } from "../views";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UsersView />
      </Provider>
    </div>
  );
}

export default App;
