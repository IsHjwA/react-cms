import React from 'react';
import { Statistic, Row, Col } from 'antd';

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

export default class HjwHeader extends React.Component{
    render(){
        return(
            <div>
                <Row gutter={16}>
                    {/* <Col span={12}>
                    <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
                    </Col> */}
                    <Col span={12}>
                    <Countdown title="距离秒杀价还剩：" value={deadline} format="HH:mm:ss:SSS" />
                    </Col>
                    {/* <Col span={24} style={{ marginTop: 32 }}>
                    <Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
                    </Col> */}
                </Row>,
            </div>
        )
    }
}