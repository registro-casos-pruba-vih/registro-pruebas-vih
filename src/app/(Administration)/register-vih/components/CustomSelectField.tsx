import { Grid, MenuItem, TextField } from '@mui/material'
import React from 'react'

interface ICustomSelectFieldProps {
    name: string
    label: string
    value: any
    data: {
        label: string
        value: any
    }[]
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
    error ?: string
}

const CustomSelectField = ({name, label, data, value, error,onChange}: ICustomSelectFieldProps) => {
  return (
    <Grid item xs={4}>
        <TextField
            select
            name={name}
            label={label}
            variant="outlined"
            value={value}
            onChange={onChange}
            fullWidth
            error = {error ? true : false}
            helperText = {error}
        >
            {
                data.map((item) => (
                    <MenuItem
                        key={item.value}
                        value={item.value}
                    >
                        {item.label}
                    </MenuItem>
                ))
            }
        </TextField>
    </Grid>
        
  )
}

export default CustomSelectField