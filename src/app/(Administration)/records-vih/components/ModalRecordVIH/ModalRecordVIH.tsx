import React, { useContext, useEffect } from 'react'
import { Box, Grid, Modal } from '@mui/material'

import { Context as PatientContext } from '@/context/PatientContext'

import styles from './ModalRecordVIH.module.css'

import CustomLabelField from '../CustomLabelField/CustomLabelField'
import GroupForm from '@/components/GroupFrom/GroupForm'
import SubGroupForm from '@/components/SubGroupForm/SubGroupForm'
import CustomLabelAreaField from '../CustomLabelAreaField/CustomLabelAreaField'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    height: "90%",
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    scrollBehavior: 'smooth',
    overflowY: 'scroll',
}

const ModalRecordVIH = () => {

    const { state, clearPatient } = useContext(PatientContext)

  return (
    <Modal
        open={state.patient !== null}
        onClose={clearPatient}
    >
        <Box
            sx={style}
        >
            <h1 className={styles.title}>Información del paciente</h1>

            <GroupForm
                name='Unidad Médica'
            >
                <CustomLabelField
                    title='Nombre:'
                    value={state.patient?.unidad_medica.nombre}
                />
            </GroupForm>

            <GroupForm
                name='Medico Tratante'
            >
                <CustomLabelField
                    title='Nombre:'
                    value={state.patient?.medico_tratante.nombre}
                />
            </GroupForm>

            <GroupForm
                name='Ficha de Identificación'
            >
                <SubGroupForm
                    name='Nombre Completo'
                >
                    <CustomLabelField
                        title='Primer Apellido:'
                        value={state.patient?.ficha_identificacion.nombre_completo.primer_apellido}
                    />

                    <CustomLabelField
                        title='Segundo Apellido:'
                        value={state.patient?.ficha_identificacion.nombre_completo.segundo_apellido}
                    />

                    <CustomLabelField
                        title='Nombre(s):'
                        value={state.patient?.ficha_identificacion.nombre_completo.nombres}
                    />
                </SubGroupForm>

                <SubGroupForm
                    name='Domicilio'
                >
                    <CustomLabelField
                        title='Calle:'
                        value={state.patient?.ficha_identificacion.domicilio.calle}
                    />

                    <CustomLabelField
                        title='N° exterior:'
                        value={state.patient?.ficha_identificacion.domicilio.numero_exterior}
                    />

                    <CustomLabelField
                        title='N° interior:'
                        value={state.patient?.ficha_identificacion.domicilio.numero_interior}
                    />

                    <CustomLabelField
                        title='Colonia:'
                        value={state.patient?.ficha_identificacion.domicilio.colonia}
                    />

                    <CustomLabelField
                        title='Localidad:'
                        value={state.patient?.ficha_identificacion.domicilio.localidad}
                    />

                    <CustomLabelField
                        title='Municipio:'
                        value={state.patient?.ficha_identificacion.domicilio.municipio}
                    />
                </SubGroupForm>

                <SubGroupForm
                    name=''
                >
                    <CustomLabelField
                        title='CURP:'
                        value={state.patient?.ficha_identificacion.curp}
                    />

                    <CustomLabelField
                        title='Edad:'
                        value={state.patient?.ficha_identificacion.edad}
                    />

                    <CustomLabelField
                        title='N° telefónico:'
                        value={state.patient?.ficha_identificacion.numero_telefonico}
                    />

                    <CustomLabelField
                        title='N° telefónico familiar:'
                        value={state.patient?.ficha_identificacion.numero_familiar}
                    />

                    <CustomLabelField
                        title='Habla lengua indigena:'
                        value={state.patient?.ficha_identificacion.habla_lengua_indigena}
                    />

                    <CustomLabelField
                        title='Grado escolar concluido:'
                        value={state.patient?.ficha_identificacion.grado_escolar_concluido}
                    />

                    <CustomLabelField
                        title='Seguridad social:'
                        value={state.patient?.ficha_identificacion.seguridad_social}
                    />

                    <CustomLabelField
                        title='N° expediente:'
                        value={state.patient?.ficha_identificacion.numero_expediente}
                    />
                </SubGroupForm>
            </GroupForm>

            <GroupForm
                name='Antecedentes Gineco-obstétricos'
            > 
                <CustomLabelField
                    title='Fecha de la último regla:'
                    value={state.patient?.antecedentes_gineco_obstetricos.fecha_ultima_regla}
                />

                <CustomLabelField
                    title="Fecha probable de parto:"
                    value={state.patient?.antecedentes_gineco_obstetricos.fecha_probable_parto}
                />

                <CustomLabelField
                    title="Número de partos:"
                    value={state.patient?.antecedentes_gineco_obstetricos.numero_partos}
                />

                <CustomLabelField
                    title="Número de cesareas:"
                    value={state.patient?.antecedentes_gineco_obstetricos.numero_cesareas}
                />

                <CustomLabelField
                    title="Número de abortos:"
                    value={state.patient?.antecedentes_gineco_obstetricos.numero_abortos}
                />

                <CustomLabelField
                    title="Número de gestas:"
                    value={state.patient?.antecedentes_gineco_obstetricos.numero_gestas}
                />

                <CustomLabelField
                    title="Tipo de resolución:"
                    value={state.patient?.antecedentes_gineco_obstetricos.tipo_resolucion}
                />

                <SubGroupForm
                    name="Embarazo actual"
                >
                    <CustomLabelAreaField
                        title="Diagnóstico actualizado:"
                        value={state.patient?.embarazo_actual.diagnostico_actualizado}
                    />

                    <CustomLabelAreaField
                        title="Otros diagnosticos actuales:"
                        value={state.patient?.embarazo_actual.otros_diagnosticos_actuales}
                    />
                </SubGroupForm>
            </GroupForm>

            <GroupForm
                name="Acciones a realizar en el control prenatal"
            >
                <CustomLabelField
                    title='Número de consultas prenantales:'
                    value={state.patient?.control_prenatal.numero_consultas_prenatales}
                />

                <CustomLabelField
                    title="Registro de cifra tensiónal:"
                    value={state.patient?.control_prenatal.registro_cifra_tensional}
                />

                <CustomLabelField
                    title="Riesgo obstétrico:"
                    value={state.patient?.control_prenatal.riesgo_obstetrico}
                />

                <CustomLabelField
                    title="¿Se otorgó acido folico?"
                    value={state.patient?.control_prenatal.acido_folico}
                />

                <CustomLabelField
                    title="¿Se otorgó sulfato ferroso?"
                    value={state.patient?.control_prenatal.sulfato_ferroso}
                />

                <SubGroupForm
                    name="Inmunizaciones"
                >
                    <CustomLabelField
                        title="Vacuna tetano:"
                        value={state.patient?.control_prenatal.inmunizaciones.vacuna_tetano}
                    />

                    <CustomLabelField
                        title="Vacuna difteria:"
                        value={state.patient?.control_prenatal.inmunizaciones.vacuna_difteria}
                    />

                    <CustomLabelField
                        title="Vacuna influenza:"
                        value={state.patient?.control_prenatal.inmunizaciones.vacuna_influenza}
                    />
                </SubGroupForm>
            </GroupForm>
        </Box>
    </Modal>
  )
}

export default ModalRecordVIH