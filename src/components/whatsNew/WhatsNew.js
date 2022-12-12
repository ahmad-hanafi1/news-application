import { useSelector } from "react-redux";
import SingleNews from "../sharedComponents/SingleNews/SingleNews";
import './WhatsNew.css'



const WhatsNew = () => {
    const latestNews = useSelector(state=> state.latestNews.latestNews.articles)
    const rand = Math.floor(Math.random() * 100)
    const displayable = window.innerWidth >= 700 ? latestNews?.slice(0, 5) : latestNews?.slice(rand, rand + 2)
    return (
        <div id='whats-new'>
            <div className="whats-new-header">
                <h4 className="whats-new-title">What's New?</h4>
                <h4 className="whats-new-latest-news-title">{window.innerWidth >= 700? 'Latest News' : null}</h4>
            </div>

            <div className="whats-new-news"> 
            
            {displayable?.map((element, index) => {
                const id = "id" + Math.random().toString(16).slice(2)
                return <SingleNews id={element.id} key={id} imageUrl={element.urlToImage} title={element.title} source={element.source.name} author={element.author} />
            })}

                
            </div> 
        </div>
    );
}


export default WhatsNew;