import React from 'react'
import { FormikErrors } from 'formik'

import GroupForm from '@/components/GroupFrom/GroupForm'
import SubGroupForm from '@/components/SubGroupForm/SubGroupForm'
import CustomSelectField from './CustomSelectField'

import { RegisterVihErrorInterface, RegisterVihInterface } from '@/interface/registerVih.interface'

import { afirmativeAndNegative, reactive } from '../../../../data/answers';
import CustomTextField from './CustomTextField'


interface IDetectionsFormProps {
    values: RegisterVihInterface
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    errors: FormikErrors<RegisterVihErrorInterface>
}
const DetectionsForm = ({values, errors, handleChange}: IDetectionsFormProps) => {
  return (
    <div>
        <GroupForm
            name='Detecciones realizadas'
        >
            <SubGroupForm
                name="VIH"
            >
                <CustomSelectField
                    name="detecciones_realizadas.vih.reactiva"
                    label='Reactiva'
                    data={reactive}
                    value={values.detecciones_realizadas.vih.reactiva}
                    onChange={handleChange}
                />

                {
                    values.detecciones_realizadas.vih.reactiva === 'Reactiva' && (
                        <CustomSelectField
                            name="detecciones_realizadas.vih.reactiva_confirmada"
                            label='Reactiva confirmada'
                            data={afirmativeAndNegative}
                            value={values.detecciones_realizadas.vih.reactiva_confirmada}
                            onChange={handleChange}
                        />
                    )
                }

                <CustomSelectField
                    name="detecciones_realizadas.vih.mujer_embarazada_confirmada"
                    label='Mujer embarazada confirmada'
                    data={afirmativeAndNegative}
                    value={values.detecciones_realizadas.vih.mujer_embarazada_confirmada}
                    onChange={handleChange}
                />

                {
                    values.detecciones_realizadas.vih.mujer_embarazada_confirmada && (
                        <CustomTextField
                            name="detecciones_realizadas.vih.mujer_embarazada_confirmada_cual"
                            label='¿Mujer embarazada confirmada cual?'
                            value={values.detecciones_realizadas.vih.mujer_embarazada_confirmada_cual}
                            onChange={handleChange}
                        />
                    )
                }

                <CustomSelectField
                    name="detecciones_realizadas.vih.mujer_embarazada_vive_vih"
                    label='Mujer embarazada que vive con VIH'
                    data={afirmativeAndNegative}
                    value={values.detecciones_realizadas.vih.mujer_embarazada_vive_vih}
                    onChange={handleChange}
                />
            </SubGroupForm>

            <SubGroupForm
                name=""
            >
                <CustomSelectField
                    name="detecciones_realizadas.sifilis"
                    label='Sifilis'
                    data={afirmativeAndNegative}
                    value={values.detecciones_realizadas.sifilis}
                    onChange={handleChange}
                />
            </SubGroupForm>
        </GroupForm>
    </div>
  )
}

export default DetectionsForm