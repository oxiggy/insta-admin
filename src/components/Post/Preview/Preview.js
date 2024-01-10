import { useState } from 'react';
import { Box, ButtonBase, Typography } from '@mui/material';
import { ReactComponent as DeleteIcon} from 'assets/icons/close.svg';
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';

const Preview = ({ post, onClick, onDelete }) => {
  const { src, title, reference } = post
  const [isShownDelete, setIsShownDelete] = useState(false);
  const hasPost = !!title || !!src

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'action.hover',
        position: 'relative',
        aspectRatio: '1/1',
      }}
      onMouseEnter={() => setIsShownDelete(true)}
      onMouseLeave={() => setIsShownDelete(false)}
    >
      {hasPost ? (
        <>
          {!!src ? (
           <Box
             sx={{
               width: '100%',
               height: '100%',
               backgroundImage: `url(${src})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               opacity: reference ? 0.5 : 1,
             }}
             onClick={onClick}
           />
            ) : (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                fontSize: '2rem',
                fontWeight: 700,
                opacity: .3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                userSelect: 'none',
                padding: '12px',
            }}
              onClick={onClick}
            >
              <Typography
                noWrap
                sx={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: { xs: '1rem', md: '2rem'},
                  fontWeight: 700,
                  display: 'block',
                }}
              >
                {title}
              </Typography>
            </Box>
            )}
        </>
      ) : (
        <ButtonBase
          sx={{
            width: '100%',
            aspectRatio: '1/1',
            p: 3,
            '& svg': {
              color: 'action.active',
            } }}
        >
          <AddIcon />
        </ButtonBase>
      )}

      {isShownDelete &&
        <ButtonBase
          onClick={() => onDelete(post)}
          sx={{
            position: 'absolute', top: 0, right: 0, padding: '4px',
            backgroundColor: 'background.default',
            borderRadius: '0 0 0 10px',
            '& svg': { width: 24, height: 24, color: 'action.active' }
          }}>
          <DeleteIcon />
        </ButtonBase>}
    </Box>
  )
}

export default Preview