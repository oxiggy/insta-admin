import { useState } from 'react';
import { Box, ButtonBase } from '@mui/material';
import { ReactComponent as DeleteIcon} from 'assets/icons/close.svg';
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';

const hasPost = true

const Preview = ({ post: { src, title, reference }, onClick, onDelete }) => {
  const [isShownDelete, setIsShownDelete] = useState(false);

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'action.hover',
        position: 'relative',
        aspectRatio: '1/1',
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //opacity: reference ? 0.5 : 1,
      }}
      onMouseEnter={() => setIsShownDelete(true)}
      onMouseLeave={() => setIsShownDelete(false)}
      onClick={onClick}
    >
      {isShownDelete &&
        <ButtonBase
          onClick={onDelete}
          sx={{
            position: 'absolute', top: 0, right: 0, padding: '4px',
            backgroundColor: 'background.default',
            borderRadius: '0 0 0 10px',
            '& svg': { width: 24, height: 24, color: 'action.active' }
        }}>
          <DeleteIcon />
        </ButtonBase>}
      {hasPost ? (
        <Box>
          {!src && <Box sx={{ fontSize: '2rem', fontWeight: 700, opacity: .3 }}>{title}</Box>}
        </Box>
      ) : (
        <ButtonBase
          sx={{
            width: '100%',
            aspectRatio: '1/1', p: 3,
            '& svg': {
              color: 'action.active',
            } }}
        >
          <AddIcon />
        </ButtonBase>
      )}
    </Box>
  )
}

export default Preview