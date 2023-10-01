import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import ItemsCard from "../components/ItemsCard";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const navigate = useNavigate();
  const CardItems = useSelector((state) => state.cart.cart);
  // console.log(CardItems);
  const totalQty = CardItems.reduce((TotalQty, item) => TotalQty + item.qty, 0);
  const totalPrice = CardItems.reduce(
    (Total, item) => Total + item.price * item.qty,
    0
  );
  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold  p-1 text-xl  rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>
        {CardItems.length > 0 ? (
          CardItems.map((food) => {
            return (
              <ItemsCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                desc={food.desc}
                rating={food.rating}
                qty={food.qty}
                img={food.img}
              />
            );
          })
        ) : (
          <h2 className=" font-bold text-2xl">Your card is empty</h2>
        )}

        <div className="absolute bottom-0 ">
          <h3 className="font-semibold text-gray-800">Items : {totalQty} </h3>
          <h3 className=" font-semibold text-gray-800">
            Total Amount : {totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={() =>
              CardItems.length > 0 ? navigate("/Success") : CardItems
            }
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5"
          >
            Checkout
          </button>
        </div>
      </div>

      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`cursor-pointer rounded-full  bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
          totalQty > 0 && "animate-bounce transition-all delay-600"
        } `}
      />
    </>
  );
};

export default Cart;
