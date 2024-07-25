export interface PatientInterface {
    unidad_medica: UnidadMedica
    medico_tratante: MedicoTratante
    ficha_identificacion: FichaIdentificacion
    antecedentes_gineco_obstetricos: AntecedentesGinecoObstetricos
    embarazo_actual: EmbarazoActual
    control_prenatal: ControlPrenatal
    detecciones_realizadas: DeteccionesRealizadas
    vacunacion_covid: VacunacionCovid
    _id: string
    __v: number
  }
  
  export interface UnidadMedica {
    nombre: string
  }
  
  export interface MedicoTratante {
    nombre: string
  }
  
  export interface FichaIdentificacion {
    nombre_completo: NombreCompleto
    domicilio: Domicilio
    curp: string
    edad: string
    numero_telefonico: string
    numero_familiar: string
    habla_lengua_indigena: string
    grado_escolar_concluido: string
    seguridad_social: string
    numero_expediente: string
  }
  
  export interface NombreCompleto {
    primer_apellido: string
    segundo_apellido: string
    nombres: string
  }
  
  export interface Domicilio {
    calle: string
    numero_exterior: string
    numero_interior: string
    colonia: string
    localidad: string
    municipio: string
  }
  
  export interface AntecedentesGinecoObstetricos {
    fecha_ultima_regla: string
    fecha_probable_parto: string
    numero_cesareas: string
    numero_abortos: string
    numero_gestas: string
    tipo_resolucion: string
    numero_partos: string
  }
  
  export interface EmbarazoActual {
    diagnostico_actualizado: string
    otros_diagnosticos_actuales: string
  }
  
  export interface ControlPrenatal {
    inmunizaciones: Inmunizaciones
    registro_cifra_tensional: string
    riesgo_obstetrico: string
    acido_folico: string
    sulfato_ferroso: string
    numero_consultas_prenatales: string
  }
  
  export interface Inmunizaciones {
    vacuna_tetano: string
    vacuna_difteria: string
    vacuna_influenza: string
  }
  
  export interface DeteccionesRealizadas {
    vih: Vih
    referencia: Referencia
    desarrollo_comunitario: DesarrolloComunitario
    sifilis: string
    uroanalisis: string
    glucosa: string
    tipo_sangineo: string
    custionario_deteccion_violencia: string
    comorbilidad_asociada: string
    signos_alarma: string
  }
  
  export interface Vih {
    reactiva: string
    reactiva_confirmada: string
    mujer_embarazada_confirmada: string
    mujer_embarazada_vive_vih: string
    mujer_embarazada_confirmada_cual: string
  }
  
  export interface Referencia {
    respuesta: string
    numero: string
    unidad_referencia: string
  }
  
  export interface DesarrolloComunitario {
    plan_seguridad: string
    metodo_planificacion_familiar: string
    registrar_metodo: string
  }
  
  export interface VacunacionCovid {
    vacuno: string
    nombre_vacuna: string
    presento_efectos: string
    cual: string
  }
  