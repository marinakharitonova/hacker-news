import React from 'react';
import {Space, Typography} from "antd";
import CommentsList from "./CommentsList";

const {Title, Text} = Typography

type CommentsPops = {
    commentsIds: number[]
    addCommentToRefetch: (id: number, refetch: any) => void
}

/**
 * Comments renders a block of comments with a button to refresh the list of comments.
 */
function Comments({commentsIds, addCommentToRefetch}: CommentsPops) {


    return (
        <>
            <Space align={"center"} style={{display: 'flex', justifyContent: 'space-between', margin: '24px 0'}}>
                <Title level={2} style={{margin: 0}}>Comments</Title>
            </Space>

            {
                commentsIds && commentsIds.length > 0
                    ? <CommentsList commentsIds={commentsIds} addCommentToRefetch={addCommentToRefetch}/>
                    : <Text>no comments yet</Text>
            }

        </>

    );
}

export default Comments;