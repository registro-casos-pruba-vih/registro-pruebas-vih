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
        edad: number
        numero_telefonico: string
        numero_familiar: string
        habla_lengua_indigena: boolean
        grado_escolar_concluido: "Primaria" | "Secundaria" | "Preparatoria" | "Profesional" | "Ninguno" 
        seguridad_social: "IMSS" | "ISSSTE" | "ISSEMYM" | "Ninguno"
        numero_expediente: number
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
        domicilio: {
            calle: string
            numero_exterior: string
            numero_interior: string
            colonia: string
            localidad: string
            municipio: string
        },
        curp: string
        edad: string
        numero_telefonico: string
        numero_familiar: string
        numero_expediente: string
    }
}