import React from 'react'
import { FormikErrors } from 'formik'
import GroupForm from '@/components/GroupFrom/GroupForm'

import { RegisterVihErrorInterface, RegisterVihInterface } from '@/interface/registerVih.interface'

import CustomDateField from './CustomDateField'
import CustomTextField from './CustomTextField'
import CustomSelectField from './CustomSelectField'
import CustomTextArea from './CustomTextArea/CustomTextArea'

import { afirmativeAndNegative, riskObstetrico, typeResolution } from '@/data/answers'
import SubGroupForm from '@/components/SubGroupForm/SubGroupForm'


interface IMedicalFormProps {
  values: RegisterVihInterface
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  errors: FormikErrors<RegisterVihErrorInterface>
}

const MedicalForm = ({values, handleChange, errors}:IMedicalFormProps) => {
  return (
    <div>
      <GroupForm
        name='Antecedentes Gineco-obstétricos'
      >
        <CustomDateField
          name='antecedentes_gineco_obstetricos.fecha_ultima_regla'
          label='Fecha de la última regla'
          value={values.antecedentes_gineco_obstetricos.fecha_ultima_regla}
          onChange={handleChange}
        />

        <CustomDateField
          name='antecedentes_gineco_obstetricos.fecha_probable_parto'
          label='Fecha probable de parto'
          onChange={handleChange}
          value={values.antecedentes_gineco_obstetricos.fecha_probable_parto}
        />

        <CustomTextField
          name='antecedentes_gineco_obstetricos.numero_partos'
          label='Número de partos'
          onChange={handleChange}
          type='number'
          value={values.antecedentes_gineco_obstetricos.numero_partos}
          error={errors.antecedentes_gineco_obstetricos?.numero_partos}
        />

        <CustomTextField
          name="antecedentes_gineco_obstetricos.numero_cesareas"
          label="Número de cesareas"
          type='number'
          onChange={handleChange}
          value={values.antecedentes_gineco_obstetricos.numero_cesareas}
          error={errors.antecedentes_gineco_obstetricos?.numero_cesareas}
        />

        <CustomTextField
          name="antecedentes_gineco_obstetricos.numero_abortos"
          label="Número de abortos"
          onChange={handleChange}
          type='number'
          value={values.antecedentes_gineco_obstetricos.numero_abortos}
        />

        <CustomTextField
          name="antecedentes_gineco_obstetricos.numero_gestas"
          label="Número de gestas"
          onChange={handleChange}
          type='number'
          value={values.antecedentes_gineco_obstetricos.numero_gestas}
        />

        <CustomSelectField
          name='antecedentes_gineco_obstetricos.tipo_resolucion'
          label='Tipo de resolución'
          data={typeResolution}
          value={values.antecedentes_gineco_obstetricos.tipo_resolucion}
          onChange={handleChange}
        />
      </GroupForm>

      <GroupForm
        name="Embarazo actual"
      >
        <CustomTextArea
          label='Diagnóstico actualizado'
          name='embarazo_actual.diagnostico_actualizado'
          value={values.embarazo_actual.diagnostico_actualizado}
          onChange={handleChange}
        />

        <CustomTextArea
          label='Otros diagnósticos actuales'
          name='embarazo_actual.otros_diagnosticos_actuales'
          value={values.embarazo_actual.otros_diagnosticos_actuales}
          onChange={handleChange}
        />
      </GroupForm>

      <GroupForm
        name="Acciones a realizar en el control prenatal"
      >
        <CustomTextField
          label="Número de consultas prenatales"
          name="control_prenatal.numero_consultas_prenatales"
          value={values.control_prenatal.numero_consultas_prenatales}
          onChange={handleChange}
          type='number'
          error={errors.control_prenatal?.numero_consultas_prenatales}
        />

        <CustomTextField
          label='Registro de cifra tensional'
          name='control_prenatal.registro_cifra_tensional'
          value={values.control_prenatal.registro_cifra_tensional}
          onChange={handleChange}
        />

        <CustomSelectField
          label='Riesgo obstétrico'
          name='control_prenatal.riesgo_obstetrico'
          data={riskObstetrico}
          value={values.control_prenatal.riesgo_obstetrico}
          onChange={handleChange}
        />

        <CustomSelectField
          label="¿Se otorgó acido folico?"
          name='control_prenatal.acido_folico'
          data={afirmativeAndNegative}
          value={values.control_prenatal.acido_folico}
          onChange={handleChange}
        />

        <CustomSelectField
          label="¿Se otorgó sulfato ferroso?"
          name='control_prenatal.sulfato_ferroso'
          data={afirmativeAndNegative}
          value={values.control_prenatal.sulfato_ferroso}
          onChange={handleChange}
        />

        <SubGroupForm
          name='Inmunizaciones'
        >
          <CustomSelectField
            label='Vacuna tetano'
            name='control_prenatal.inmunizaciones.vacuna_tetano'
            data={afirmativeAndNegative}
            value={values.control_prenatal.inmunizaciones.vacuna_tetano}
            onChange={handleChange}
          />

          <CustomSelectField
            label='Vacuna difteria'
            name='control_prenatal.inmunizaciones.vacuna_difteria'
            data={afirmativeAndNegative}
            value={values.control_prenatal.inmunizaciones.vacuna_difteria}
            onChange={handleChange}
          />

          <CustomSelectField
            label="Vacuna influenza"
            name='control_prenatal.inmunizaciones.vacuna_influenza'
            data={afirmativeAndNegative}
            value={values.control_prenatal.inmunizaciones.vacuna_influenza}
            onChange={handleChange}
          />    
        </SubGroupForm>
      </GroupForm>
    </div>
  )
}

export default MedicalForm