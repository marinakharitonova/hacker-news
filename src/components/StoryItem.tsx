import React from 'react';
import {useGetNewByIdQuery} from "../features/apiSlice";
import {List} from "antd";
import {MessageOutlined, StarOutlined} from '@ant-design/icons';
import IconText from "./IconText";
import {Link} from "react-router-dom";
import ContentLoader from "./ContentLoader";

type NewsItemProps = {
    storyId: number
}

/**
 * StoryItem renders news list element.
 */
function StoryItem({storyId}: NewsItemProps) {
    const {data, isLoading, isSuccess, isError} = useGetNewByIdQuery(storyId);

    let content = null
    if (data && data.dead) {
        content = <p>This strory is dead!</p>
    } else if (data && !data.dead) {
        content = <List.Item
            actions={[
                <IconText icon={StarOutlined} text={data.score.toString()} key="list-vertical-star-o"/>,
                <IconText icon={MessageOutlined} text={data.descendants.toString()}
                          key="list-vertical-message"/>,
            ]}
        >
            <List.Item.Meta
                title={<Link to={`/${storyId}`} className='link'>{data.title}</Link>}
                description={`by ${data.by} 
                            ${new Date(data.time * 1000).toLocaleDateString()} 
                            ${new Date(data.time * 1000).toLocaleTimeString(undefined, {
                    hour: "2-digit",
                    minute: "2-digit"
                })}`}
            />
        </List.Item>
    }

    return (
        <ContentLoader isError={isError} isSuccess={isSuccess} isLoading={isLoading}>
            <>{content}</>
        </ContentLoader>
    )
}

export default StoryItem;