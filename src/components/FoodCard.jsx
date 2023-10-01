import PropTypes from 'prop-types'; // Import PropTypes
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice"


const FoodCard = ({ id, name, price, desc, img, rating ,handleToast}) => {
const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500 ">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between ">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        
          onClick={()=>{dispatch(addToCart({id,name,price,img,rating,qty:1}));
          handleToast(name)
          
          }
          }
           >
          Add to cart
        </button>
      </div>
    </div>
  );
};

// Define PropTypes for your component
FoodCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  handleToast: PropTypes.func.isRequired,
};

export default FoodCard;
