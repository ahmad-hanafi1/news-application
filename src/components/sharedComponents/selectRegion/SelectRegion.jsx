import { useDispatch, useSelector } from "react-redux";
import "./selectRegion.css"
import { setCountryValue } from "../../../redux/actions/actions";
import { useState } from "react";

const SelectRegion = () => {
    
    const countryValue = useSelector(state => state.search.countryValue);
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    
    const closeSidebar = () => {
        if (window.innerWidth < 700) {
            document.getElementById('sidebar').style.width = '0';
            document.getElementById('sidebar').style.opacity = '0';
        }
    }

    const handleClick = () => {
        setOpen(!open)
        
    }
    return (
        <div className="select-region" onClick={(handleClick)}> 
                <button className={open? 'drop-down-button' + "  rotate-back" : 'drop-down-button'} >▼</button>
                 {open ? (
                    <ul className="menu">
                    <li className="menu-item">
                        <button onClick={() => { 
                                dispatch(setCountryValue('international'))
                                setOpen(!open) 
                                if (window.innerWidth < 700) {
                                    document.getElementById('sidebar').style.width = '0';
                                    document.getElementById('sidebar').style.opacity = '0';
                                }
                            }} >Int</button>
                        
                        </li>    
                    <li>
                        <button onClick={() => { 
                                dispatch(setCountryValue('us'))
                                setOpen(!open)
                                if (window.innerWidth < 700) {
                                    document.getElementById('sidebar').style.width = '0';
                                    document.getElementById('sidebar').style.opacity = '0';
                                }
                            }} >USA</button>
                    
                    </li>
                    <li className="menu-item">
                        <button onClick={() => { 
                             dispatch(setCountryValue('turkey'))
                             setOpen(!open)
                             if (window.innerWidth < 700) {
                                document.getElementById('sidebar').style.width = '0';
                                document.getElementById('sidebar').style.opacity = '0';
                            }
                        }}>Turkey</button>
                    </li>
                    <li className="menu-item">
                        <button onClick={() => { 
                             dispatch(setCountryValue('russia'))
                             setOpen(!open)
                             if (window.innerWidth < 700) {
                                document.getElementById('sidebar').style.width = '0';
                                document.getElementById('sidebar').style.opacity = '0';
                            }
                        }}>Russia</button>
                    </li>
                    <li className="menu-item">
                        <button onClick={() => { 
                             dispatch(setCountryValue('australia'))
                             setOpen(!open)
                             if (window.innerWidth < 700) {
                                document.getElementById('sidebar').style.width = '0';
                                document.getElementById('sidebar').style.opacity = '0';
                            }
                        }}>Australia</button>
                    </li>
                    </ul>
                ) : null 
                }
                <p className="selected-region">{countryValue === 'us' ? 'USA' : countryValue === 'turkey' ? "Turkey" : countryValue === 'russia' ? 'Russia' : countryValue === 'australia' ? 'Australia': 'Int'}</p> 
            </div>
    );
}

export default SelectRegion;
