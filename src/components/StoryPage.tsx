import React from 'react';
import {Button, Space, Typography} from "antd";
import {useGetNewByIdQuery} from "../features/apiSlice";
import {ArrowLeftOutlined, LinkOutlined, MessageOutlined} from "@ant-design/icons";
import IconText from "./IconText";
import {Link, useParams} from "react-router-dom";
import classNames from "classnames";
import Comments from "./Comments";
import ContentLoader from "./ContentLoader";

const {Title, Text} = Typography;

/**
 * StoryPage renders story info, story comments list and a back button.
 */
function StoryPage() {
    let {storyId} = useParams();

    const {data, isLoading, isSuccess, isFetching, isError, refetch } = useGetNewByIdQuery(Number(storyId))

    return (
        <Space direction={"vertical"} style={{display: 'flex', padding: '24px'}}>
            <Link to={`/`} className='link' style={{display: 'inline-block', fontSize: '1.25em', marginBottom: '16px'}}>
                <Space>
                    <ArrowLeftOutlined/>
                    {'Back'}
                </Space>
            </Link>

            <ContentLoader isError={isError} isSuccess={isSuccess} isLoading={isLoading}>
                <>
                    {data && <Space direction={"vertical"} style={{display: 'flex'}}>
                        <Title>{data.title}</Title>

                        <Text>{`by ${data.by} 
                            ${new Date(data.time * 1000).toLocaleDateString()}`}
                        </Text>
                        <Button type="link" href={data.url}
                                icon={<LinkOutlined/>}
                                className={classNames('link', 'buttonLink')}
                        >read more</Button>
                        <IconText icon={MessageOutlined} text={data.descendants.toString()}/>
                        <Comments commentsIds={data.kids} handleClick={() => refetch()} isButtonDisabled={isFetching}/>

                    </Space>}
                </>
            </ContentLoader>
        </Space>

    );
}

export default StoryPage;
