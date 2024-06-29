import { Grid, TextField } from '@mui/material'
import React from 'react'

interface ICustomTextFieldProps {
    name: string
    label: string
    value: any
    type?: string
    error ?: string
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
}

const CustomTextField = ({name, label, value, error, type='text', onChange}:ICustomTextFieldProps) => {
  return (
    <Grid item xs={4}>
        <TextField
            name={name}
            label={label}
            fullWidth
            onChange={onChange}
            value={value}
            error = {error ? true : false}
            helperText = {error}
            type={type}
        />
    </Grid>
  )
}

export default CustomTextField