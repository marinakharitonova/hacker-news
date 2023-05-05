import React from 'react';
import Comment from "./Comment";
import {List} from "antd";

type CommentsListProps = {
    commentsIds: number[]
    style?: React.CSSProperties
    addCommentToRefetch: (id: number, refetch: any) => void
}

/**
 * Comments renders a list of comments.
 */
function CommentsList({commentsIds, style, addCommentToRefetch}: CommentsListProps) {
    return (
        <List
            itemLayout="vertical"
            size="large"
            dataSource={commentsIds}
            renderItem={id => <Comment commentId={id} key={id} addCommentToRefetch={addCommentToRefetch}/>}
            className='commentsList'
            style={style}
        />
    );
}

export default CommentsList;