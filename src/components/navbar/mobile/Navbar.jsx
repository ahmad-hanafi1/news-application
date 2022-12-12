import './mobileNav.css'

import { NavLink } from 'react-router-dom';
import logo from "../../../images/logo.png"
import SearchBox from '../../sharedComponents/searchBox/SearchBox';

const Navbar = () => {

    console.log(document.getElementById("sidebar"));
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
                <NavLink to='/general' className='nav-category' activeClassName="active">GENERAL</NavLink>
                <NavLink to='/business' className='nav-category' activeClassName="active">BUSINESS</NavLink>
                <NavLink to='/sports' className='nav-category' activeClassName="active">SPORTS</NavLink>
                <NavLink to='/entertainment' className='nav-category' activeClassName="active">ENTERTAINMENT</NavLink>
                <NavLink to='/health' className='nav-category' activeClassName="active">HEALTH</NavLink>
                <NavLink to='/science' className='nav-category' activeClassName="active">SCIENCE</NavLink>
                <NavLink to='/technology' className='nav-category' activeClassName="active">TECHNOLOGY</NavLink>
            </div>
        </div>
    );
}

export default Navbar;
