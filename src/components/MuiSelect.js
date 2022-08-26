import React, { useState } from 'react'
import { Box, TextField, MenuItem } from '@mui/material'

const MuiSelect = () => {
    const [country, setCountry] = useState('')

    return (
        <Box width='250px' >
            <TextField
                select
                fullWidth
                label='Select Country'
                value={country}
                onChange={e => setCountry(e.target.value)}
            >
                <MenuItem value='IN'>In</MenuItem>
                <MenuItem value='US'>Us</MenuItem>
                <MenuItem value='PAK'>Pak</MenuItem>
            </TextField>
        </Box>
    )
}

export default MuiSelect