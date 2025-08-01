import { Button } from 'antd';

function CustomButton({
  type = "primary",
  onClick = () => {},
  children,
  style = {},
  className= {},
}) {
  return (
    <Button type={type} onClick={onClick} style={style} className={className}>
      {children}
    </Button>
  );
}

export default CustomButton;
