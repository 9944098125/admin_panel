import "./App.css";
import BaseRoutes from "./Routing/BaseRoutes";
import { Provider } from "react-redux";
import store from "./Redux/Store/store";

function App() {
  return (
    <Provider store={store}>
      <BaseRoutes />
    </Provider>
  );
}

export default App;
