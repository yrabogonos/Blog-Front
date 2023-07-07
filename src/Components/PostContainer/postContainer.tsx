import { FC, useState } from "react";
import './postContainer.scss';
import Post from "./Post/post";
import testimg from '../../assets/img/testimg1.webp';
import IPost from "../../types/types";
import testimg2 from '../../assets/img/testimg2.jpg';
import testimg3 from '../../assets/img/testimg3.webp';
import testimg4 from '../../assets/img/testimg4.jpg';
import testimg5 from '../../assets/img/testimg5.jpg';
import { useEffect } from "react";

const MAX = 2;

const PostContainer:FC = () =>{
    const test: IPost[] = [
        {title: 'New York Girl', viewsCount: 101, imageUrl:testimg},
        {title: 'My Blue eyes', viewsCount: 21, imageUrl:testimg2},
        {title: 'My walk', viewsCount: 211, imageUrl:testimg5},
        {title: 'Elephant', viewsCount: 1201, imageUrl:testimg3},
        {title: 'Parrot', viewsCount: 101, imageUrl:testimg4},

    ];
    const [page, Setpage] = useState<number | undefined>(Math.ceil(test.length / MAX));

    useEffect(()=>{ 
       
    }, [])

    return(
      <section className="posts pb-5">
        <div className="posts-container">
            {test.map(item => <Post title={item.title} viewsCount={item.viewsCount} imageUrl={item.imageUrl}/>)}
        </div>
      </section>
    );
};

export default PostContainer;