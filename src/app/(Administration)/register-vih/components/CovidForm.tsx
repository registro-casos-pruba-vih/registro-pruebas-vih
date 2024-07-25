import React from 'react'
import { FormikErrors } from 'formik'

import GroupForm from '@/components/GroupFrom/GroupForm'
import CustomTextField from './CustomTextField'
import CustomSelectField from './CustomSelectField'

import { RegisterVihErrorInterface, RegisterVihInterface } from '@/interfaces/registerVih.interface'
import { afirmativeAndNegative } from '@/data/answers'

interface ICovidFormProps {
    values: RegisterVihInterface
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    errors: FormikErrors<RegisterVihErrorInterface>
}

const CovidForm = ({values, errors, handleChange}: ICovidFormProps) => {
  return (
    <div>
        <GroupForm
            name='COVID (Opcional)'
        >
            <CustomSelectField
                name="vacunacion_covid.vacuno"
                label='Vacunación COVID'
                data={afirmativeAndNegative}
                value={values.vacunacion_covid.vacuno}
                onChange={handleChange}
            />

            {
                values.vacunacion_covid.vacuno  && (
                    <>
                        <CustomTextField
                            name="vacunacion_covid.nombre_vacuna"
                            label='Nombre de la vacuna'
                            onChange={handleChange}
                            value={values.vacunacion_covid.nombre_vacuna}
                        />

                        <CustomSelectField
                            name="vacunacion_covid.presento_efectos"
                            label='Presento efectos'
                            data={afirmativeAndNegative}
                            value={values.vacunacion_covid.presento_efectos}
                            onChange={handleChange}
                        />

                        <CustomSelectField
                            name="vacunacion_covid.cual"
                            label='¿Cuál?'
                            data={afirmativeAndNegative}
                            value={values.vacunacion_covid.cual}
                            onChange={handleChange}
                        />
                    </>
                    
                )
            }


        </GroupForm>
    </div>
  )
}

export default CovidForm