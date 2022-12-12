import { useDispatch, useSelector } from "react-redux";
import "./selectRegion.css"
import { setCountryValue } from "../../../redux/actions/actions";
import { useState } from "react";

const SelectRegion = () => {
    
    const countryValue = useSelector(state => state.search.countryValue);
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();


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
                                dispatch(setCountryValue(''))
                                setOpen(!open)
                            }} >Int</button>
                        
                        </li>    
                    <li>
                        <button onClick={() => { 
                                dispatch(setCountryValue('us'))
                                setOpen(!open)
                            }} >USA</button>
                    
                    </li>
                    <li className="menu-item">
                        <button onClick={() => { 
                             dispatch(setCountryValue('turkey'))
                             setOpen(!open)
                        }}>Turkey</button>
                    </li>
                    <li className="menu-item">
                        <button onClick={() => { 
                             dispatch(setCountryValue('russia'))
                             setOpen(!open)
                        }}>Russia</button>
                    </li>
                    <li className="menu-item">
                        <button onClick={() => { 
                             dispatch(setCountryValue('australia'))
                             setOpen(!open)
                        }}>Australia</button>
                    </li>
                    </ul>
                ) : null 
                }
                <p className="selected-region">{countryValue === 'us' ? 'USA' : countryValue === 'tr' ? "Turkey" : countryValue === 'ru' ? 'Russia' : countryValue === 'au' ? 'Australia': 'Int'}</p> 
            </div>
    );
}

export default SelectRegion;
