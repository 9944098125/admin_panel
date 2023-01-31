import "./App.css";
import BaseRoutes from "./Routing/BaseRoutes";
import { Provider } from "react-redux";
import store from "./Redux/Store/Store";
import SetAuthToken from "./Utils/SetAuthToken";

function App() {
  if (localStorage.getItem("token")) {
    SetAuthToken(localStorage.token);
  }
  return (
    <Provider store={store}>
      <BaseRoutes />
    </Provider>
  );
}

export default App;
