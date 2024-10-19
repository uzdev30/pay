import React from "react";
import { styles } from "./util/style";
import {
  Billing,
  Business,
  Clients,
  Contract,
  Cta,
  Footer,
  Home,
  Navbar,
  Statistics,
  Testmonials,
} from "./components";

const App = () => {
  return (
    <div className=" bg-primary w-full overflow-hidden">
      {/* Navbar */}
      <div className={`${styles.paddingX}  `}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>
      {/* Home */}
      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.container}`}>
          <Home />
        </div>
      </div>
      {/*  */}
      <div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.container}`}>
          <Statistics />
          <Contract />
          <Billing />
          <Business />
          <Testmonials />
          <Clients />
          <Cta />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
