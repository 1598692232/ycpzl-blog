
import React, {PureComponent, Fragment} from 'react';
import QueueAnim from 'rc-queue-anim';
import {
    Button,
    Spin, 
    Icon
} from 'antd';
import './index.scss';

const list = () => {
    let sl = [];
    for(let i = 0; i < 40; i++) {
        sl.push({
            key: i,
            title: '在生活中你是否有开廉价车时被歧视的经历？',
            desc: '事情处理完毕 具体的就不细说了，挺好的， 人都是很渺小的， 尤其在庞大的国家机器之前。 过好自己，遵循本心！ 并没有一个人一辈子都是坏人！ 只是在路怒与暴躁的一瞬间， 他的内心是黑暗的！ 廉价车也好，豪车也罢！ 在现有…'
        });
    }

    return sl;
};

console.log(list());


export default class SectionList extends PureComponent {
    render() {
        return (
            <div className="yc-section-container">
                
                <QueueAnim className="demo-content"
                    animConfig={[
                        { opacity: [1, 0], translateY: [0, 50] },
                        { opacity: [1, 0], translateY: [0, -50] }
                    ]}>
                 
                    {list().map((item, k) => {
                        return (
                            <div className="yc-section-li" key={k}>
                                <h2>在生活中你是否有开廉价车时被歧视的经历？{k}</h2>
                                <p className="desc">
                                    事情处理完毕 具体的就不细说了，挺好的， 人都是很渺小的， 尤其在庞大的国家机器之前。 过好自己，遵循本心！ 并没有一个人一辈子都是坏人！ 只是在路怒与暴躁的一瞬间， 他的内心是黑暗的！ 廉价车也好，豪车也罢！ 在现有…
                                </p>
                            </div>
                        );
                    })}
                </QueueAnim>

                <div className="yc-list-loading">
                    <Icon type="loading" style={{ fontSize: 24 }} spin />
                </div> 
                
            </div>
        );
    }
}
