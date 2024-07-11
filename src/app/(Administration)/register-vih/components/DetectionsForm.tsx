import React from 'react'
import { FormikErrors } from 'formik'

import GroupForm from '@/components/GroupFrom/GroupForm'
import SubGroupForm from '@/components/SubGroupForm/SubGroupForm'
import CustomSelectField from './CustomSelectField';
import CustomTextField from './CustomTextField'

import { RegisterVihErrorInterface, RegisterVihInterface } from '@/interface/registerVih.interface'

import { afirmativeAndNegative, reactive, violenceDetection } from '../../../../data/answers';
import CustomTextArea from './CustomTextArea/CustomTextArea';


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

                <CustomSelectField
                    name="detecciones_realizadas.uroanalisis"
                    label='Uroanálisis'
                    data={afirmativeAndNegative}
                    value={values.detecciones_realizadas.uroanalisis}
                    onChange={handleChange}
                />

                <CustomTextField
                    name="detecciones_realizadas.glucosa"
                    label='Glucosa'
                    value={values.detecciones_realizadas.glucosa}
                    onChange={handleChange}
                />

                <CustomTextField
                    name="detecciones_realizadas.tipo_sangineo"
                    label='Tipo sanguíneo'
                    value={values.detecciones_realizadas.tipo_sangineo}
                    onChange={handleChange}
                />

                <CustomSelectField
                    name="detecciones_realizadas.custionario_deteccion_violencia"
                    label='Custionario de detección de violencia'
                    data={violenceDetection}
                    value={values.detecciones_realizadas.custionario_deteccion_violencia}
                    onChange={handleChange}
                />
            </SubGroupForm>

            <SubGroupForm
                name=""
            >
                <CustomTextArea
                    name="detecciones_realizadas.comorbilidad_asociada"
                    label='Comorbilidad asociada'
                    value={values.detecciones_realizadas.comorbilidad_asociada}
                    onChange={handleChange}
                />

                <CustomTextArea
                    name="detecciones_realizadas.signos_alarma"
                    label='Signos de alarma'
                    value={values.detecciones_realizadas.signos_alarma}
                    onChange={handleChange}
                />
            </SubGroupForm>

            <SubGroupForm
                name="Referencia"
            >
                <CustomSelectField
                    name="detecciones_realizadas.referencia.respuesta"
                    label='Respuesta'
                    data={afirmativeAndNegative}
                    value={values.detecciones_realizadas.referencia.respuesta}
                    onChange={handleChange}
                />

                <CustomTextField
                    name='detecciones_realizadas.referencia.numero'
                    label='Número'
                    value={values.detecciones_realizadas.referencia.numero}
                    type='number'
                    onChange={handleChange}
                />

                <CustomTextField
                    name='detecciones_realizadas.referencia.unidad_referencia'
                    label='Unidad de referencia'
                    value={values.detecciones_realizadas.referencia.unidad_referencia}
                    onChange={handleChange}
                />
            </SubGroupForm>

            <SubGroupForm
                name="Desarrollo comunitario"
            >
                <CustomSelectField
                 name="detecciones_realizadas.desarrollo_comunitario.plan_seguridad"
                 label="¿Cuenta con plan de seguridad?"
                 data={afirmativeAndNegative}
                 value={values.detecciones_realizadas.desarrollo_comunitario.plan_seguridad}
                 onChange={handleChange}
                />

                <CustomSelectField
                 name="detecciones_realizadas.desarrollo_comunitario.metodo_planificacion_familiar"
                 label="¿Cuenta con método de planificación familiar?"
                 data={afirmativeAndNegative}
                 value={values.detecciones_realizadas.desarrollo_comunitario.metodo_planificacion_familiar}
                 onChange={handleChange}
                />

                <CustomSelectField
                 name="detecciones_realizadas.desarrollo_comunitario.registrar_metodo"
                 label="Registar método"
                 data={afirmativeAndNegative}
                 value={values.detecciones_realizadas.desarrollo_comunitario.registrar_metodo}
                 onChange={handleChange}
                />
            </SubGroupForm>
        </GroupForm>
    </div>
  )
}

export default DetectionsForm