import './mobileNav.css'

import { NavLink, useParams } from 'react-router-dom';
import logo from "../../../images/logo.png"
import SearchBox from '../../sharedComponents/searchBox/SearchBox';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategroyValue } from '../../../redux/actions/actions';

const Navbar = () => {
    const dispatch = useDispatch()
    const { category } =  useParams()
    useEffect(() => {
        dispatch(setCategroyValue(category))
        
    }, [category]);
    
    function handleNav() {
            
                document.getElementById("sidebar").style.width = "100%";
                document.getElementById("sidebar").style.opacity = "1";
            
        

    }
      
    return (
        <div id='mobile-nav'>
            <div className='upper-nav'>
                <button className='activity-button' onClick={handleNav}><i class="fa-solid fa-bars"></i></button>
                {/* <div className='search-div-nav'>
                    <input type="search" placeholder='Search...'  className='search-input-nav'/>
                </div> */}
                
                <img src={logo} alt="" className='nav-image' id='image-nav'/>
                {/* <button className='activity-button'><i class="fa-solid fa-magnifying-glass"></i></button> */}
                <SearchBox />
                <span className='search-holder'>h</span>
            </div>
            <div className='categories-scrollable'>
                <NavLink to='/general' className='nav-category' activeClassName="active" onClick={() => {dispatch(setCategroyValue(category));}}>GENERAL</NavLink>
                <NavLink to='/business' className='nav-category' activeClassName="active" onClick={() => {dispatch(setCategroyValue(category));}}>BUSINESS</NavLink>
                <NavLink to='/sports' className='nav-category' activeClassName="active" onClick={() => {dispatch(setCategroyValue(category));}}>SPORTS</NavLink>
                <NavLink to='/entertainment' className='nav-category' activeClassName="active" onClick={() => {dispatch(setCategroyValue(category));}}>ENTERTAINMENT</NavLink>
                <NavLink to='/health' className='nav-category' activeClassName="active" onClick={() => {dispatch(setCategroyValue(category));}}>HEALTH</NavLink>
                <NavLink to='/science' className='nav-category' activeClassName="active" onClick={() => {dispatch(setCategroyValue(category));}}>SCIENCE</NavLink>
                <NavLink to='/technology' className='nav-category' activeClassName="active" onClick={() => {dispatch(setCategroyValue(category));}}>TECHNOLOGY</NavLink>
            </div>
        </div>
    );
}

export default Navbar;
