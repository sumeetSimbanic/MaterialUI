
import React from 'react'
import { Button, Stack } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Text</Button>
                <Button variant="outlined">Text</Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant='contained' color="primary">Sumit</Button>
                <Button variant='contained' color="secondary">Sumit</Button>
                <Button variant='contained' color="error">Sumit</Button>
                <Button variant='contained' color="warning">Sumit</Button>
                <Button variant='contained' color="info">Sumit</Button>
                <Button variant='contained' color="success">Sumit</Button>

            </Stack>
            <Stack display="block" spacing={2} direction="row">
                <Button variant='contained' size='small'>Sumit</Button>
                <Button variant='contained' size='medium'>Sumit</Button>
                <Button variant='contained' size='large'>Sumit</Button>

            </Stack>
            <Stack display="block" spacing={2} direction="row">
                <Button variant='contained' startIcon={<SendIcon />}>Sumit</Button>

            </Stack>
        </Stack>

    )
}

export default MuiButton
