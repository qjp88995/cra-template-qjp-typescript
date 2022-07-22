import { Button, Typography } from "antd";

const { Title } = Typography;

const Home = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
      }}>
      <Title level={3}>欢迎使用cra-template-qjp-typescript</Title>
      <Button type="primary">这是一个antd按钮</Button>
    </div>
  );
};

export default Home;
