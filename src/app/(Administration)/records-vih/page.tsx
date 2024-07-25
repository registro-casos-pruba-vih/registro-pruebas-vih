'use client'

import React from 'react'

import styles from './page.module.css'
import TableRecordsVIH from './components/TableRecordsVIH'
import CustomButton from '@/components/CustomButton/CustomButton'
import { useRouter } from 'next/navigation'

const Page = () => {

  const router = useRouter()

  return (
    <div 
      className={styles['main-container']}
    >
      <h1>Registros de pruebas VIH</h1>

      <div className={styles['button-container']}>
        <CustomButton 
          name='Agregar'
          onClick={() => router.push('/register-vih')}
        />
      </div>

      <TableRecordsVIH />
    </div>
  )
}

export default Page