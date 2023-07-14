import { FC } from "react";
import './searchBody.scss';
import { Type_Post } from "../../../types/types";
import { useAppSelector } from "../../../hook";
import { RootState } from "../../../store/store";
import { Link } from "react-router-dom";
import searchIcon from '../../../assets/icons/zoom.png';
import backIcon from '../../../assets/icons/back.png';


interface RefreshFunction{
    F:boolean,
    setF: (F:boolean) => void
}
const SearchBody:FC<Type_Post & RefreshFunction> = ({
    title,
    text,
    imageUrl,
    tags,
    createdAt,
    F,
    setF

}) =>{
    let date = new Date(createdAt);
    const DateFormat:Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric' 
    };
    const timestamp = date.toLocaleDateString('en-US', DateFormat);
    const recentPosts = useAppSelector(state=>state.postReducers.postslice.posts.slice(0,4))

    return(
        <section className="searchbody">
            <div className="searchbody-wrap">
                <Link className="link-home" to='/'><img src={backIcon} alt="backIcon" /></Link>
                <div className="row searchbody-row gap-5">
                    <div className="col-7 search-content d-flex flex-column">
                        <h1 className="spost-title">{title}</h1>
                        <p className="spost-created">{timestamp} | By author</p>
                        {/* <p className="spost-text">{text}</p> */}
                        <p className="spost-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad assumenda aspernatur harum quos vel doloremque eveniet beatae dolore odio officia sit voluptatum quod saepe, excepturi numquam suscipit ea, animi eligendi.</p>
                        <img className="spost-img" src={imageUrl} alt="post-image" />
                        <p className="spost-text">Tags:</p>
                        <div className="spost-tags">
                            {tags.length != 0
                            ?tags.map(tag => <p className="tag-item">{tag}</p>)
                            :<p className="no-tags">No tags added yet</p>
                            }
                            
                        </div>
                    </div>
                    <div className="col-4 spost-aside d-flex flex-column">
                            <div className="spost-search d-flex">
                                <input placeholder="Search" className="search-input" type="text" />
                                <button className="search-submit"><img src={searchIcon} alt="searchIcon" /></button>
                            </div>
                            <div className="spost-recent-posts">
                                <h2 className="mb-4 recent-title">Recent posts</h2>
                                {
                                
                                    recentPosts.length !=0
                                    ? recentPosts.map(post => <Link onClick={()=>setF(!F)} className="recent-post" to={`/search/${post._id}`}>{post.title}</Link>)
                                    : <p>No recent post</p>
                               
                                }
                            </div>
                            <div className="spost-recent-tags">
                                <h2 className="mb-4 mt-4 recent-title">Recent tags</h2>
                                {
                                
                                    recentPosts.length !=0
                                    ? recentPosts.map(post => {
                                        if(post.tags.length != 0){
                                            return <div className="tag-item">{post.tags[0]}</div>
                                        }
                                    })
                                    : <p>No recent tags</p>
                               
                                }
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchBody;