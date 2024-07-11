import React from 'react'
import { Grid } from '@mui/material'
import styles from './CustomTextArea.module.css'

interface ICustomTextAreaProps {
  name: string
  label: string
  value: any
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
}

const CustomTextArea = ({name, label, value, onChange}:ICustomTextAreaProps) => {
  return (
    <Grid item xs={4}>
      <div className={styles['container-textarea']}>
        <span>{label}</span>
        <textarea 
          rows={10}
          name={name}
          onChange={onChange}
          value={value}
        />
      </div>
    </Grid>
      
  )
}

export default CustomTextArea