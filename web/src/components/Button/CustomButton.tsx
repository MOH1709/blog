import {
  Button,
  ButtonProps,
  SxProps,
  Theme,
} from '@mui/material';
import type { FC } from 'react';

interface CustomButtonProps extends ButtonProps {
  sx?: SxProps<Theme>;
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  sx,
  ...rest
}: CustomButtonProps) => {
  return (
    <Button
      {...rest}
      sx={Object.assign(
        { fontWeight: 700, fontSize: 20 },
        sx,
      )}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
