import { useDispatch, useSelector } from "react-redux";
import "./computerNav.css"
import { setSearchValue } from "../../../redux/actions/actions";
import { useState } from "react";
import SelectRegion from "../../sharedComponents/selectRegion/SelectRegion";

const Navbar = () => {
    // const countryValue = useSelector(state => state.search.countryValue);
    const [open, setOpen] = useState(false);
    const searchValue = useSelector(state => state.search.searchValue);
    // const categoryValue = useSelector(state => state.search.categoryValue);
    const dispatch = useDispatch();


    const handleClick = () => {
        setOpen(!open)
    }


    
    return (
        <nav id="navbar">
            <div className="search-div">
                 <i className="fa-solid fa-magnifying-glass search-icon"></i>
                <input type="text" placeholder="Search" className="search-input" value={searchValue} onChange={(e) => {dispatch(setSearchValue(e.target.value)); } } />
            </div>

            <SelectRegion />


        </nav>
    )
}






export default Navbar;
