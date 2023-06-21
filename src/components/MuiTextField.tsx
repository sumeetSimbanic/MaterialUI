import React from 'react'
import { Stack, TextField, InputAdornment } from "@mui/material"

const MuiTextField = () => {
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' variant='outlined' />
                <TextField label='Name' variant='filled' />
                <TextField label='Name' variant='standard' />
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField label='Small secondary' size='small' color='secondary' />
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField label='Form input' required />
                <TextField
                    label='Password'
                    type="password"
                    helperText="Do not share your password with anyone"
                    disabled
                />
                <TextField label="Read only" InputProps={{ readOnly: true }} />
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField
                    label='Amount'
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
                <TextField
                    label='Weight'
                    InputProps={{
                        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                    }}
                />
            </Stack>
        </Stack >
    )
}

export default MuiTextField
