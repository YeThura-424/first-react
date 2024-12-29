// import Message from "./Message";
import CardGroup from "./components/CardGroup";
import ListGroup from "./components/ListGroup";
import ExtraCard from "./components/ExtraCard";
import ProductDetail from "./components/ProductDetail";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  return (
    <div>
      <PasswordGenerator />
      <ListGroup />
      <CardGroup />
      <ExtraCard />
      <ProductDetail />
    </div>
  );
}

export default App;
