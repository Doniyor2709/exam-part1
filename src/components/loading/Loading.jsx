
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
const antIcon = (
  <LoadingOutlined className='loading'
    style={{
      fontSize: 24,
    }}
    spin
  />
);
const Loading = () => <Spin indicator={antIcon} />;

export default Loading