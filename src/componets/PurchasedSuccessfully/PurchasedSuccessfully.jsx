import React, { useEffect, useState } from "react";
import style from "./PurchasedSuccessfully.module.css";
import { useNavigate } from "react-router-dom";
import { usePurchase } from "../../Context/PurchaseContext";
import OrderConfirmed from "../../assets/images/Svgs/OrderConfirmed.svg";

export default function PurchasedSuccessfully() {
  const [DescendingNumber, setDescendingNumber] = useState(5);
  const { hasPurchased, setHasPurchased } = usePurchase();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasPurchased) {
      navigate("/");
      return;
    } else {
      const countdown = setInterval(() => {
        setDescendingNumber((prevNumber) => {
          if (prevNumber <= 1) {
            clearInterval(countdown);
            setHasPurchased(false);
            navigate("/allorders");
          }
          return prevNumber - 1;
        });
      }, 1000);

      return () => {
        clearInterval(countdown);
      };
    }
  }, [navigate]);

  return (
    <div className="h-svh flex justify-center items-center ">
      <div className="-translate-y-24">
        <img className="w-[28rem]" src={OrderConfirmed} alt="" />
        <div className="flex justify-center items-center gap-1 py-4">
          <i className="fa-solid text-2xl md:text-5xl fa-circle-check text-green-500 me-4"></i>
          <p className="text-2xl md:text-5xl">Purchased Successfully</p>
        </div>
        <p className="text-center text-2xl md:text-5xl">{DescendingNumber}</p>
      </div>
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import style from "./PurchasedSuccessfully.module.css";
// import { useNavigate } from "react-router-dom";
// export default function PurchasedSuccessfully() {
//   const [DescendingNumber, setDescendingNumber] = useState(5);
//   const navigate = useNavigate();
//   useEffect(() => {
//     let countDown = setInterval(() => {
//       setDescendingNumber((prvDescendingNumber) => {
//         if (DescendingNumber <= 1) {
//           clearInterval(countDown);
//           navigate("/allorders");
//         }
//         return prvDescendingNumber - 1;
//       });

//       return () => {
//         clearInterval(countDown);
//       };
//     }, 1000);
//   }, [navigate]);

//   return (
//     <>
//       <div className="h-svh flex justify-center items-center ">
//         <div className="-translate-y-28">
//           <div className="flex justify-center items-center gap-3 ">
//             <i className="fa-solid text-5xl fa-circle-check text-green-500 me-4"></i>

//             <p className="text-5xl">Purchased Successfully</p>
//           </div>
//           <p className="text-center text-5xl">{DescendingNumber}</p>
//         </div>
//       </div>
//     </>
//   );
// }
