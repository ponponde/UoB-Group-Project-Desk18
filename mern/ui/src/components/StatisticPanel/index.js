import { Statistic, Card, Row, Col } from "antd";
import React, { useState } from "react";
import * as mockData from "../../utils/mockData";
import { ArrowUpOutlined, ArrowDownOutlined, LikeOutlined } from "@ant-design/icons";
const StatisticPanel = (props) => {
    const { data, posts, feedback } = props;
    const [statistic, setStatistic] = useState({});
    React.useEffect(() => {
        setStatistic(data);
    }, [data]);
    return (
        <div className="site-statistic-demo-card StatisticPanel">
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Confirmed" value={props.Confirmed || 29051} />
                </Col>
                <Col span={12}>
                    <Statistic title="Recovered" value={props.Recovered || 1190188} />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Post" value={posts} />
                    {/* <Statistic title="Post" value={93} suffix="/ 100" /> */}
                </Col>
                <Col span={12}>
                    <Statistic title="Feedback" value={feedback} prefix={<LikeOutlined />} />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title={statistic?.up?.title || "Start backing"}
                            value={statistic?.up?.rate || 9.3}
                            precision={1}
                            valueStyle={{ color: "#3f8600" }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title={statistic?.down?.title || "Stop Jogging"}
                            value={statistic?.down?.rate || 9.3}
                            precision={1}
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
