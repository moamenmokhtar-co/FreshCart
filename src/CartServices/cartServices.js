import axios from "axios";
import { Bounce, toast } from "react-toastify";

export function addProductToCart(productId, setCartCount) {
    axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
            productId: productId,
        },
        {
            headers: {
                token: localStorage.getItem("userToken"),
            },
        }
    ).then(({ data }) => {
        setCartCount(data.numOfCartItems)
        toast.success(data.message, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    });



}