import React, {PureComponent, Fragment} from 'react';
import { Menu, Icon, Row, Col, Input  } from 'antd';
import SectionList from '../pageComponents/SectionList';
import Side from '../pageComponents/Side';
import './Layout.scss';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;

export default class Layout extends PureComponent {
    state = {
        current: 'diary',
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <div>
                <div className="header-wraper">
                    <Row className="yb-header">
                        <Col span={4}>
                            <h1>泡泡oO水流</h1>
                        </Col>
                        <Col span={14}>
                            <Menu
                                onClick={this.handleClick}
                                selectedKeys={[this.state.current]}
                                mode="horizontal"
                            >
                                <SubMenu title={<span>文章</span>}>
                                    <Menu.Item key="diary">日记</Menu.Item>
                                    <Menu.Item key="notes">笔记</Menu.Item>
                                    <Menu.Item key="share">技术分享</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="demo">
                                    <span>Demo</span>
                                </Menu.Item>
                                <Menu.Item key="exp">
                                    <span>正则</span>
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={6}>
                            <div className="search-container">
                                <Search
                                    placeholder="input search text"
                                    // enterButton="Search"
                                    size="large"
                                    onSearch={value => console.log(value)}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                    
                <Row className="yb-container">
                    <div className="yc-section">
                        <SectionList />
                    </div>
                    
                    <div className="yc-side">
                        <Side />
                    </div>
                </Row>
            </div>
        );
    }
}

