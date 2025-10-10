import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import { RoutePage } from "./utils/RoutePage";
import QueryClientContextProvider from "./lib/QueryClientContextProvider";
import StoreProvider from "./lib/StoreProvider";

function App() {
  return (
    <StoreProvider>
      <QueryClientContextProvider>
        {/* <AuthProvider> */}
        {/* <Theme> */}
        <Router>
          <RoutePage />
        </Router>
      </QueryClientContextProvider>
    </StoreProvider>
  );
}

export default App;
