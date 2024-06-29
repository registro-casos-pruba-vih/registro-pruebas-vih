import { Button } from '@mui/material'
import React from 'react'

import styles from './CustomButton.module.css'

interface ICustomButtonProps {
    name: string
    type?: "submit" | "reset" | "button"
    onClick?: () => void
}

const CustomButton = ({name, type="button", onClick}: ICustomButtonProps) => {
  return (
    <Button
      variant='contained'
      className={styles['button-container']}
      type={type}
      size='large'
      onClick={onClick}
    >
        {name}
    </Button>
  )
}

export default CustomButton