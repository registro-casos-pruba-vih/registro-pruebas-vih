'use client'

import React from 'react'
import {Box, LinearProgress, Typography} from '@mui/material'
import { Formik, FormikErrors } from 'formik'

import PersonalInfoForm from './components/PersonalInfoForm'
import MedicalForm from './components/MedicalForm'
import DetectionsForm from './components/DetectionsForm'
import CovidForm from './components/CovidForm'
import CustomButton from '@/components/CustomButton/CustomButton'

import styles from './page.module.css'

import { RegisterVihErrorInterface, RegisterVihInterface } from '@/interface/registerVih.interface'

import validationForm from './validations/validationForm'

const page = () => {

  const [progress, setProgress] = React.useState(0);
  const [buttonName, setButtonName] = React.useState('Siguiente');

  const initialValues: RegisterVihInterface = {
    unidad_medica: {
      nombre: 'Hospital de Ginecologia y Obstetricia'
    },
    medico_tratante: {
      nombre: ""
    },
    ficha_identificacion:{
      nombre_completo: {
        primer_apellido: "",
        segundo_apellido: "",
        nombres: ""
      },
      domicilio: {
        calle: "",
        numero_exterior: "",
        numero_interior: "",
        colonia: "",
        localidad: "",
        municipio: ""
      },
      curp: "",
      edad: "",
      numero_telefonico: "",
      numero_familiar: "",
      habla_lengua_indigena: "",
      grado_escolar_concluido: "",
      seguridad_social: "",
      numero_expediente: ""
    },
    antecedentes_gineco_obstetricos:{
      fecha_ultima_regla: new Date,
      fecha_probable_parto: new Date,
      numero_partos: "",
      numero_cesareas: "",
      numero_abortos: "",
      numero_gestas: "",
      tipo_resolucion: ""
    },
    embarazo_actual: {
      diagnostico_actualizado: '',
      otros_diagnosticos_actuales: ''
    },
    control_prenatal: {
      numero_consultas_prenatales: "",
      registro_cifra_tensional: '',
      riesgo_obstetrico: "",
      acido_folico: "",
      sulfato_ferroso: "",
      inmunizaciones: {
        vacuna_tetano: "",
        vacuna_difteria: "",
        vacuna_influenza: ""
      }
    },
    detecciones_realizadas: {
      vih: {
        reactiva: "",
        reactiva_confirmada: "",
        mujer_embarazada_confirmada: "",
        mujer_embarazada_confirmada_cual: "",
        mujer_embarazada_vive_vih: "",
      },
      sifilis: "",
      uroanalisis: "",
      glucosa: "",
      tipo_sangineo: "",
      custionario_deteccion_violencia: "",
      comorbilidad_asociada: "",
      signos_alarma: "",
      referencia: {
        respuesta: "",
        numero: "",
        unidad_referencia: ""
      },
      desarrollo_comunitario: {
        plan_seguridad: "",
        metodo_planificacion_familiar: "",
        registrar_metodo: ""
      }
    },
    vacunacion_covid: {
      vacuno: "",
      nombre_vacuna: "",
      presento_efectos: "",
      cual: "",
    }
  }

  return (
    <div
      className={styles['main-container']}
    >
      <h1>Nuevo Registro</h1>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress 
            variant="determinate" 
            color="success"
            value={progress} 
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography 
            variant="body2" 
            color="text.secondary"
            fontSize={'20px'}  
          >{`${Math.round(
            progress
          )}%`}</Typography>
        </Box>
    </Box>

      <br/>

      <Formik
        initialValues={initialValues}

        validate={validationForm}

        onSubmit={(values) => {
          if (progress !== 75) {
            setProgress(progress + 25)
            window.screenTop
          } else {
            console.log(values)
          }
        }}
      >
       {(
        {
          values,
          errors,
          handleChange,
          handleSubmit
        }
       ) => (
         <form
           onSubmit={handleSubmit}
         >
          {progress === 0 &&
            <PersonalInfoForm
              values={values}
              handleChange={handleChange}
              errors={errors}
            />
          }

          {progress === 25 &&
            <MedicalForm
              values={values}
              handleChange={handleChange}
              errors={errors}
            />
          }

          {progress === 50 &&
            <DetectionsForm
              values={values}
              handleChange={handleChange}
              errors={errors}
            />
          }

          {
            progress === 75 &&
            <CovidForm
              values={values}
              handleChange={handleChange}
              errors={errors}
            />
          }

           <div className={styles['buttons-container']}>
              <CustomButton
                name={buttonName}
                type='submit'
              />
           </div>
         </form>
       )}
      </Formik>
    </div>
  )
}

export default page