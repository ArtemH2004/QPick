import { GlobalStyles } from "@/common/styles/GlobalStyles";
import RoutesProvider from "@/router/RoutesProvider";
import { Provider } from "react-redux";
import { store } from "@/store/store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <RoutesProvider />
    </Provider>
  );
}

export default App;
