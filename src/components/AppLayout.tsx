import React from 'react';
import {Content, Footer, Header} from "antd/es/layout/layout";
import Home from "./Home";
import {GithubOutlined} from "@ant-design/icons";
import {Button, Layout, Typography} from "antd";

const {Text} = Typography;

function AppLayout() {
    return (
        <Layout>
            <Header style={headerStyle}>
                <Content style={contentStyle}>
                    <Text strong={true} style={{fontSize: '1.25em'}}>Hacker News</Text>
                </Content>
            </Header>
            <Content style={mainContentStyle}><Home/></Content>
            <Footer style={headerStyle}>
                <Content style={contentStyle}>
                    <Button type="link" href='https://github.com/marinakharitonova'
                            style={footerLinkStyle} icon={<GithubOutlined/>}>marinakharitonova</Button>
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
}

const mainContentStyle = {
    ...contentStyle,
    padding: '36px 0',
    minHeight: 'calc(100vh - 128px)'
}

const footerLinkStyle: React.CSSProperties = {
    color: '#fff',
    padding: 0,
    height: 'auto',
}