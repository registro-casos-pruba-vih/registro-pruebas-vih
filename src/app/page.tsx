'use client'

import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

import styles from "./page.module.css";



export default function Home() {

  const {push} = useRouter()
  
  const handleSubmit = () => {
    push('/records-vih');
  }

  return (
    <main className={styles.main}>
     <div className={styles['login-container']}>
        <h1>BIENVENIDA</h1>
        <div className={styles.form}>
          <TextField
            label="Correo Electronico"
            variant="outlined"
            fullWidth
          />
          <br/>
          <TextField
            label="Contraseña"
            variant="outlined"
            fullWidth
          />
          <br/>
          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
          >
            Iniciar Sesion
          </Button>
        </div>
      </div> 
    </main>
  );
}
