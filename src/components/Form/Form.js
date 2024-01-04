import { useState } from 'react';
import { Divider, Tab, Tabs, TextField } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
//
import { PinButton, Root } from './Form.styled';
import { ReactComponent as PinIcon} from 'assets/icons/pin.svg';
import { ReactComponent as PinOffIcon } from 'assets/icons/pin-off.svg';
//
import Chat from 'components/Form/Chat/Chat';
import Files from 'components/Form/Files/Files';
import Task from 'components/Form/Task/Task';
import Preview from 'components/Post/Preview/Preview';

const Form = ({ post, pin, togglePin }) => {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const [tab, setTab] = useState('task');
  const [text, setText] = useState(post.text);

  const handleTabChange = (_, newValue) => {
    setTab(newValue);
  };

  return (
    <Root>
      {!mobile && (<PinButton onClick={togglePin}>{pin ? <PinOffIcon /> : <PinIcon />}</PinButton>)}
      <Preview post={post} />
      <TextField
        multiline
        variant='standard'
        InputProps={{ disableUnderline: true }}
        placeholder='Текст публикации'
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ width: '100%', py: 1, '& textarea': {  fontSize: '.85rem' } }}
      />
      <Divider />
      <Tabs
        centered
        value={tab}
        onChange={handleTabChange}
        sx={{ '& .MuiTabs-indicator': { top: 0, bottom: 'unset' } }}
      >
        <Tab disableRipple label='Тз' value='task' />
        <Tab disableRipple label='Файлы' value='files' />
        <Tab disableRipple label='Чат' value='chat' />
      </Tabs>
      {tab === 'task' && (<Task post={post} />)}
      {tab === 'files' && (<Files />)}
      {tab === 'chat' && (<Chat />)}
    </Root>
  )
}

export default Form