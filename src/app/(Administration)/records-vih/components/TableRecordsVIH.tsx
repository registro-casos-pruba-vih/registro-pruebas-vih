import React, {useContext, useRef, useEffect} from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { BeatLoader } from 'react-spinners'

import TableHeadRecordVIH from './TableHeadRecordVIH'

import { Context as PatientContext } from '@/context/PatientContext'
import TableBodyRecordVIH from './TableBodyRecordVIH'


const TableRecordsVIH = () => {

  const { state, getPatients } = useContext(PatientContext)
  const flag = useRef(false)

  useEffect(() => {
     if (!flag.current) {
          getPatients()
          flag.current = true
     }
  })

  return (
    <Paper sx={{ width: '100%'}}>
      <TableContainer sx={{ maxHeight: '100%' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeadRecordVIH/>

          {
            state.loading ? (
              <BeatLoader 
                color="#36D7B7" 
              />
            )
            : (
             <TableBodyRecordVIH patients={state.patients}/>
            )
          }
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default TableRecordsVIH