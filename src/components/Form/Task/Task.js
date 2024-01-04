import { useState } from 'react';
import { Box, TextField } from '@mui/material';

const Task = ({ post }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.text);

  return (
    <Box sx={{ py: 2 }}>
      <TextField
        fullWidth
        variant='standard'
        InputProps={{ disableUnderline: true }}
        sx={{ '& input': {  fontSize: '1.25rem', fontWeight: 700 } }}
        placeholder='Название'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        fullWidth
        multiline
        variant='standard'
        InputProps={{ disableUnderline: true }}
        sx={{ '& textarea': {  fontSize: '.85rem' } }}
        placeholder='Творческое задание'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </Box>
  )
}

export default Task