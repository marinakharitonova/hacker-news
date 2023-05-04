import React from 'react';
import {useGetNewsIdsQuery} from "../features/apiSlice";
import StoryItem from "./StoryItem";
import {Alert, Button, List, Skeleton} from 'antd';

/**
 * Home component renders a list of news and a button to куакуыр the list data.
 */
function Home() {

    const {data, isLoading, isFetching, isError, refetch} = useGetNewsIdsQuery(undefined, {
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
            >Refresh list</Button>
            {isLoading && <Skeleton active/>}
            {
                data && <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={data.slice(0, 100)}
                    renderItem={item => <StoryItem newId={item} key={item}/>}
                    style={listStyle}
                />
            }
            {
                isError && <Alert
                    message="Error"
                    description="Failed to load resource"
                    type="error"
                />
            }
        </>
    );
}

export default Home;

const listStyle: React.CSSProperties = {
    background: '#fff',
    borderRadius: '10px'
}

const buttonStyle = {
    display: 'block',
    background: '#7dbcea',
    marginLeft: 'auto',
    marginBottom: '12px'
}