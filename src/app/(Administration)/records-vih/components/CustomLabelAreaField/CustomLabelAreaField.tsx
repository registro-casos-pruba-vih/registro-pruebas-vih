import { Box, Grid } from '@mui/material'
import React from 'react'

import stylesLabelField  from '../CustomLabelField/CustomLabelField.module.css'
import stylesLabelAreaField from './CustomLabelAreaField.module.css'

interface CustomLabelAreaFieldProps {
    title: string
    value?: string
}

const CustomLabelAreaField = ({title,value}:CustomLabelAreaFieldProps) => {
  return (
    <Grid item xs={12}>
        <span className={stylesLabelField['text-field']}>{title}</span>
        <Box
            className={stylesLabelAreaField['container-box']}
        >
            <p className={stylesLabelAreaField['text-value']}>{value}</p>
        </Box>
    </Grid>
  )
}

export default CustomLabelAreaField