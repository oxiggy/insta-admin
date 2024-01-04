import { useState } from 'react';
import { ButtonBase, Checkbox, FormControlLabel, Grid, Stack } from '@mui/material';

const post = {
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  task: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  images: [
    { id: '1', src: 'https://images.pexels.com/photos/19421139/pexels-photo-19421139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: '2', src: 'https://images.pexels.com/photos/19421139/pexels-photo-19421139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ]
}

const Files = () => {
  const [select, setSelect] = useState(false);

  return (
    <Stack alignItems='flex-start' spacing={2}>
      <Grid container spacing={.5}>
        {post.images.map((image) => (
          <Grid  key={image.id} item xs={4}>
            <ButtonBase
              sx={{
                background: 'grey',
                position: 'relative',
                backgroundImage: `url(${image.src})`,
                backgroundSize: 'cover',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                aspectRatio: '1/1',
              }}
              onClick={() => setSelect(!select)}
            >
              <Checkbox sx={{ '& svg': { width: '50px', height: '50px' }}} />
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
      <ButtonBase>Сбросить</ButtonBase>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label='Название как плейсхолдер'
      />
    </Stack>
  )
}

export default Files