import { Avatar, Box, Stack, Typography } from '@mui/material';

const user = {
  nickname: 'PixelPioneer',
  first_name: 'Jane',
  last_name: 'Doe',
  avatar: 'https://images.pexels.com/photos/19421139/pexels-photo-19421139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}

const UserInfo = ({ posts }) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: '16px', py: 3,  }}>
      <Avatar sx={{ width: 100, height: 100 }} src={user.avatar} />
      <Box sx={{  }}>
        <Typography
          sx={{ fontFamily: "'Satisfy', cursive", fontSize: '2rem' }}>{user.nickname}</Typography>
        <Stack direction="row" spacing={2}>
          <Typography><b>{posts.length}</b> публикации</Typography>
          <Typography><b>{Math.floor(posts.length / 2)}</b> драфты</Typography>
        </Stack>
      </Box>
    </Box>
  )
}

export default UserInfo