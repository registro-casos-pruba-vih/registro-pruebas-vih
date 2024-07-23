export interface RegisterVihInterface {
    unidad_medica: {
        nombre: string
    },
    medico_tratante: {
        nombre: string
    },
    ficha_identificacion: {
        nombre_completo: {
            primer_apellido: string
            segundo_apellido: string
            nombres: string
        },
        domicilio: {
            calle: string
            numero_exterior: string
            numero_interior: string
            colonia: string
            localidad: string
            municipio: string
        },
        curp: string
        edad: string | number
        numero_telefonico: string
        numero_familiar: string
        habla_lengua_indigena: string | boolean
        grado_escolar_concluido: "Primaria" | "Secundaria" | "Preparatoria" | "Profesional" | "Ninguno" | ""
        seguridad_social: "IMSS" | "ISSSTE" | "ISSEMYM" | "Ninguno" | ""
        numero_expediente: string | number
    }

    antecedentes_gineco_obstetricos: {
        fecha_ultima_regla: Date
        fecha_probable_parto: Date
        numero_partos: string | number
        numero_cesareas: string | number
        numero_abortos: string | number
        numero_gestas: string | number
        tipo_resolucion: "Parto" | "Cesarea" | "Aborto" | ""
    }
    embarazo_actual: {
        diagnostico_actualizado: string
        otros_diagnosticos_actuales: string
    }
    control_prenatal: {
        numero_consultas_prenatales: string | number
        registro_cifra_tensional: string
        riesgo_obstetrico: "Alto" | "Bajo" | ""
        acido_folico: "" | boolean
        sulfato_ferroso: "" | boolean
        inmunizaciones: {
            vacuna_tetano: "" | boolean
            vacuna_difteria: "" | boolean
            vacuna_influenza: "" | boolean
        }
    },
    detecciones_realizadas: {
        vih: {
            reactiva: "" | "Reactiva" | "No reactiva" | "No se tamizo"
            reactiva_confirmada: boolean | ""
            mujer_embarazada_confirmada: boolean | ""
            mujer_embarazada_confirmada_cual: string
            mujer_embarazada_vive_vih: boolean | ""
        }
        sifilis: "" | "Reactiva" | "No reactiva" | "No se tamizo"
        uroanalisis: "" | "positiva" | "negativa" | "No se realizo"
        glucosa: string,
        tipo_sangineo: string,
        custionario_deteccion_violencia: "" | "Negativo" | "Positivo" | "No se realizo"
        comorbilidad_asociada: string
        signos_alarma: string
        referencia: {
            respuesta: "" | boolean
            numero: "" | number
            unidad_referencia: string
        }
        desarrollo_comunitario: {
            plan_seguridad: "" | boolean
            metodo_planificacion_familiar: "" | boolean
            registrar_metodo: string
        }
    },
    vacunacion_covid: {
        vacuno: "" | boolean
        nombre_vacuna: string
        presento_efectos: "" | boolean
        cual: string
    } 
}

export interface RegisterVihErrorInterface {
    unidad_medica: {
        nombre: string
    },
    medico_tratante: {
        nombre: string
    },
    ficha_identificacion: {
        nombre_completo: {
            primer_apellido: string
            segundo_apellido: string
            nombres: string
        },
        curp: string
        habla_lengua_indigena: string
        grado_escolar_concluido: string
        seguridad_social: string
        numero_telefonico: string
        numero_familiar: string
        numero_expediente: string
    },
    antecedentes_gineco_obstetricos: {
        fecha_ultima_regla: Date
        fecha_probable_parto: Date
        numero_partos: number
        numero_cesareas: number
        numero_abortos: number
        numero_gestas: number
    }
    embarazo_actual: {
        diagnostico_actualizado: string
        otros_diagnosticos_actuales: string
    }
    control_prenatal: {
        numero_consultas_prenatales: number
        registro_cifra_tensional: string
        riesgo_obstetrico: string
        acido_folico: boolean
        sulfato_ferroso: boolean
        inmunizaciones: {
            vacuna_tetano: boolean
            vacuna_difteria: boolean
            vacuna_influenza: boolean
        }
    }
}