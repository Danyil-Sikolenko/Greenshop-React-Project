import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { logout } from '../../../../../store/slice/authSlice';

import {  UserOutlined, ShoppingCartOutlined, LogoutOutlined } from '@ant-design/icons';
import {  Dropdown, Space, Button  } from 'antd';


const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(logout())
    }

  const items = [
  {
    label: 'My cart',
    key: 'cart',
    icon: <ShoppingCartOutlined />,
    onClick:() => navigate('/cart'),
  },
   {
    label: 'Switch account',
    key: 'login',
    icon: <UserOutlined />,
    onClick:() => navigate('/login'),
  },
  {
    label: 'Logout',
    key: 'logout',
    icon: <LogoutOutlined />,
    danger: true,
    onClick: handleLogout
  },
];
const menuProps = {
  items,
};
  return(
     <Space wrap style={{position:"relative", top: "-10px"}}>
    <Dropdown
  menu={{ items: items }}
  placement="bottomRight"
  overlayStyle={{ marginTop: '-6px' }}
>
  <Button icon={<UserOutlined />}>{user.name}</Button>
</Dropdown>
  </Space>
  )
};
export default Profile