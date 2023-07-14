import { FC, useEffect, useState } from "react";
import './post.scss';
import test from '../../../assets/img/testimg1.webp';
import { title } from "process";
import IPostToShow from "../../../types/types";
import noimg from '../../../assets/img/noimg.jpg';
import { Link } from "react-router-dom";

const Post:FC<IPostToShow> = ({
    _id,
    title,
    viewsCount,
    imageUrl
}) =>{

return(
    <div className="post">
       <div className="post-container">
           <div className="front-side">
                <img className="post-img" src={imageUrl? imageUrl: noimg } alt="s" />
           </div>
           <div className="back-side">
             <Link className="inform-link inform-name" to= {`/search/${_id}`}>"{title}"</Link>
             <Link className="inform-link inform-views" to= {`/search/${_id}`}>Views: {viewsCount}</Link>
           </div>
       </div>
    </div>
   );

   
};

export default Post;