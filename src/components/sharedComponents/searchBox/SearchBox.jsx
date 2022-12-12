import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../../redux/actions/actions';
import './SearchBox.css'


export default function SearchBox() {
    
    const searchValue = useSelector(state => state.search.searchValue);
    const dispatch = useDispatch()

    const expandSearch = () => {
        document.getElementById('search').classList.toggle('active-search')
        document.getElementById('search-div').classList.toggle('grow')
    }
  return (
    <div className="search-box" id='search-div'>
        <input type="text" class="search-input-new" id="search" placeholder="Search..."  value={searchValue} onChange={(e) => {dispatch(setSearchValue(e.target.value)); } }/>
        <div className="icon" onClick={expandSearch}><i class="fas fa-search"></i></div>
    </div>
  )
}
