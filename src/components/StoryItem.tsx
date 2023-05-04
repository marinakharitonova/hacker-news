import React, {useEffect} from 'react';
import {useGetNewByIdQuery} from "../features/apiSlice";
import {Alert, List, Skeleton} from "antd";
import {MessageOutlined, StarOutlined} from '@ant-design/icons';
import IconText from "./IconText";

type NewsItemProps = {
    newId: number
}

/**
 * StoryItem render news list element.
 */
function StoryItem({newId}: NewsItemProps) {
    const {data, isLoading} = useGetNewByIdQuery(newId);

    if (isLoading) {
        return <List.Item><Skeleton active paragraph={true}/></List.Item>
    } else if (data) {
        return (
            <List.Item
                actions={[
                    <IconText icon={StarOutlined} text={data.score.toString()} key="list-vertical-star-o"/>,
                    <IconText icon={MessageOutlined} text={data.descendants.toString()} key="list-vertical-message"/>,
                ]}
            >
                <List.Item.Meta
                    title={<a href={''}>{data.title}</a>}
                    description={`by ${data.by} 
                    ${new Date(data.time * 1000).toLocaleDateString()} 
                    ${new Date(data.time * 1000).toLocaleTimeString(undefined, {hour: "2-digit", minute: "2-digit"})}`}
                />
            </List.Item>
        )
    } else {
        return (
            <List.Item>
                <Alert
                    message="Error"
                    description="Failed to load resource"
                    type="error"
                />
            </List.Item>
        )
    }
}

export default StoryItem;