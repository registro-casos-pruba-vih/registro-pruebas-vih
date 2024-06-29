import React from 'react'
import { Grid } from '@mui/material'

import styles from './GroupForm.module.css'

interface IGroupFormProps {
    name: string
    children: React.ReactNode[] | React.ReactNode
}

const GroupForm = ({name, children}: IGroupFormProps) => {
  return (
    <div className={styles['group-form-container']}>
        <h2>{name}</h2>
        <div className={styles['underline']}/>
        <Grid container spacing={2}>
            {children}
        </Grid>
    </div>
  )
}

export default GroupForm