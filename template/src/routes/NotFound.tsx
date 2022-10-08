import { Button, Empty, Typography } from 'antd';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.less';

const { Paragraph, Title } = Typography;

const NotFound: React.FC = () => {
  const description = (
    <div>
      <Title level={4}>404</Title>
      <Paragraph>对不起，你访问的页面不存在。</Paragraph>
      <Link to="/">
        <Button type="primary">返回首页</Button>
      </Link>
    </div>
  );

  return (
    <div className={styles.page}>
      <Empty
        description={description}
      />
    </div>
  );
};

export default NotFound;
