import React from 'react'
import { Container, Typography } from '@mui/material'

const MuiTypography = () => {

    return (
        <Container>
            <Typography
                variant="h1"
                component="h2"
                gutterBottom
            >
                Typography
            </Typography>
            <Typography
                variant="h2"
                gutterBottom
                color="textSecondary"
            >
                Typography
            </Typography>
            <Typography
                variant="h6"
                gutterBottom
                color="textSuccess"
            >
                Typography
            </Typography>
        </Container>
    )
}

export default MuiTypography