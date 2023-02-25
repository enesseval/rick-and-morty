import React from "react";
import { Space, Alert } from "antd";

function Error({ message }) {
	return (
		<Space direction="vertical" style={{ width: "100%", alignItems: "center", marginTop: 25 }}>
			<Alert message="Error" description={message} type="error" showIcon />
		</Space>
	);
}

export default Error;
