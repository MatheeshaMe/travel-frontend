import logo from "./logo.svg";
import "./App.css";
import StripeCheckout from "react-stripe-checkout";

function App() {
  return (
    <div className="App">
      <StripeCheckout bitcoin />
    </div>
  );
}

export default App;
