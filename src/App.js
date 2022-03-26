import "./style/App.scss";
import ProductContainer from "./components/ProductContainer";
import FilterSection from "./components/FilterSection";
import { useEffect, createRef } from "react";
import useDataContext from "./components/useDataContext";
import FloatingCart from "./components/cart/FloatingCart";
import MiniCart from "./components/cart/MiniCart";
import {
  Icon,
  Rail,
  Ref,
  Grid,
  Menu,
  Segment,
  Sidebar,
  Sticky
} from "semantic-ui-react";
function App() {
  const { setProductData, isMiniCartOpen, setIsMiniCartOpen } =
    useDataContext();
  const contextRef = createRef();
  const getData = () => {
    fetch("./assets/products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductData(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid columns={1}>
      <Grid.Column>
        <FloatingCart />
      </Grid.Column>
      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={() => setIsMiniCartOpen(false)}
            vertical
            visible={isMiniCartOpen}
            width="thin"
          >
            <MiniCart />
            {/* <Icon name="home" />
              Home */}
          </Sidebar>

          <Sidebar.Pusher dimmed={isMiniCartOpen}>
            <div className="whole-container">
              <div className="center-container">
                <FilterSection />
                <ProductContainer />
              </div>
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
}

export default App;
