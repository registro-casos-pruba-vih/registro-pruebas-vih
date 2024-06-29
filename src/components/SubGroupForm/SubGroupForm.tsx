import { Grid } from '@mui/material'
import styles from './SubGroupForm.module.css'

interface ISubGroupFormProps {
  name: string
  children: React.ReactNode
}

const SubGroupForm = ({name, children}: ISubGroupFormProps) => {
  return (
    <div
      className={styles['container-subgroup-form']}
    >
      <h3>{name}</h3>
      <Grid
        container
        spacing={2}
      >
        {children}
      </Grid>

    </div>
  )
}

export default SubGroupForm