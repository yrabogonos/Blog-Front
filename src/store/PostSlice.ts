import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from './store';
// import LionImg from '';


type Post = {
    _id: string,
    title: string,
    text: string,
    tags: string[],
    viewsCount: number,
    user: string,
    imageUrl: string,
};
type PostState = {
    posts: Post[],
    len: number,
}


const initialState: PostState = {
    posts: [],
    len: 0,
    // headerLink = '../../'
    
}


const PostSlice = createSlice({
   name: 'posts',
   initialState,
   reducers:{
    // getPosts(state, action: PayloadAction<Post[]>){
    //     state.posts = action.payload;
    //     console.log('State:', state.posts)
    // }
    getPosts(state, action:PayloadAction<Post[]>){
        state.posts = action.payload;
        state.len = state.posts.length;
        console.log('1 id:', state.posts[2]._id);
        console.log('State:', state.posts);
        
    }
   }
    
});

export default PostSlice.reducer;
export const { getPosts } = PostSlice.actions;