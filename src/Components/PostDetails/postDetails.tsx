import {FC} from 'react';
import './postDetails.scss';
import { useParams } from 'react-router-dom';

const PostDetails:FC = () =>{
    const { postId } = useParams<{ postId: string }>();
    return(
        <div className="postDetails">
            {postId}
        </div>
    );
}

export default PostDetails;