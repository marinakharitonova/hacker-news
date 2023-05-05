import React, {useEffect, useState} from 'react';
import {useGetCommentByIdQuery} from "../features/apiSlice";
import CommentBody from "./CommentBody";
import ContentLoader from "./ContentLoader";
import CommentsList from "./CommentsList";

type CommentProps = {
    commentId: number
}

/**
 * Comment renders a comment body and its child comments.
 */
function Comment({commentId}: CommentProps) {

    const {data: comment, isLoading, isSuccess, isError, refetch} = useGetCommentByIdQuery(commentId)

    const [hasKids, setHasKids] = useState(false)

    const handleClick = () => {
        if (!comment?.kids) return
        setHasKids(true)
    }

    return (
        <ContentLoader isSuccess={isSuccess} isLoading={isLoading} isError={isError}>
            <>
                {comment && <>
                    <CommentBody comment={comment} key={commentId} handleClick={handleClick}/>
                    {hasKids &&
                        <CommentsList commentsIds={comment.kids} style={{marginLeft: '30px'}}/>}
                </>
                }
            </>
        </ContentLoader>
    );
}

export default Comment;