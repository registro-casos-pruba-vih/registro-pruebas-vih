import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import TableHeadRecordVIH from './TableHeadRecordVIH'

const TableRecordsVIH = () => {
  return (
    <Paper sx={{ width: '100%'}}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeadRecordVIH/>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default TableRecordsVIH