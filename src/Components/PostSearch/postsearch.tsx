import {FC, useEffect, useState} from 'react';
import './postsearch.scss';
import { useParams } from 'react-router-dom';
import SearchHeader from './SearchHeader/searchHeader';
import Lion from '../../assets/img/headerBanner.jpg';
import axios from 'axios';
import { Type_Post } from '../../types/types';
import SearchBody from './SearchBody/searchBody';
const PostSearch:FC = () =>{
    const { postId } = useParams<{ postId: string }>();
    const [post, setPost] = useState<Type_Post>({
        _id: ' ',
        title: '',
        text: '',
        tags: [''],
        viewsCount: 0,
        imageUrl: '',
        user: '',
        createdAt: '',

    });
 
    const [F, setF] = useState(false);


    const getPostInfo = async() =>{
        try{
            const response = await axios.get(`http://localhost:4444/posts:${postId}`);
            console.log(response.data.doc);
            setPost(response.data.doc);
          }
          catch(error){
            console.log('Error:', error);
          }
    }
    
    useEffect(()=>{ 
        getPostInfo();
      }, [F]);

  


    return(
        <div className="postSearch">
            <SearchHeader imageUrl={post.imageUrl} />
            <SearchBody F={F} setF={setF} createdAt={post.createdAt} user={post.user} _id={post._id} title={post.title} text={post.text} tags={post.tags} viewsCount={post.viewsCount} imageUrl={post.imageUrl} />
          
        </div>
    );
}

export default PostSearch;