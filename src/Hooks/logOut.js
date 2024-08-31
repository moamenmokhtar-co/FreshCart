import { useContext } from "react"
import { UserContext } from "../Context/UserContext"
import { useNavigate } from "react-router-dom";
import { wishContext } from "../Context/WishContext";


const useLogOut = () => {
    const { setUserLogin } = useContext(UserContext)
    const { setWishArray } = useContext(wishContext);
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("userToken")
        setUserLogin("");
        navigate("/login");
        setWishArray([]);
    }

    return { logOut };
}


export default useLogOut;