
import { NavLink } from 'react-router-dom';
import './singleNews.css'
import { useSelector } from 'react-redux';



const SingleNews = ({ id, imageUrl, title, source, author }) => {
    const category = useSelector(state => state.search.categoryValue)
    // console.log(content)
    // console.log(imageUrl)
    return (
        <NavLink className='single-news' to={{pathname: `/${category? category: 'news'}/${id}`}} >
        
            <img src={imageUrl} alt="news" className="picture"/>
            <div className="author-div">
                <p className='source'>{source ?( source.length <= 15 ? source : source.slice(0, 15)) : null}</p>
                <p className='source'>{author ?( author.length <= 15 ? author : author.slice(0, 15)) : null}</p>
            </div>

            <div className="description">{title?.length< 60 ? title : title?.slice(0,57) + '...' }</div>
        </NavLink>
        
    );
}


export default SingleNews;