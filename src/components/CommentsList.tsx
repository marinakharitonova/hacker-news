import React from 'react';
import Comment from "./Comment";
import {List} from "antd";

type CommentsListProps = {
    commentsIds: number[]
    style?: React.CSSProperties
}

/**
 * Comments renders a list of comments.
 */
function CommentsList({commentsIds, style}: CommentsListProps) {
    return (
        <List
            itemLayout="vertical"
            size="large"
            dataSource={commentsIds}
            renderItem={id => <Comment commentId={id} key={id}/>}
            className='commentsList'
            style={style}
        />
    );
}

export default CommentsList;