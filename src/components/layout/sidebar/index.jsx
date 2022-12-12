import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './sidebar.css'
import { useDispatch } from 'react-redux';
import {  setCategroyValue } from '../../../redux/actions/actions';
import logo from "../../../images/logo.png"
import Footer from '../../Footer/Footer';
import SelectRegion from '../../sharedComponents/selectRegion/SelectRegion';



const Sidebar = () => {
    const { category } =  useParams()
    const dispatch = useDispatch()

    useEffect( () => {
        
        dispatch(setCategroyValue(category))
    }, [category, dispatch])

    const closeSidebar = () => {
        document.getElementById('sidebar').style.width = '0';
        document.getElementById('sidebar').style.opacity = '0';
    }
    return  (
        <>
            <div id="sidebar">
                {window.innerWidth < 700 ? <button className='closing-Button' onClick={closeSidebar}>X</button> : null}
                <div className='company'>
                <img src={logo} alt="Logo" className='logo' />
                 <h1 className='breaking-news'>NEWS</h1>   
                </div>
                <div className='categories'>
                <NavLink to='/general' className='news-category'  onClick={dispatch(setCategroyValue(category))}>GENERAL</NavLink>
                <NavLink to='/business' className='news-category' onClick={ dispatch(setCategroyValue(category))}>BUSINESS</NavLink>
                <NavLink to='/sports' className='news-category' onClick={ dispatch(setCategroyValue(category))}>SPORTS</NavLink>
                <NavLink to='/entertainment' className='news-category' onClick={ dispatch(setCategroyValue(category))}>ENTERTAINMENT</NavLink>
                <NavLink to='/health' className='news-category' onClick={ dispatch(setCategroyValue(category))}>HEALTH</NavLink>
                <NavLink to='/science' className='news-category' onClick={ dispatch(setCategroyValue(category))}>SCIENCE</NavLink>
                <NavLink to='/technology' className='news-category' onClick={ dispatch(setCategroyValue(category))}>TECHNOLOGY</NavLink>

                </div>

            {window.innerWidth < 700 ? <SelectRegion />: null}

            { window.innerWidth < 700 ? 
            <>
            <footer id='footer-nav'>
            <div className='footer-titles'>
                <p className='footer-title'>Advertisement</p>
                <p className='footer-title'>About</p>
                <p className='footer-title'>Contact</p>
                <p className='footer-title'>Terms of Use</p>
                <p className='footer-title'>Privacy Policy</p>
                <p className='footer-title'>© GNews</p>

            </div>

            <div className='footer-icons'>
            <i className="fa-brands fa-facebook footer-icon"></i>
            <i className="fa-brands fa-twitter footer-icon"></i>
            <i className="fa-brands fa-instagram footer-icon"></i>
            <i className="fa-brands fa-linkedin footer-icon"></i>
            </div>



        </footer> </> : null }

        </div>



        </>
    )
}

export default Sidebar