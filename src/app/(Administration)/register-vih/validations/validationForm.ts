import { RegisterVihErrorInterface, RegisterVihInterface } from "@/interface/registerVih.interface"
import { FormikErrors } from "formik"

const validationForm = (values: RegisterVihInterface) => {
    const errors: FormikErrors<RegisterVihErrorInterface> = {}

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

    if (values.ficha_identificacion.curp !== '' && values.ficha_identificacion.curp.length !== 18) {
      errors.ficha_identificacion = {
        ...errors.ficha_identificacion,
        curp: 'La CURP debe tener 18 caracteres'
      }
    }

    if (values.ficha_identificacion.numero_telefonico !== '' && values.ficha_identificacion.numero_telefonico.length !== 10) {
      errors.ficha_identificacion = {
        ...errors.ficha_identificacion,
        numero_telefonico: 'El número de teléfono debe tener 10 caracteres'
      }
    }

    if (values.ficha_identificacion.numero_familiar !== '' && values.ficha_identificacion.numero_familiar.length !== 10) {
      errors.ficha_identificacion = {
        ...errors.ficha_identificacion,
        numero_familiar: 'El número de teléfono debe tener 10 caracteres'
      }
    }

    if (values.ficha_identificacion.habla_lengua_indigena === '') {
      errors.ficha_identificacion = {
        ...errors.ficha_identificacion,
        habla_lengua_indigena: 'Seleccione una opción'
      }
    }

    if (values.ficha_identificacion.grado_escolar_concluido === '') {
      errors.ficha_identificacion = {
        ...errors.ficha_identificacion,
        grado_escolar_concluido: 'Seleccione una opción'
      }
    }

    if (values.ficha_identificacion.seguridad_social === '') {
      errors.ficha_identificacion = {
        ...errors.ficha_identificacion,
        seguridad_social: 'Seleccione una opción'
      }
    }

    if (values.ficha_identificacion.numero_expediente === '' || values.ficha_identificacion.numero_expediente.toString().length !== 6) {
      errors.ficha_identificacion = {
        ...errors.ficha_identificacion,
        numero_expediente: 'El numero de expediente debe tener 6 caracteres'
      }
    }

    return errors
}

export default validationForm