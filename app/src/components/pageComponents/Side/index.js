
import React, {PureComponent, Fragment} from 'react';
import {Card} from 'antd';
import './index.scss';


export default class Side extends PureComponent {

    render() {
        return (
            <div className="yc-side-container">
               <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="最新"
                extra={<a href="#">更多</a>}
                >
                    <ul className="yc-side-list">
                        <li>
                            999999999999999999999999999999
                        </li>

                        <li>
                            99999
                        </li>

                        <li>
                            99999
                        </li>
                    </ul>
                </Card>

                <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="最热"
                extra={<a href="#">更多</a>}
                >
                    <ul className="yc-side-list">
                        <li>
                            999999999999999999999999999999
                        </li>

                        <li>
                            99999
                        </li>

                        <li>
                            99999
                        </li>
                    </ul>                </Card>
            </div>
        );
    }
}