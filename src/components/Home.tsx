import React from 'react';
import {useGetNewsIdsQuery} from "../features/apiSlice";
import StoryItem from "./StoryItem";
import {Button, List} from 'antd';
import ContentLoader from "./ContentLoader";

/**
 * Home component renders a list of news and a button to refresh the list data.
 */
function Home() {

    const {data, isLoading, isFetching, isError, isSuccess, refetch} = useGetNewsIdsQuery(undefined, {
        pollingInterval: 60000
    })

    const handleClick = () => {
        refetch()
    }

    return (
        <>
            <Button type="primary"
                    onClick={handleClick}
                    style={buttonStyle}
                    disabled={isFetching}
                    className={'button'}
            >Refresh news</Button>

            <ContentLoader isError={isError} isLoading={isLoading} isSuccess={isSuccess}>
                <>
                    {
                        data && <List
                            itemLayout="vertical"
                            size="large"
                            dataSource={data.slice(0, 100)}
                            renderItem={item => <StoryItem storyId={item} key={item}/>}
                            className="content"
                        />
                    }
                </>
            </ContentLoader>
        </>
    );
}

export default Home;

const buttonStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginBottom: '12px'
}