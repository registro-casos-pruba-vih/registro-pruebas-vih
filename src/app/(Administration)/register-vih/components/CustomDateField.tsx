import React from 'react'
import { Grid} from '@mui/material'
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface ICustoDateFieldProps {
    name: string
    label: string
    value: any
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
}

const CustomDateField = ({label,name}: ICustoDateFieldProps) => {
  return (
    <Grid item xs={2}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
            label={label}
            name={name}
            sx={{
              width: '100%'
            }}
        />
      </LocalizationProvider>
    </Grid>
  )
}

export default CustomDateField