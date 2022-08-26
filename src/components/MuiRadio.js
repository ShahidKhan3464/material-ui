import React, { useState } from 'react'
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material'

const MuiRadio = () => {
    const [value, setValue] = useState('')

    return (
        <Box>
            <FormControl>
                <FormLabel id='experience'>
                    Years of experience
                </FormLabel>
                <RadioGroup
                    name='experience'
                    aria-label='experience'
                    row
                    value={value}
                    onChange={e => setValue(e.target.value)}
                >
                    <FormControlLabel control={<Radio size='medium' color='success' />} label='0-2' value='0-2' />
                    <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
                    <FormControlLabel control={<Radio />} label='6-8' value='6-8' />
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default MuiRadio