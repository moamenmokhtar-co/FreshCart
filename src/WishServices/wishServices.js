import axios from "axios";

export function verifyWishItem(id, wishArray, setWishArray, wishArrayList, setWishArrayList) {
    console.log(wishArray);

    if (!wishArray.includes(id)) {
        setWishArray((prevWishArray) => [...new Set([...prevWishArray, id])]);

        addToWishList(id);
    } else {
        let updatedArray = wishArray.filter((item) => item !== id);
        setWishArray(updatedArray);

        const updatedWishArrayList = wishArrayList.filter((item) => item.id !== id);
        setWishArrayList(updatedWishArrayList);

        removeFromWishList(id);
    }
}

export function addToWishList(id) {
    axios
        .post(
            `https://ecommerce.routemisr.com/api/v1/wishlist`,
            {
                productId: id,
            },
            {
                headers: {
                    token: localStorage.getItem("userToken"),
                },
            }
        )
        .then((data) => {
            console.log(data);
        });
}

export function removeFromWishList(id, setWishArrayList) {
    axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
        headers: {
            token: localStorage.getItem("userToken"),
        },
    });
}