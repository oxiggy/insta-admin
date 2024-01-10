import { useState } from 'react';
import { Box, ButtonBase, Container, Drawer, Grid, styled } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
//
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import Form from 'components/Form/Form';
import Preview from 'components/Post/Preview/Preview';
import UserInfo from 'components/User/UserInfo/UserInfo';

const someText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

const initialPosts = [
  { id: '1', title: 'Реф', description: someText, task: 'Реф', reference: true, src: 'https://images.pexels.com/photos/18794028/pexels-photo-18794028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '2', title: 'Новости', description: someText, task: 'Новости', reference: false, src: 'https://images.pexels.com/photos/19481069/pexels-photo-19481069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '3', title: 'Мотивация', description: '', task: 'Мотивация', reference: false, src: null },
  { id: '4', title: 'Статья', description: '', task: 'Статья', reference: false, src: 'https://images.pexels.com/photos/19396238/pexels-photo-19396238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '5', title: 'Опрос', description: '', task: 'Опрос', reference: false, src: null },
  { id: '6', title: 'Реф', description: '', task: 'Реф', reference: true, src: 'https://images.pexels.com/photos/19055796/pexels-photo-19055796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '7', title: 'Новости', description: '', task: 'Новости', reference: false, src: 'https://images.pexels.com/photos/14615605/pexels-photo-14615605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
]

const backdropSx = {
  background: 'transparent',
}

const Root = styled(Box)({
  display: 'flex',
  transition: 'all 0.2s ease-out',
})

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [pin, setPin] = useState(false);
  const [posts, setPosts] = useState(initialPosts);
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const addPost = () => {
    const newIndex = posts.length
    setPosts([...posts, { id: newIndex + 1 }, { id: newIndex + 2 }, { id: newIndex + 3 }])
  }

  return (
    <Root sx={{ paddingRight: pin ? '400px' : 'unset', overflow: 'auto', backgroundColor: 'background.default' }}>
      <Container maxWidth='md' sx={{ pb: 6}}>
        <UserInfo posts={posts} />
        <Grid container spacing={.5}>
          {posts.map(post => (
            <Grid item xs={4} key={post.id}>
              <Preview
                post={post}
                onClick={() => setOpen(true)}
                onDelete={() => setPosts(posts.filter(p => p.id !== post.id))}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <ButtonBase
              sx={{
                width: '100%',
                backgroundColor: 'action.hover',
                p: 3,
                '& svg': {
                  color: 'action.active',
                }
              }}
              onClick={addPost}
            >
              <AddIcon />
            </ButtonBase>
          </Grid>
        </Grid>
      </Container>
      {pin ? (
        <Box sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '400px' }}>
          <Form post={posts[1]} pin={pin} togglePin={() => setPin(!pin)} />
        </Box>
      ) : (
        <Drawer
          anchor='right'
          elevation={0}
          open={open}
          onClose={() => setOpen(false)}
          slotProps={{ backdrop: { sx: backdropSx } }}
          PaperProps={{ sx: { width: {xs: '100%', md: '400px'} } }}
        >
          {mobile && <ButtonBase onClick={() => setOpen(false)}>Закрыть</ButtonBase>}
          <Form post={posts[1]} pin={pin} togglePin={() => setPin(!pin)} />
        </Drawer>
      )}
    </Root>
  )
}

export default Dashboard