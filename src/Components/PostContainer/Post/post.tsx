import { FC, useEffect, useState } from "react";
import './post.scss';
import test from '../../../assets/img/testimg1.webp';
import { title } from "process";
import IPost from "../../../types/types";

const Post:FC<IPost> = ({
    title,
    viewsCount,
    imageUrl
}) =>{

    const [hover, setHover] = useState<boolean>(false); 

   if(!hover){
    return(
        <div className="post" onMouseEnter={()=>setHover(true)}
                              onMouseOut={()=>setHover(false)}>
           <div className="post-container">
               <img className="post-img" src={imageUrl} alt="s" />
           </div>
        </div>
       );
   }
   else{
    return(
        <div className="post" onMouseOver={()=>setHover(true)}
                              onMouseOut={()=>setHover(false)}>
           <div className="post-container background-gray">
                <img className="post-img d" src={imageUrl} alt="s" />
                <div className="post-information d-flex flex-column align-items-center">
                    <a href="#" className="inform-link inform-name">"{title}"</a>
                    <a href="#" className="inform-link inform-views">Views: {viewsCount}</a>
                   
                </div>
           </div>
        </div>
    );
   }

   
};

export default Post;