import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from './store';


type Post = {
    title: string,
    text: string,
    tags: string[],
    viewsCount: number,
    user: string,
    imageUrl: string,
};
type PostState = {
    posts: Post[],
}


const initialState: PostState = {
    posts: [],
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
        console.log('State:', state.posts);
        
    }
   }
    
});

export default PostSlice.reducer;
export const { getPosts } = PostSlice.actions;