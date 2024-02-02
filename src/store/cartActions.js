import { uiActions } from "./UIslice";
import { cartActions } from "./cartSlice";

export const fetchData=()=>{
    return async dispatch=>{
        const fetchData=async()=>{
          const response = await fetch(
            "https://reduxlearning-99b9a-default-rtdb.firebaseio.com/Cart.json"
          );

          if(!response.ok){
            throw new Error('Could not fetch cart data');
          }

          const data=await response.json();

          return data;
        };
        try{
           const cartData= await fetchData();
           dispatch(cartActions.replaceCart({items:cartData.items || [],
        totalQuantity:cartData.totalQuantity}));
        }
        catch(error){

            dispatch(
              uiActions.showNotification({
                status: "error",
                title: "Error",
                message: "Fetching data to cart failed",
              })
            );

        }
    }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending Cart data",
      })
    );

    const sendRequest = async () => {
      await fetch(
        "https://reduxlearning-99b9a-default-rtdb.firebaseio.com/Cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent Cart data successfully",
        })
      );
    } catch (error) {
      console.error(error); 
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending data to cart failed",
        })
      );
    }
  };
};
