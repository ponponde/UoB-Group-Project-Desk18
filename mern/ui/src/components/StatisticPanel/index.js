import { Statistic, Card, Row, Col } from "antd";
import React from "react";

import { ArrowUpOutlined, ArrowDownOutlined, LikeOutlined } from "@ant-design/icons";
const StatisticPanel = (props) => {
    return (
        <div className="site-statistic-demo-card StatisticPanel">
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="NewConfirmed" value={(props.data && props.data.NewConfirmed) || 290051} />
                </Col>
                <Col span={12}>
                    <Statistic title="TotalConfirmed" value={(props.data && props.data.TotalConfirmed) || 119035188} />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Post" value={1393} />
                    {/* <Statistic title="Post" value={93} suffix="/ 100" /> */}
                </Col>
                <Col span={12}>
                    <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title="Start Baking"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: "#3f8600" }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title="Stop Jogging"
                            value={9.3}
                            precision={2}
                            valueStyle={{ color: "#cf1322" }}
                            prefix={<ArrowDownOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};
export default StatisticPanel;
