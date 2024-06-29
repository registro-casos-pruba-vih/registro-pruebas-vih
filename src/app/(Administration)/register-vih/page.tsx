'use client'

import React from 'react'
import {LinearProgress} from '@mui/material'
import { Formik, FormikErrors } from 'formik'

import PersonalInfoForm from './components/PersonalInfoForm'
import MedicalForm from './components/MedicalForm'
import CustomButton from '@/components/CustomButton/CustomButton'

import styles from './page.module.css'

import { RegisterVihErrorInterface, RegisterVihInterface } from '@/interface/registerVih.interface'

const page = () => {

  const [progress, setProgress] = React.useState(0);
  const [buttonName, setButtonName] = React.useState('Siguiente');

  const initialValues: RegisterVihInterface = {
    unidad_medica: {
      nombre: ''
    },
    medico_tratante: {
      nombre: ''
    },
    ficha_identificacion:{
      nombre_completo: {
        primer_apellido: '',
        segundo_apellido: '',
        nombres: ''
      },
      domicilio: {
        calle: '',
        numero_exterior: '',
        numero_interior: '',
        colonia: '',
        localidad: '',
        municipio: ''
      },
      curp: '',
      edad: 0,
      numero_telefonico: '',
      numero_familiar: '',
      habla_lengua_indigena: false,
      grado_escolar_concluido: 'Ninguno',
      seguridad_social: 'Ninguno',
      numero_expediente: 0
    }
  }

  return (
    <div
      className={styles['main-container']}
    >
      <h1>Nuevo Registro</h1>

      <LinearProgress 
        variant='determinate'
        value={progress}
      />

      <br/>

      <Formik
        initialValues={initialValues}

        validate={values => {
          const errors: FormikErrors<RegisterVihErrorInterface> = {}

          if (values.unidad_medica.nombre === '') {
            errors.unidad_medica = {
              nombre: 'Este campo es requerido'
            }
          } 
          if (values.medico_tratante.nombre === '') {
            errors.medico_tratante = {
              nombre: 'Este campo es requerido'
            }
          }
          // Ficha de Identificación
          if (values.ficha_identificacion.nombre_completo.primer_apellido === '') {
            errors.ficha_identificacion = {
              ...errors.ficha_identificacion,
              nombre_completo: {
                ...errors.ficha_identificacion?.nombre_completo,
                primer_apellido: 'Este campo es requerido'
              }
            }
          }

          if (values.ficha_identificacion.nombre_completo.segundo_apellido === '') {
            errors.ficha_identificacion = {
              ...errors.ficha_identificacion,
              nombre_completo: {
                ...errors.ficha_identificacion?.nombre_completo,
                segundo_apellido: 'Este campo es requerido'
              }
            }
          }

          if (values.ficha_identificacion.nombre_completo.nombres === '') {
            errors.ficha_identificacion = {
              ...errors.ficha_identificacion,
              nombre_completo: {
                ...errors.ficha_identificacion?.nombre_completo,
                nombres: 'Este campo es requerido'
              }
            }
          }

          // Domicilio
          if (values.ficha_identificacion.domicilio.calle === '') {
            errors.ficha_identificacion = {
              ...errors.ficha_identificacion,
              domicilio: {
                ...errors.ficha_identificacion?.domicilio,
                calle: 'Este campo es requerido'
              }
            }
          }

          if (values.ficha_identificacion.domicilio.numero_exterior === '') {
            errors.ficha_identificacion = {
              ...errors.ficha_identificacion,
              domicilio: {
                ...errors.ficha_identificacion?.domicilio,
                numero_exterior: 'Este campo es requerido'
              }
            }
          }

          if (values.ficha_identificacion.domicilio.numero_interior === '') {
            errors.ficha_identificacion = {
              ...errors.ficha_identificacion,
              domicilio: {
                ...errors.ficha_identificacion?.domicilio,
                numero_interior: 'Este campo es requerido'
              }
            }
          }

          if (values.ficha_identificacion.domicilio.colonia === '') {
            errors.ficha_identificacion = {
              ...errors.ficha_identificacion,
              domicilio: {
                ...errors.ficha_identificacion?.domicilio,
                colonia: 'Este campo es requerido'
              }
            }
          }

          if (values.ficha_identificacion.domicilio.localidad === '') {
            errors.ficha_identificacion = {
              ...errors.ficha_identificacion,
              domicilio: {
                ...errors.ficha_identificacion?.domicilio,
                localidad: 'Este campo es requerido'
              }
            }
          }

          if (values.ficha_identificacion.domicilio.municipio === '') {
            errors.ficha_identificacion = {
              ...errors.ficha_identificacion,
              domicilio: {
                ...errors.ficha_identificacion?.domicilio,
                municipio: 'Este campo es requerido'
              }
            }
          }

          //Extra info ficha identificación
          if (values.ficha_identificacion.curp === '' || values.ficha_identificacion.curp.length < 18) {
            errors.ficha_identificacion = {
              ...errors.ficha_identificacion,
              curp: 'Este campo es requerido y debe tener al menos 18 caracteres'
            }
          }

          if (values.ficha_identificacion.edad === 0) {
            errors.ficha_identificacion = {
              ...errors.ficha_identificacion,
              edad: 'Este campo es requerido'
            }
          }

          if (values.ficha_identificacion.numero_telefonico === '' || values.ficha_identificacion.numero_telefonico.length < 10) {
            errors.ficha_identificacion = {
              ...errors.ficha_identificacion,
              numero_telefonico: 'Este campo es requerido'
            }
          }

          if (values.ficha_identificacion.numero_familiar === '' || values.ficha_identificacion.numero_familiar.length < 10) {
            errors.ficha_identificacion = {
              ...errors.ficha_identificacion,
              numero_familiar: 'Este campo es requerido'
            }
          }

          if (values.ficha_identificacion.numero_expediente.toString() === '' || values.ficha_identificacion.numero_expediente.toString().length < 6) {
            errors.ficha_identificacion = {
              ...errors.ficha_identificacion,
              numero_expediente: 'Este campo es requerido'
            }
          }

          return errors
        }}

        onSubmit={(values) => {
          if (progress !== 75) {
            setProgress(progress + 25)
            window.screenTop
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