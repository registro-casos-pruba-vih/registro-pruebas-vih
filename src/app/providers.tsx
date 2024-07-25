'use client'

import React from 'react'

import {Provider as PatientProvider} from '@/context/PatientContext'

const Providers = ({children}: { children: React.ReactNode}) => {
  return (
    <PatientProvider>
      {children}
    </PatientProvider>
  )
}

export default Providers