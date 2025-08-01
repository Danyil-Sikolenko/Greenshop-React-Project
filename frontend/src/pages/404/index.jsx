import { Result, Button } from 'antd';
import { Link } from 'react-router';

const NotFound = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, page not found."
    extra={
      <Link to="/">
        <Button type="primary">To the main</Button>
      </Link>
    }
  />
);

export default NotFound;
