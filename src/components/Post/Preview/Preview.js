import { useState } from 'react';
import { Box, ButtonBase } from '@mui/material';
import { ReactComponent as DeleteIcon} from 'assets/icons/close.svg';

const Preview = ({ post: { src, title, reference }, onClick, onDelete }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <Box
      sx={{
        width: '100%',
        background: '#d7d7d7',
        position: 'relative',
        aspectRatio: '1/1',
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: reference ? 0.5 : 1,
      }}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={onClick}
    >
      {isShown &&
        <ButtonBase
          onClick={onDelete}
          sx={{
            position: 'absolute', top: 0, right: 0, padding: '4px',
            backgroundColor: 'white',
            borderRadius: '0 0 0 10px',
            '& > svg': { width: 24, height: 24, color: 'white' }
        }}>
          <DeleteIcon />
        </ButtonBase>}
      {!src && <Box sx={{ fontSize: '2rem', fontWeight: 700, opacity: .3 }}>{title}</Box>}
    </Box>
  )
}

export default Preview