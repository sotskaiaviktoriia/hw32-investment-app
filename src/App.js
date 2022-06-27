import { Provider } from "react-redux";

import store from "./store";

import InvestmentCard from "./components/InvestmentCard";

function App() {
  return (
    <Provider store={store}>
      <InvestmentCard />
    </Provider>
  );
}

export default App;
