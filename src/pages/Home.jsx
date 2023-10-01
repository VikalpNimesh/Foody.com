// import Cart from "../components/Cart";
// import CategoryMenu from "../components/CategoryMenu";
// import FoodItems from "../components/FoodItems";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart"


const Home = () => {
    return (
        <>
<Navbar/>
<CategoryMenu/>
<FoodItems/>
<Cart />
        </>
      )
}

export default Home