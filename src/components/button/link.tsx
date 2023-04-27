import { Button, ButtonProps } from '@fjlaubscher/matter';
import { useNavigate } from 'react-router-dom';

type Props = {
  to: string;
} & ButtonProps;

const LinkButton = ({ children, to, ...rest }: Props) => {
  const navigate = useNavigate();

  return (
    <Button {...rest} onClick={() => navigate(to)}>
      {children}
    </Button>
  );
};

export default LinkButton;
