import Auth from "./components/Auth";
import AccountStatus from "./components/AccountStatus";
import Balance from "./components/Balance";
import Banking from "./components/Banking";

const App = () => {
  return (
    <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
      <Auth />
      <Balance />
      <Banking />
      <AccountStatus />
    </div>
  );
};

/*
  Auth
  Balance
  Banking
  AccountStatus
*/

export default App;
