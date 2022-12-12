import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import SingleNews from '../sharedComponents/SingleNews/SingleNews'
import './SingleNewsPage.css'

export default  function SingleNewsPage() {

const { category, id } = useParams();
const news = useSelector(state => state.news.news.articles)
const latestNews = useSelector(state => state.latestNews.latestNews.articles)
let merged =[]
if(news && latestNews) {
merged = [...news, ...latestNews]
 console.log(merged)

}
//console.log(news);
//console.log(latestNews);

const random = Math.floor(Math.random() *100)

const singleNews = merged?.filter(article => article.id == id)[0]


const index = singleNews?.content.indexOf('+') + 1
const content = parseInt(singleNews?.content.slice(index, index+ 4))
const readingTime = Math.round(content / 225) 

 
  return (
    <div id='single-news-page'>
    <div className='main-content'>
        <div className='main-content-header'>
            <p className='head'>{ singleNews?.source?.name } | {singleNews?.author ? singleNews?.author :  "No Author"} | <span style={{color: category? 'red' : 'inherit',}}>{category ? category.charAt(0).toUpperCase() + category.slice(1): "No Category"}</span> | {readingTime} {readingTime ===1 ? 'minute' : 'minutes'}</p>
        </div>
        <h2 className='article-title'>{singleNews?.title}</h2>
        <img src={singleNews?.urlToImage} alt="article" className='article-image' />
        <p className='article-description'>{singleNews?.description}</p>

        <p className='continue-reading'>Continue reading at <a href={singleNews?.url}>{ singleNews?.source?.name } </a></p>
    </div>
    
    {window.innerWidth >= 768 ?<aside className='aside'>
        <h2 className='aside-title'>More</h2>
        <div className='aside-news'> 
        {news?.slice(random,random+2).filter(article => article.id != id).map((element) => {
                const id = "id" + Math.random().toString(16).slice(2)
                return <SingleNews id={element.id} key={id} imageUrl={element.urlToImage} title={element.title} source={element.source.name} publishedAt={element.publishedAt} author={element.author} description={element.description} url={element.url} content={element.content}/>
            })}

        </div>
    </aside> : null}


    </div>
  )
}
