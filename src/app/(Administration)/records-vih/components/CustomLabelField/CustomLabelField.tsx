import React from 'react'
import { Grid } from '@mui/material'

import styles from './CustomLabelField.module.css'

interface CustomLabelFieldProps {
    title: string
    value?: string
}

const CustomLabelField = ({title, value}:CustomLabelFieldProps) => {
  return (
    <Grid item xs={4}>
        <span className={styles['text-field']} style={{color: value !== '' ? '' : 'var(--error-color)'}}>{title}</span>
        <p className={styles['text-value']}>{value}</p>
    </Grid>
  )
}

export default CustomLabelField