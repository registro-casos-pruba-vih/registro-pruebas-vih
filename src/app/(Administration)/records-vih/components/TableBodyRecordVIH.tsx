import { PatientInterface } from '@/interfaces/patient.interface'
import { TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'

const TableBodyRecordVIH = ({patients}:{patients: PatientInterface[]}) => {
  return (
    <TableBody>
        {
        patients.map((patient) => (
            <TableRow
                key={patient._id}
                hover
            >
                <TableCell
                    align="center"
                    colSpan={1}
                >
                    {patient.unidad_medica.nombre}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                >
                    {patient.medico_tratante.nombre}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                >
                    {patient.ficha_identificacion.nombre_completo.primer_apellido}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                >
                    {patient.ficha_identificacion.nombre_completo.segundo_apellido}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                >
                    {patient.ficha_identificacion.nombre_completo.nombres}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.ficha_identificacion.domicilio.calle === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.ficha_identificacion.domicilio.calle}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.ficha_identificacion.domicilio.numero_exterior === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.ficha_identificacion.domicilio.numero_exterior}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.ficha_identificacion.domicilio.numero_interior === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.ficha_identificacion.domicilio.numero_interior}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.ficha_identificacion.domicilio.colonia === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.ficha_identificacion.domicilio.colonia}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.ficha_identificacion.domicilio.municipio === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.ficha_identificacion.domicilio.municipio}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.ficha_identificacion.domicilio.localidad === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.ficha_identificacion.domicilio.localidad}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.ficha_identificacion.curp === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.ficha_identificacion.curp}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.ficha_identificacion.edad === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.ficha_identificacion.edad}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.ficha_identificacion.numero_telefonico === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.ficha_identificacion.numero_telefonico}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.ficha_identificacion.numero_familiar === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.ficha_identificacion.numero_familiar}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                >
                    {patient.ficha_identificacion.habla_lengua_indigena === 'true' ? 'Si' : 'No'}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                >
                    {patient.ficha_identificacion.grado_escolar_concluido}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                >
                    {patient.ficha_identificacion.seguridad_social}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                >
                    {patient.ficha_identificacion.numero_expediente}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                >
                    {patient.antecedentes_gineco_obstetricos.fecha_ultima_regla}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                >
                    {patient.antecedentes_gineco_obstetricos.fecha_probable_parto}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.antecedentes_gineco_obstetricos.numero_partos === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.antecedentes_gineco_obstetricos.numero_partos}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.antecedentes_gineco_obstetricos.numero_cesareas === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.antecedentes_gineco_obstetricos.numero_cesareas}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.antecedentes_gineco_obstetricos.numero_abortos === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.antecedentes_gineco_obstetricos.numero_abortos}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.antecedentes_gineco_obstetricos.numero_gestas === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.antecedentes_gineco_obstetricos.numero_gestas}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.antecedentes_gineco_obstetricos.tipo_resolucion === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.antecedentes_gineco_obstetricos.tipo_resolucion}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.embarazo_actual.diagnostico_actualizado === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.embarazo_actual.diagnostico_actualizado}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.embarazo_actual.otros_diagnosticos_actuales === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.embarazo_actual.otros_diagnosticos_actuales}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.control_prenatal.numero_consultas_prenatales === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.control_prenatal.numero_consultas_prenatales}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.control_prenatal.registro_cifra_tensional === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.control_prenatal.registro_cifra_tensional}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.control_prenatal.riesgo_obstetrico === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.control_prenatal.riesgo_obstetrico}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.control_prenatal.acido_folico === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.control_prenatal.acido_folico === 'true' ? 'Si' : 'No'}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.control_prenatal.sulfato_ferroso === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.control_prenatal.sulfato_ferroso === 'true' ? 'Si' : 'No'}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.control_prenatal.inmunizaciones.vacuna_tetano === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.control_prenatal.inmunizaciones.vacuna_tetano === 'true' ? 'Si' : 'No'}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.control_prenatal.inmunizaciones.vacuna_difteria === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.control_prenatal.inmunizaciones.vacuna_difteria === 'true' ? 'Si' : 'No'}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.control_prenatal.inmunizaciones.vacuna_influenza === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.control_prenatal.inmunizaciones.vacuna_influenza === 'true' ? 'Si' : 'No'}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.detecciones_realizadas.vih.reactiva === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.detecciones_realizadas.vih.reactiva}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                >
                    {patient.detecciones_realizadas.vih.reactiva_confirmada}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.detecciones_realizadas.vih.mujer_embarazada_confirmada === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.detecciones_realizadas.vih.mujer_embarazada_confirmada}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.detecciones_realizadas.vih.mujer_embarazada_confirmada_cual === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.detecciones_realizadas.vih.mujer_embarazada_confirmada_cual}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                >
                    {patient.detecciones_realizadas.vih.mujer_embarazada_vive_vih === 'true' ? 'Si' : patient.detecciones_realizadas.vih.mujer_embarazada_vive_vih === 'false' ? 'No' : ''}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.detecciones_realizadas.sifilis === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.detecciones_realizadas.sifilis}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.detecciones_realizadas.uroanalisis === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.detecciones_realizadas.uroanalisis === 'true' ? 'Si' : patient.detecciones_realizadas.uroanalisis === 'false' ? 'No' : ''}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.detecciones_realizadas.glucosa === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.detecciones_realizadas.glucosa}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.detecciones_realizadas.tipo_sangineo === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.detecciones_realizadas.tipo_sangineo}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.detecciones_realizadas.custionario_deteccion_violencia === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.detecciones_realizadas.custionario_deteccion_violencia}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.detecciones_realizadas.comorbilidad_asociada === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.detecciones_realizadas.comorbilidad_asociada}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.detecciones_realizadas.signos_alarma === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.detecciones_realizadas.signos_alarma}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.detecciones_realizadas.referencia.respuesta === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.detecciones_realizadas.referencia.respuesta === 'true' ? 'Si' : patient.detecciones_realizadas.referencia.respuesta === 'false' ? 'No' : ''}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.detecciones_realizadas.referencia.numero === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.detecciones_realizadas.referencia.numero}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.detecciones_realizadas.referencia.unidad_referencia === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.detecciones_realizadas.referencia.unidad_referencia}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.detecciones_realizadas.desarrollo_comunitario.plan_seguridad === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.detecciones_realizadas.desarrollo_comunitario.plan_seguridad === 'true' ? 'Si' : patient.detecciones_realizadas.desarrollo_comunitario.plan_seguridad === 'false' ? 'No' : ''}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.detecciones_realizadas.desarrollo_comunitario.metodo_planificacion_familiar === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.detecciones_realizadas.desarrollo_comunitario.metodo_planificacion_familiar === 'true' ? 'Si' : patient.detecciones_realizadas.desarrollo_comunitario.metodo_planificacion_familiar === 'false' ? 'No' : ''}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.detecciones_realizadas.desarrollo_comunitario.registrar_metodo === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.detecciones_realizadas.desarrollo_comunitario.registrar_metodo === 'true' ? 'Si' : patient.detecciones_realizadas.desarrollo_comunitario.registrar_metodo === 'false' ? 'No' : ''}
                </TableCell>
                <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                        backgroundColor: patient.vacunacion_covid.vacuno === '' ? '#D85555' : 'transparent'
                    }}
                >
                    {patient.vacunacion_covid.vacuno === 'true' ? 'Si' : patient.vacunacion_covid.vacuno === 'false' ? 'No' : ''}
                </TableCell>
                <TableCell
                    align='center'
                    colSpan={1}
                >
                    {patient.vacunacion_covid.nombre_vacuna}
                </TableCell>
                <TableCell
                    align='center'
                    colSpan={1}
                >
                    {patient.vacunacion_covid.presento_efectos}
                </TableCell>
                <TableCell
                    align='center'
                    colSpan={1}
                >
                    {patient.vacunacion_covid.cual}
                </TableCell>
            </TableRow>
        ))
        }
    </TableBody>
  )
}

export default TableBodyRecordVIH