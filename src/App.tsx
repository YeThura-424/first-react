// import Message from "./Message";
import CardGroup from "./components/CardGroup";
import ListGroup from "./components/ListGroup";
import ExtraCard from "./components/ExtraCard";
import ProductDetail from "./components/ProductDetail";
import PasswordGenerator from "./components/PasswordGenerator";
import CurrencyExanger from "./components/CurrencyExanger";
function App() {
  return (
    <div>
      <div className="flex-box">
        <PasswordGenerator />
        <CurrencyExanger />
      </div>
      <ListGroup />
      <CardGroup />
      <ExtraCard />
      <ProductDetail />
    </div>
  );
}

export default App;
