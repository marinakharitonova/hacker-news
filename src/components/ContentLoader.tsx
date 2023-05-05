import React from 'react';
import {Alert, Skeleton} from "antd";

type ContentLoaderProps = {
    children: JSX.Element
    isLoading: boolean
    isSuccess: boolean
    isError: boolean
    loader?: JSX.Element
}

/**
 * ContentLoader renders
 * the preloader while the content is being loaded,
 * the content on success,
 * an error on failure.
 */
function ContentLoader({children, isLoading, isSuccess, loader, isError}: ContentLoaderProps) {

    return (
        <Skeleton active loading={isLoading}>
            {isSuccess && children}
            {isError && <Alert
                message="Error"
                description="Failed to load resource"
                type="error"
            />}
        </Skeleton>
    )

}

export default ContentLoader;