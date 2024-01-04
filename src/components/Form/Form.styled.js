import { ButtonBase, styled } from '@mui/material';

export const Root = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'relative',
  background: theme.palette.background.paper,
  padding: '32px 24px',
}));

export const PinButton = styled(ButtonBase)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  padding: 8,
  '& svg': {
    width: 24,
    height: 24,
  }
}));