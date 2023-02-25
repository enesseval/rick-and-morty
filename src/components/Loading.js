import React from "react";
import { Spin, Space } from "antd";

function Loading() {
	return (
		<Space direction="vertical" style={{ width: "100%" }}>
			<Spin style={{ marginTop: 50 }} size="large" tip="Loading">
				<div className="content"></div>
			</Spin>
		</Space>
	);
}

export default Loading;
