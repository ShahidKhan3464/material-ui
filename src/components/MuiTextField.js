import React, { useState } from 'react'
import { Stack, TextField } from '@mui/material'

const MuiTextField = () => {
    const [value, setValue] = useState('')

    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' variant='outlined' />
                <TextField label='Name' variant='filled' />
                <TextField label='Name' variant='standard' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Small secondary' size='small' color='secondary' />
                <TextField
                    label='Form Input'
                    required
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    error={!value}
                    helperText={
                        !value ? 'Required' : 'Do not blah'
                    }
                />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField
                    label='password'
                    type='password'
                    helperText='secure your password'
                />
            </Stack>
        </Stack>
    )
}

export default MuiTextField