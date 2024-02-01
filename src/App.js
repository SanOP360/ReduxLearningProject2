import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/UIslice";
import Notification from "./components/UI/Notification";
let initial=true;
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  const notification=useSelector(state=>state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending",
          message: "Sending Cart data",
        })
      );

      try {
        const response = await fetch(
          "https://reduxlearning-99b9a-default-rtdb.firebaseio.com/Cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );

        if (!response.ok) {
          throw new Error("Sending data to cart failed");
        }

        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success",
            message: "Sent Cart data successfully",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error",
            message: "Sending data to cart failed",
          })
        );
      }
    };

    if(initial){
      initial=false;
      return;
    }

    sendCartData().catch((error) => {
      // Handle error if needed
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending data to cart failed",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
    {notification && <Notification
      status={notification.status}
      title={notification.title}
      message={notification.message}
    />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
