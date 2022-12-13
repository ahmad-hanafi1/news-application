

import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 
import { fetchLatestNews, fetchNews, removeAllNews, setAPIValue, setAPIValueSearch, setCategroyValue, setLatestNewsId, setNewsId } from './redux/actions/actions'


import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import MainLayout from './components/MainLayout';
import WhatsNew from './components/whatsNew/WhatsNew';
import OtherNews from './components/otherNews/OtherNews';
import SingleNewsPage from './components/singleNewsPage/SingleNewsPage';


function App() {
  const dispatch = useDispatch();

  
  const search = useSelector(state => state.search.searchValue)
  const API = useSelector(state => state.search.API)
  const category = useSelector(state => state.search.categoryValue)
  const country = useSelector(state => state.search.countryValue)


  // console.log(search, API, category)


  useEffect( () => {    
    async function fetchData() {
      const today = new Date();
      await dispatch(fetchLatestNews())
      await dispatch(fetchNews(`https://newsapi.org/v2/everything?q=interesting&from=${today.getFullYear()}-${today.getMonth() +1}-${today.getDate()}&sortBy=relevancy&apiKey=e1b9d1fd041645a1aeb497405363fe97`))
    }
    fetchData()
    
    return () => {
      dispatch(removeAllNews())
    }
} , [])



  useEffect( () => {
    
    if ( category && !country) {
      dispatch(setAPIValue(category, 'international'))
      dispatch(fetchNews(API))
    }else if (country && !category) {
      dispatch(setAPIValue('general', country ))
      dispatch(fetchNews(API))

    }else {
      dispatch(setAPIValue(category, country ))
      dispatch(fetchNews(API))
    }
    
    
    
  

    return () => {
      dispatch(removeAllNews())
      
    }
} , [category, country])

useEffect( () => {
  

  if (search) { if (search.length >= 4) {
    dispatch(setAPIValueSearch(search))
  }
  }
  
  dispatch(fetchNews(API))
  


  return () => {
    dispatch(removeAllNews())
    
  }
} , [search, API])

  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<MainLayout/>}> 
          <Route index  element={<>
          <WhatsNew />
          <OtherNews />
          </>}/>
            <Route path='/:category'  > 
              <Route index element={<>
              <WhatsNew />
              <OtherNews />
                </>} /> 
              <Route path=':id' element={<SingleNewsPage  />} />
            </Route> 

        </Route>
      </Routes>
    </BrowserRouter>

    
  );
}


export default App;
