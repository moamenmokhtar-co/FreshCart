import React, { useContext, useEffect, useState } from "react";
import style from "./ProductDetails.module.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import { addProductToCart } from "../../CartServices/cartServices";
import { CartContxet } from "../../Context/CartContext";
import LoadingScreen from "../../componets/LoadingScreen/LoadingScreen";
import RelatedProducts from '../../componets/RelatedProducts/RelatedProducts';

export default function ProductDetails() {
  const [details, setDetails] = useState({});
  const [related, setRelated] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  let { setCartCount } = useContext(CartContxet);

  useEffect(() => {
    getDetails();
    window.scrollTo(0, 0);
    // relatedProducts(details.category?._id);
  }, [id]);

  let settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let settingsCat = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    // autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  function getDetails() {
    setIsLoading(true);

    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then(({ data }) => {
        setDetails(data.data);

        relatedProducts(data.data?.category._id);
        setIsLoading(false);
      });
  }

  async function relatedProducts(detailsId) {
    const { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products`,
      {
        params: {
          category: detailsId,
        },
      }
    );

    setRelated(data.data);
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <div className="font-sans ">
        <div className="p-4 lg:max-w-7xl max-w-xl max-lg:mx-auto">
          {
            <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="max-h-[40rem] lg:col-span-3 bg-gradient-to-tr  from-[#F7F7F7] via-[#F7F7F7] to-[#F7F7F7] rounded-lg w-full lg:sticky top-0 text-center p-6">
                {details?.images?.length > 1 ? (
                  <Slider {...settings}>
                    {details?.images?.map((img, index) => {
                      return (
                        <img
                          src={img}
                          // alt={details.title}
                          className="w-full max-h-[30rem] rounded object-contain mx-auto py-6"
                          key={index}
                        />
                      );
                    })}
                  </Slider>
                ) : (
                  <img
                    src={details.imageCover}
                    alt={details.title}
                    className="w-full max-h-[30rem] rounded object-contain mx-auto py-6"
                  />
                )}

                <hr className="border-white border my-6" />
              </div>

              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-light-color">
                  {details.title}
                </h2>
                <div className="flex flex-wrap gap-4 mt-4">
                  <p className="text-gray-800 text-xl font-bold dark:text-light-color">
                    ${details.price}
                  </p>
                  <p className="text-gray-800 text-xl dark:text-light-color">
                    <strike>$16</strike>{" "}
                    <span className="text-sm ml-1">Tax included</span>
                  </p>
                </div>

                <div className="flex items-center mt-4">
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star, index) => {
                      const fullStar =
                        star <= Math.floor(details.ratingsAverage); // نجمة كاملة
                      const halfStar =
                        star === Math.ceil(details.ratingsAverage) &&
                        details.ratingsAverage % 1 !== 0; // نصف نجمة

                      return (
                        <i
                          key={index}
                          className={
                            fullStar
                              ? "fas fa-star text-green-color dark:text-green-light-color"
                              : halfStar
                              ? "fas fa-star-half-alt text-green-color dark:text-green-light-color"
                              : "fas fa-star text-gray-200"
                          }
                        ></i>
                      );
                    })}
                  </div>

                  <span className="px-2 ">
                    <span className=" rounded bg-green-coltext-green-color text-black px-3 py-0.5 text-xs font-semibold dark:text-gold-color">
                      {details.ratingsAverage}
                    </span>
                  </span>
                </div>

                <div className="mt-8">
                  <ul className="space-y-3 list-disc my-4 text-sm text-gray-800">
                    <li className="text-gray-800 flex dark:text-light-color">
                      <span className="font-semibold px-2">Category :</span>
                      <p>{details.category?.name}</p>
                    </li>
                    {/* <li className="text-gray-800 flex">
                      <span className="font-semibold px-2">Sub Category :</span>
                      <p>{details.subcategory[0]?.name}</p>
                    </li> */}
                    <li className="text-gray-800 flex dark:text-light-color">
                      <span className="font-semibold px-2">Brand :</span>
                      <p>{details.brand?.name}</p>
                    </li>
                  </ul>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-light-color">
                    Description
                  </h3>
                  <p className="dark:text-light-color dark:font-extralight">{details.description}</p>
                </div>

                <button
                  onClick={() => addProductToCart(details.id, setCartCount)}
                  type="button"
                  className="flex gap-2 items-center justify-center w-full mt-8 px-6 py-3 border bg-green-color dark:bg-green-light-color text-white text-sm font-semibold rounded-md"
                >
                  <i className="fas fa-cart-plus"></i>

                  <span>Add to cart</span>
                </button>
              </div>
            </div>
          }
        </div>
      </div>

      {/* ------------- Related Products ------------- */}

      <div className="bg-light-color mt-6 rounded-xl mx-auto">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-green-color">
            Customers also purchased
          </h2>
          <Slider {...settingsCat}>
            {related.map((product, index) => (
              <RelatedProducts product={product} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
