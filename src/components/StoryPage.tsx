import React, {useCallback, useRef} from 'react';
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

    const {data, isLoading, isSuccess, isError, refetch} = useGetNewByIdQuery(Number(storyId))

    const commentsIdsToRefetch = useRef({} as { [key: number]: () => void })

    const addCommentToRefetch = useCallback((commentId: number, fetcher: () => void) => {
        if (!(commentId in commentsIdsToRefetch.current)) {
            commentsIdsToRefetch.current[commentId] = fetcher
        }
    }, [])


    const handleClick = async () => {
        const result = await refetch().unwrap()
        if (!result.kids || result.kids.length === 0) return

        for (let id in commentsIdsToRefetch.current) {
            commentsIdsToRefetch.current[id]()
        }
    }

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

                        <Button type="primary"
                                onClick={handleClick}
                                className={'button'}
                                style={{display: 'block', marginLeft: 'auto'}}
                        >Refresh comments</Button>
                        <Comments commentsIds={data.kids} addCommentToRefetch={addCommentToRefetch}/>

                    </Space>}
                </>
            </ContentLoader>
        </Space>

    );
}

export default StoryPage;
