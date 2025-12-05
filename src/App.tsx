import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import { RoutePage } from "./utils/RoutePage";
import QueryClientContextProvider from "./lib/QueryClientContextProvider";
import StoreProvider from "./lib/StoreProvider";
import { Bounce, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
// import "react-tooltip/dist/react-tooltip.css";

function App() {
  return (
    <>
      <Helmet>
        <title>Imoru Otu Atuluse</title>

        <meta
          name="description"
          content="A non-profit, non-political organization dedicated to community development,
      cultural preservation, and social welfare support since 2019."
        />

        <meta
          name="keywords"
          content="Imoru Otu Atuluse, imoru, Ondo, NGO, web developer"
        />

        <link rel="canonical" href="https://imoruotuatuluse.com.ng" />
      </Helmet>

      <StoreProvider>
        <QueryClientContextProvider>
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
    </>
  );
}

export default App;
