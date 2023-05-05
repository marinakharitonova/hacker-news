import React from 'react';
import {Content, Footer, Header} from "antd/es/layout/layout";
import {GithubOutlined} from "@ant-design/icons";
import {Button, Layout, Typography} from "antd";
import {Outlet} from "react-router-dom";

const {Text} = Typography;
/**
 * AppLayout renders the application layout: header, footer and content block.
 */
function AppLayout() {
    return (
        <Layout>
            <Header style={headerStyle}>
                <Content style={contentStyle}>
                    <Text strong={true} style={{fontSize: '1.25em'}}>Hacker News</Text>
                </Content>
            </Header>
            <Content style={mainContentStyle}>
                <Outlet />
            </Content>
            <Footer style={headerStyle}>
                <Content style={contentStyle}>
                    <Button type="link" href='https://github.com/marinakharitonova'
                            style={footerLinkStyle} icon={<GithubOutlined/>} className={'buttonLink'}>marinakharitonova</Button>
                </Content>
            </Footer>
        </Layout>
    );
}

export default AppLayout

const headerStyle: React.CSSProperties = {
    color: '#fff',
    backgroundColor: '#7dbcea',
}

const contentStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    padding: '16px 12px'
}

const mainContentStyle = {
    ...contentStyle,
    margin: '36px auto',
    minHeight: 'calc(100vh - 128px)',
    background: '#fff',
    borderRadius: '10px',
}

const footerLinkStyle: React.CSSProperties = {
    color: '#fff',
}