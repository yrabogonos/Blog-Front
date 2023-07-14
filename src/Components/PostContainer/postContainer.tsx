import { ButtonHTMLAttributes, FC, useState } from "react";
import './postContainer.scss';
import Post from "./Post/post";
import testimg from '../../assets/img/testimg1.webp';
import IPost from "../../types/types";
import testimg2 from '../../assets/img/testimg2.jpg';
import testimg3 from '../../assets/img/testimg3.webp';
import testimg4 from '../../assets/img/testimg4.jpg';
import testimg5 from '../../assets/img/testimg5.jpg';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hook";
import { getPosts } from "../../store/PostSlice";
import { Dispatch } from "redux";
import { Type_Post } from "../../types/types";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { PayloadAction } from "@reduxjs/toolkit";
import { JsxChild } from "typescript";


const PostContainer:FC = () =>{
    const Appdispatch = useAppDispatch();
    const postList = useAppSelector(state => state.postReducers.postslice.posts);
    const postLen = useAppSelector(state => state.postReducers.postslice.len);
  

    const LoadPosts = ():any =>{   // тут не має бути any 
      return async (dispatch: Dispatch) =>{
        try{
          const response = await axios.get('http://localhost:4444/posts');
          dispatch(getPosts(response.data.posts));
   
        }
        catch(error){
          console.log('Error:', error);
        }
      }
    }

    // const test: IPost[] = [
    //     {title: 'New York Girl', viewsCount: 101, imageUrl:testimg},
    //     {title: 'My Blue eyes', viewsCount: 21, imageUrl:testimg2},
    //     {title: 'My walk', viewsCount: 211, imageUrl:testimg5},
    //     {title: 'Elephant', viewsCount: 1201, imageUrl:testimg3},
    //     {title: 'Parrot', viewsCount: 101, imageUrl:testimg4},

    // ];
    useEffect(()=>{ 
      Appdispatch(LoadPosts());
    }, [])


    const MaxPerPage:number = 2;
    const [curPage, SetPage] = useState(0);

    let links= [];
    
   

    for(let i = 0; i < Math.ceil(postLen/MaxPerPage); i++){
      if(postLen <= MaxPerPage){
        break;
      }
      let className = 'controls-button';
      if(i === curPage){
       className = 'controls-button-active';
      }
      let el: JSX.Element = <button className={className} onClick={()=>SetPage(i)}>{i+1}</button>;
      links.push(el);
    }
   
    return(
      <section className="posts pb-5">
        <div className="posts-container">
            {postList.slice(curPage*MaxPerPage, curPage*MaxPerPage+MaxPerPage)
            .map(item => <Post _id={item._id} title={item.title} viewsCount={item.viewsCount} imageUrl={item.imageUrl}/>)}
        </div>
        <div className="posts-controls mt-5 d-flex justify-content-center gap-4">
              {links}
        </div>
      </section>
    );
};

export default PostContainer;