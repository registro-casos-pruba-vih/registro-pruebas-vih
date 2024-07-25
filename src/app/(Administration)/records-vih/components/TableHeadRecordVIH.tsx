import React from 'react'
import {TableCell, TableHead, TableRow } from '@mui/material'


import styles from '../page.module.css'

const TableHeadRecordVIH = () => {

  return (
    <TableHead className={styles['table-container']}>
        <TableRow>
            <TableCell 
                align="center"
                colSpan={1}
                sx={{
                backgroundColor: '#deeaf7'
                }}
            >
                Unidad Médica
            </TableCell>
            <TableCell 
                align="center"
                colSpan={1}
                sx={{
                backgroundColor: '#deeaf7'
                }}  
            >
                Médico Tratante
            </TableCell>
            <TableCell 
                align="center"
                colSpan={17}
                sx={{
                backgroundColor: '#e2efda'
                }}
            >
                Ficha de Identificación
            </TableCell>
            <TableCell 
                align="center" 
                colSpan={7}
                sx={{
                backgroundColor: '#fff2cc'
                }}
            >
                Antecedentes Gineco-Obstétricos
            </TableCell>
            <TableCell align="center" colSpan={2}>
                Embarazo actual
            </TableCell>
            <TableCell 
                align="center" 
                colSpan={8}
                sx={{
                backgroundColor: '#dbdbdb'
                }}  
            >
                Acciones a Realizar en el Control Prenatal
            </TableCell>
            <TableCell 
                align="center" 
                colSpan={18}
                sx={{
                backgroundColor: '#ddebf7'
                }}  
            >
                Detecciones Realizadas
            </TableCell>
            <TableCell 
                align="center" 
                colSpan={4}
                sx={{
                backgroundColor: '#fff2cc'
                }}  
            >
                Vacunacion del COVID
            </TableCell>
            </TableRow>
            <TableRow>
            <TableCell 
                align='center'
                colSpan={1}
                sx={{
                backgroundColor: '#fff2cc'
                }}
            >
                Nombre
            </TableCell>
            <TableCell 
                align='center'
                colSpan={1}
                sx={{
                backgroundColor: '#fff2cc'
                }}
            >
                Nombre
            </TableCell>
            <TableCell 
                align='center'
                colSpan={3}
                sx={{
                backgroundColor: '#e2efda'
                }}
            >
                Nombre Completo
            </TableCell>
            <TableCell 
                align='center'
                colSpan={6}
                sx={{
                backgroundColor: '#e2efda'
                }}
            >
                Domicilio
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#e2efda'
                }}  
            >
                CURP
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#e2efda'
                }}  
            >
                Edad
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#e2efda'
                }}  
            >
                Número telefónico
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#e2efda'
                }}  
            >
                Número télefônico de Familiar
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#e2efda'
                }}  
            >
                Hablante de lengua indígena
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#e2efda'
                }}
            >
                Grado escolar concluido
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#e2efda'
                }}  
            >
                Seguridad Social
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#e2efda'
                }}
            >
                Numero de expediente
            </TableCell>
            <TableCell 
                align='center'
                colSpan={1}
                sx={{
                backgroundColor: '#fff2cc'
                }}  
            >
                Fecha de la última regla
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#fff2cc'
                }}  
            >
                Fecha probable de parto
            </TableCell>
            <TableCell 
                align='center'
                colSpan={1}
                sx={{
                backgroundColor: '#fff2cc'
                }}  
            >
                Numero de partos
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#fff2cc'
                }}  
            >
                Numero de cesareas
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#fff2cc'
                }}  
            >
                Numero de abortos
            </TableCell>
            <TableCell 
                align='center'
                colSpan={1}
                sx={{
                backgroundColor: '#fff2cc'
                }}  
            >
                Numero de gestas
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#fff2cc'
                }}  
            >
                Tipo de resolución
            </TableCell>
            <TableCell align='center' colSpan={1}>
                Diagnóstico Actualizado
            </TableCell>
            <TableCell align='center' colSpan={1}>
                Otro(s) diagnostico(s) actuales
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#dbdbdb'
                }}
            >
                Número de consultas prenatales
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#dbdbdb'
                }}  
            >
                Registro de cifra tensional
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#dbdbdb'
                }}  
            >
                Riegos obstétrico
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#dbdbdb'
                }}  
            >
                Se otorgó acido folico
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#dbdbdb'
                }}  
            >
                Se otorgó sulfato ferroso
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={3}
                sx={{
                backgroundColor: '#dbdbdb'
                }}  
            >
                Inmunizaciones
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={5}
                sx={{
                backgroundColor: '#ddebf7'
                }}    
            >
                VIH
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#ddebf7'
                }}    
            >
                Sífilis
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#ddebf7'
                }}    
            >
                Uroanálisis
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#ddebf7'
                }}    
            >
                Gluosa
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#ddebf7'
                }}    
            >
                Tipo sanguíneo
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#ddebf7'
                }}    
            >
                Cuestionario de detección de violencia
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#ddebf7'
                }}    
            >
                Comorbilidad asociada
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={1}
                sx={{
                backgroundColor: '#ddebf7'
                }}    
            >
                Signos de alarma
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={3}
                sx={{
                backgroundColor: '#ddebf7'
                }}    
            >
                Referencias
            </TableCell>
            <TableCell 
                align='center' 
                colSpan={3}
                sx={{
                backgroundColor: '#ddebf7'
                }}    
            >
                Desarrollo comunitario
            </TableCell>
            <TableCell
                align='center'
                colSpan={1}
                sx={{
                backgroundColor: '#fff2cc'
                }}
            >
                ¿Vacuno?
            </TableCell>
            <TableCell 
                align='center'
                colSpan={1}
                sx={{
                backgroundColor: '#fff2cc'
                }}  
            >
                Nombre de la vacuna
            </TableCell>
            <TableCell 
                align='center'
                colSpan={1}
                sx={{
                backgroundColor: '#fff2cc'
                }}  
            >
                Presento efectos
            </TableCell>
            <TableCell 
                align='center'
                colSpan={1}
                sx={{
                backgroundColor: '#fff2cc'
                }}  
            >
                Cuales
            </TableCell>
            </TableRow>
            <TableRow>
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#fff2cc'
                }}
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#fff2cc'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#e2efda'
                }}
            >
                Apellido paterno
            </TableCell>
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#e2efda'
                }}  
            >
                Apellido materno
            </TableCell>
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#e2efda'
                }}  
            >
                Nombre(s)
            </TableCell>
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#e2efda'
                }}  
            >
                Calle
            </TableCell>
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#e2efda'
                }}  
            >
                No. exterior
            </TableCell>
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#e2efda'
                }}  
            >
                No. interior
            </TableCell>
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#e2efda'
                }}  
            >
                Colonia
            </TableCell>
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#e2efda'
                }}
            >
                Localidad
            </TableCell>
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#e2efda'
                }}  
            >
                Municipio
            </TableCell>
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#e2efda'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#e2efda'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#e2efda'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#e2efda'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#e2efda'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#e2efda'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#e2efda'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#e2efda'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#fff2cc'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#fff2cc'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#fff2cc'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#fff2cc'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#fff2cc'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#fff2cc'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#fff2cc'
                }}  
            />
            <TableCell align='center'/>
            <TableCell align='center'/>
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#dbdbdb'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#dbdbdb'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#dbdbdb'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#dbdbdb'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#dbdbdb'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#dbdbdb'
                }}  
            >
                Vacuna tetano
            </TableCell>
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#dbdbdb'
                }}  
            >
                Vacuna difteria
            </TableCell>
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#dbdbdb'
                }}  
            >
                Vacuna influenza
            </TableCell>
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#ddebf7'
                }}    
            >
                Reactiva
            </TableCell>
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#ddebf7'
                }}    
            >
                Reactiva confirmada a VIH
            </TableCell>
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#ddebf7'
                }}    
            >
                Mujer embarazada confirmada a VIH
            </TableCell>
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#ddebf7'
                }}    
            >
                Cual
            </TableCell>
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#ddebf7'
                }}    
            >
                Mujer embarazada que vive con VIH
            </TableCell>
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#ddebf7'
                }}    
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#ddebf7'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#ddebf7'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#ddebf7'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#ddebf7'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#ddebf7'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#ddebf7'
                }}  
            />
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#ddebf7'
                }}  
            >
                Respuesta
            </TableCell>
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#ddebf7'
                }}   
            >
                Numero 
            </TableCell>
            <TableCell 
                align='center'
                sx={{
                backgroundColor: '#ddebf7'
                }}  
            >
                Unidad de referencia
            </TableCell>
            <TableCell
                align='center'
                sx={{
                backgroundColor: '#ddebf7'
                }}
            >
                Cuenta con plan de seguridad
            </TableCell>
            <TableCell
                align='center'
                sx={{
                backgroundColor: '#ddebf7'
                }}
            >
                Metodo planificacion familiar
            </TableCell>
            <TableCell
                align='center'
                sx={{
                backgroundColor: '#ddebf7'
                }}
            >
                Registro metodo
            </TableCell>
            <TableCell 
                align='center' 
                sx={{
                backgroundColor: '#fff2cc'
                }}
            />
            <TableCell 
                align='center' 
                sx={{
                backgroundColor: '#fff2cc'
                }}
            />
            <TableCell
                align='center'
                sx={{
                backgroundColor: '#fff2cc'
                }}
            />
            <TableCell
                align='center'
                sx={{
                backgroundColor: '#fff2cc'
                }}
            />
        </TableRow>
    </TableHead>
  )
}

export default TableHeadRecordVIH