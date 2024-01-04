import { Stack, Typography } from '@mui/material';

const messages = [
  { id: '1', sender: 'John', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id: '2', sender: 'Jane', text: 'Something' },
 /* { id: '3', sender: 'Jane', text: 'Something' },
  { id: '4', sender: 'Jane', text: 'Something' },
  { id: '5', sender: 'Jane', text: 'Something' },
  { id: '6', sender: 'Jane', text: 'Something' },*/
]

const Chat = () => {
  return (
    <>
      {/* msg send */}
      <Stack spacing={3}>
        {messages.map(message => (
          <Stack key={message.id}  spacing={2}>
            <Typography><b>{message.sender}</b><Typography variant='caption' sx={{ ml: .5, opacity: .4 }}>25 Dec</Typography></Typography>
            <Typography sx={{ opacity: .7}}>{message.text}</Typography>
          </Stack>
        ))}
      </Stack>
    </>
  )
}

export default Chat