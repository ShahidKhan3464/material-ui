import React from 'react'
import { Box, FormControlLabel, Checkbox } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

const MuiCheckbox = () => {

    return (
        <Box>
            <Box>
                <FormControlLabel
                    label="I accept terms and conditions"
                    control={<Checkbox />}
                />

                <FormControlLabel
                    label="I accept terms and conditions"
                    control={<Checkbox checked />}
                />
            </Box>
            <Box>
                <Checkbox
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                />
            </Box>
        </Box>
    )
}

export default MuiCheckbox