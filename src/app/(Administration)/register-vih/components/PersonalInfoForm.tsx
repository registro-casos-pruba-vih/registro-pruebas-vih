import React from 'react'
import { FormikErrors } from 'formik'

import GroupForm from '@/components/GroupFrom/GroupForm'
import SubGroupForm from '@/components/SubGroupForm/SubGroupForm'
import CustomTextField from './CustomTextField'

import { RegisterVihErrorInterface, RegisterVihInterface } from '@/interface/registerVih.interface'
import CustomSelectField from './CustomSelectField'
import { afirmativeAndNegative, closedSchool, socialSecurity } from '@/data/answers'

interface IPersonalInfoFormProps {
    values: RegisterVihInterface
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    errors: FormikErrors<RegisterVihErrorInterface>
}

const PersonalInfoForm = ({values, errors,handleChange}: IPersonalInfoFormProps) => {
  return (
    <div>
        <GroupForm
            name="Unidad Médica"
        >
            <CustomTextField
                name="unidad_medica.nombre"
                label="Nombre"
                onChange={handleChange}
                readonly
                value={values.unidad_medica.nombre}
                error={errors.unidad_medica?.nombre}
            />
        </GroupForm>
        <GroupForm
            name="Médico Tratante"
        >
            <CustomTextField
                name="medico_tratante.nombre"
                label="Nombre"
                onChange={handleChange}
                value={values.medico_tratante.nombre}
                error={errors.medico_tratante?.nombre}
            />
        </GroupForm>

        <GroupForm
            name="Ficha de Identificación"
        >
            <SubGroupForm
                name='Nombre completo'
            >
                <CustomTextField
                    name="ficha_identificacion.nombre_completo.primer_apellido"
                    label="Primer apellido"
                    onChange={handleChange}
                    value={values.ficha_identificacion?.nombre_completo?.primer_apellido}
                    error={errors.ficha_identificacion?.nombre_completo?.primer_apellido}
                />

                <CustomTextField
                    name="ficha_identificacion.nombre_completo.segundo_apellido"
                    label="Segundo apellido"
                    onChange={handleChange}
                    value={values.ficha_identificacion?.nombre_completo?.segundo_apellido}
                    error={errors.ficha_identificacion?.nombre_completo?.segundo_apellido}
                />

                <CustomTextField
                    name="ficha_identificacion.nombre_completo.nombres"
                    label="Nombre(s)"
                    onChange={handleChange}
                    value={values.ficha_identificacion?.nombre_completo?.nombres}
                    error={errors.ficha_identificacion?.nombre_completo?.nombres}
                />

            </SubGroupForm>

            <SubGroupForm
                name="Domicilio"
            >
                <CustomTextField
                    name="ficha_identificacion.domicilio.calle"
                    label="Calle"
                    onChange={handleChange}
                    value={values.ficha_identificacion?.domicilio?.calle}
                />

                <CustomTextField
                    name="ficha_identificacion.domicilio.numero_exterior"
                    label="No. exterior"
                    onChange={handleChange}
                    value={values.ficha_identificacion?.domicilio?.numero_exterior}
                />

                <CustomTextField
                    name="ficha_identificacion.domicilio.numero_interior"
                    label="No. interior"
                    onChange={handleChange}
                    value={values.ficha_identificacion?.domicilio?.numero_interior}
                />

                <CustomTextField
                    name="ficha_identificacion.domicilio.colonia"
                    label="Colonia"
                    onChange={handleChange}
                    value={values.ficha_identificacion?.domicilio?.colonia}
                />

                <CustomTextField
                    name="ficha_identificacion.domicilio.localidad"
                    label="Localidad"
                    onChange={handleChange}
                    value={values.ficha_identificacion?.domicilio?.localidad}
                />

                <CustomTextField
                    name="ficha_identificacion.domicilio.municipio"
                    label="Municipio"
                    onChange={handleChange}
                    value={values.ficha_identificacion?.domicilio?.municipio}
                />
            </SubGroupForm>

            <SubGroupForm
                name=""
            >
                <CustomTextField
                    name="ficha_identificacion.curp"
                    label="CURP"
                    onChange={handleChange}
                    value={values.ficha_identificacion?.curp}
                    error={errors.ficha_identificacion?.curp}
                />

                <CustomTextField
                    name="ficha_identificacion.edad"
                    label="Edad"
                    onChange={handleChange}
                    value={values.ficha_identificacion?.edad}
                    type='number'
                />

                <CustomTextField
                    name="ficha_identificacion.numero_telefonico"
                    label="No. telefónico"
                    onChange={handleChange}
                    value={values.ficha_identificacion?.numero_telefonico}
                    error={errors.ficha_identificacion?.numero_telefonico}
                />

                <CustomTextField
                    name="ficha_identificacion.numero_familiar"
                    label="No. telefónico familiar"
                    onChange={handleChange}
                    value={values.ficha_identificacion?.numero_familiar}
                    error={errors.ficha_identificacion?.numero_familiar}
                />

                <CustomSelectField
                    name="ficha_identificacion.habla_lengua_indigena"
                    label="¿Habla lengua indiagena?"
                    value={values.ficha_identificacion?.habla_lengua_indigena}
                    onChange={handleChange}
                    data={afirmativeAndNegative}
                    error={errors.ficha_identificacion?.habla_lengua_indigena}
                />

                <CustomSelectField
                    name="ficha_identificacion.grado_escolar_concluido"
                    label="Grado escolar concluido"
                    value={values.ficha_identificacion?.grado_escolar_concluido}
                    onChange={handleChange}
                    data={closedSchool}
                    error={errors.ficha_identificacion?.grado_escolar_concluido}
                />

                <CustomSelectField
                    name="ficha_identificacion.seguridad_social"
                    label="Seguridad social"
                    value={values.ficha_identificacion?.seguridad_social}
                    onChange={handleChange}
                    data={socialSecurity}
                    error={errors.ficha_identificacion?.seguridad_social}
                />

                <CustomTextField
                    name="ficha_identificacion.numero_expediente"
                    label="No. expediente"
                    onChange={handleChange}
                    type='number'
                    value={values.ficha_identificacion?.numero_expediente}
                    error={errors.ficha_identificacion?.numero_expediente}
                />
            </SubGroupForm>
        </GroupForm>
    </div>
  )
}

export default PersonalInfoForm