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
import { useAppDispatch, useAppSelector } from "../../hook";
import { getPosts } from "../../store/PostSlice";
import { Dispatch } from "redux";
import { Type_Post } from "../../types/types";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { PayloadAction } from "@reduxjs/toolkit";


const PostContainer:FC = () =>{
    const Appdispatch = useAppDispatch();
    const postList = useAppSelector(state => state.postReducers.postslice.posts);

    const LoadPosts = ():any =>{   // тут не має бути any 
      return async (dispatch: Dispatch) =>{
        try{
          const response = await axios.get('http://localhost:4444/posts');
          console.log('Res:', response.data);
          dispatch(getPosts(response.data.posts));
   
        }
        catch(error){
          console.log('Error:', error);
        }
      }
    }

    const test: IPost[] = [
        {title: 'New York Girl', viewsCount: 101, imageUrl:testimg},
        {title: 'My Blue eyes', viewsCount: 21, imageUrl:testimg2},
        {title: 'My walk', viewsCount: 211, imageUrl:testimg5},
        {title: 'Elephant', viewsCount: 1201, imageUrl:testimg3},
        {title: 'Parrot', viewsCount: 101, imageUrl:testimg4},

    ];
    useEffect(()=>{ 
      Appdispatch(LoadPosts());
    }, [])

    return(
      <section className="posts pb-5">
        <div className="posts-container">
            {postList.map(item => <Post title={item.title} viewsCount={item.viewsCount} imageUrl={item.imageUrl}/>)}
        </div>
      </section>
    );
};

export default PostContainer;