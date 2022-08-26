import React from 'react'
import { Container, Button, Stack, IconButton, ToggleButtonGroup, ToggleButton } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {

    return (
        <Container>
            <Stack direction="row" spacing={2}>
                <Button
                    variant='text'
                    href="https://google.com"
                    onClick={() => console.log('you clicked')}
                >
                    Submit
                </Button>
                <Button
                    color="primary"
                    variant="contained"
                    startIcon={<SendIcon />}
                >
                    Send
                </Button>
                <Button
                    color="secondary"
                    variant="outlined"
                    endIcon={<KeyboardArrowRightIcon />}
                >
                    Submit
                </Button>
                <IconButton aria-label='send' color="success" size="small">
                    <SendIcon />
                </IconButton>

                <Stack direction='row'>
                    <ToggleButtonGroup
                        aria-label='text formatting'
                        size='small'
                        color='success'
                    >
                        <ToggleButton value='bold' aria-label='bold'> <FormatBoldIcon /> </ToggleButton>
                        <ToggleButton value='italic' aria-label='italic'> <FormatItalicIcon /> </ToggleButton>
                        <ToggleButton value='underline' aria-label='underline'> <FormatUnderlinedIcon /> </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Stack>
        </Container>
    )
}

export default MuiButton