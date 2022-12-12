import React from 'react';
import SingleNews from '../sharedComponents/SingleNews/SingleNews';
import './otherNews.css'
import { useSelector } from 'react-redux';


const OtherNews = () => {
    const news = useSelector(state => state.news.news.articles)
    // console.log(news)
    return (
        <div id='other-news'>
            
            {news?.map((element, index) => {
                const id = "id" + Math.random().toString(16).slice(2)
                return <SingleNews id={element.id} key={id} imageUrl={element.urlToImage} title={element.title} source={element.source.name} publishedAt={element.publishedAt} author={element.author}  />

            })}

        </div>
    );
}

export default OtherNews;
