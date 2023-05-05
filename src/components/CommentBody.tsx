import React from 'react';
import {formatDistanceToNow} from "date-fns";
import {List} from "antd";
import {DownOutlined} from "@ant-design/icons";
import {IComment} from "../types/IComment";

type CommentBodyProps = {
    comment: IComment
    handleClick: () => void
}

/**
 * CommentBody renders the text of the comment, the author's nickname, and the time the comment was added.
 */
function CommentBody({comment, handleClick}: CommentBodyProps) {
    const timeAgo = formatDistanceToNow(new Date(comment.time * 1000))
    const description = `by ${comment.by} ${timeAgo} ago`
    const listStyle: React.CSSProperties = {
        position: 'relative',
        cursor: comment.kids ? 'pointer' : 'default',
        paddingLeft: comment.kids ? '17px' : '0',
        marginLeft: comment.kids ? '-17px' : '0'
    }

    return (
        <List.Item onClick={handleClick} style={listStyle}>
            {comment.kids && comment.kids.length > 0 && <DownOutlined style={iconStyle}/>}

            <List.Item.Meta
                title={<div dangerouslySetInnerHTML={{__html: comment.text}} className={'commentText'}></div>}
                description={description}
            />
        </List.Item>
    )
}

export default CommentBody;

const iconStyle: React.CSSProperties = {
    position: 'absolute',
    left: '0',
    top: '3px'
}