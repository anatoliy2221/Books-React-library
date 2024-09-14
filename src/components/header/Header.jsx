import { BsAmd } from "react-icons/bs";
import { MdOutlineShoppingBag } from "react-icons/md";
import ControlledSwitches from "../controlledSwitches/ControlledSwitches";



const Header = () => {
  return (
    <div>
        <BsAmd />
        <a href={"/"}>Bookshelf</a>
        <button>Home</button>
        <a>shopping list<MdOutlineShoppingBag /></a>
        <ControlledSwitches />

    </div>
    )
}

export default Header