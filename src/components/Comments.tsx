import React from 'react';
import {Button, Space, Typography} from "antd";
import CommentsList from "./CommentsList";

const {Title} = Typography

type CommentsPops = {
    commentsIds: number[]
    handleClick: () => void
    isButtonDisabled: boolean
}

/**
 * Comments renders a block of comments with a button to refresh the list of comments.
 */
function Comments({commentsIds, handleClick: onClick, isButtonDisabled}: CommentsPops) {

    if (!commentsIds || commentsIds.length === 0) {
        return null
    }


    const handleClick = () => {
        onClick()
    }

    return (
        <>
            <Space align={"center"} style={{display: 'flex', justifyContent: 'space-between', margin: '24px 0'}}>
                <Title level={2} style={{margin: 0}}>Comments</Title>
                <Button type="primary" onClick={handleClick} className={'button'} disabled={isButtonDisabled}>Refresh
                    comments</Button>
            </Space>

            <CommentsList commentsIds={commentsIds}/>
        </>

    );
}

export default Comments;