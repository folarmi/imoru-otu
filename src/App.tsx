import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import { RoutePage } from "./utils/RoutePage";
import QueryClientContextProvider from "./lib/QueryClientContextProvider";
import StoreProvider from "./lib/StoreProvider";
import { Bounce, ToastContainer } from "react-toastify";
// import "react-tooltip/dist/react-tooltip.css";

function App() {
  return (
    <StoreProvider>
      <QueryClientContextProvider>
        {/* <AuthProvider> */}
        {/* <Theme> */}
        <Router>
          <RoutePage />
        </Router>
        <ToastContainer
          position="top-center"
          pauseOnHover
          hideProgressBar
          transition={Bounce}
          closeButton={false}
          closeOnClick
          autoClose={5000}
        />
      </QueryClientContextProvider>
    </StoreProvider>
  );
}

export default App;
