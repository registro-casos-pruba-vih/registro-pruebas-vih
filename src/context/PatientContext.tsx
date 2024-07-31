import { Dispatch } from "react";

import dbApi from '@/api/DBApi'

import dataContext from "./dataContext";

import { PatientInterface } from "@/interfaces/patient.interface";
import { RegisterVihInterface } from "@/interfaces/registerVih.interface";

export interface PatientState {
    patients: PatientInterface[];
    patient: PatientInterface | null;
    loading: boolean;
    error: string;
}

export type PatientAction = 
    | {type: 'CREATE_PATIENT', payload: PatientInterface}
    | {type: 'GET_PATIENTS', payload: PatientInterface[]}
    | {type: 'GET_PATIENT', payload: PatientInterface}
    | {type: 'CLEAR_PATIENT'}
    | {type: 'IS_LOADING'}

type PatientContextProps = {
    state: PatientState,
    createPatient: (patient: RegisterVihInterface) => boolean
    getPatients: () => void,
    getPatient: (id: string) => void
    clearPatient: () => void
}

const patientReduce =(state: PatientState, action: PatientAction): PatientState => {
    switch (action.type) {
        case 'CREATE_PATIENT':
            return {
                ...state,
                loading: false,
                patients: [...state.patients, action.payload],
                patient: null
            }
        case 'GET_PATIENTS':
            return {
                ...state,
                loading: false,
                patients: action.payload,
                patient: null
            }
        case 'GET_PATIENT':
            return {
                ...state,
                loading: false,
                patient: action.payload
            }
        case 'CLEAR_PATIENT':
            return {
                ...state,
                loading: false,
                patient: null
            }
        case 'IS_LOADING':
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

const createPatient = (dispatch: Dispatch<PatientAction>) => async(patient: RegisterVihInterface): Promise<boolean> => {

    try {
        dispatch({
            type: 'IS_LOADING'
        })

        const response = await dbApi.post<PatientInterface>('/patient', patient);

        dispatch({
            type: 'CREATE_PATIENT',
            payload: response.data
        })

        return false;
    } catch (error) {
        console.log(error)
        return false;
    }
}

const getPatients = (dispatch: Dispatch<PatientAction>) => async() => {
    try {

        dispatch({
            type: 'IS_LOADING'
        })

        const response = await dbApi.get<PatientInterface[]>('/patient')

        dispatch({
            type: 'GET_PATIENTS',
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}

const getPatient = (dispatch: Dispatch<PatientAction>) => async(id: string) => {

    try {
        
        const response = await dbApi.get<PatientInterface>(`/patient/${id}`)

        dispatch({
            type: 'GET_PATIENT',
            payload: response.data
        })
    } catch(error) {
        console.log(error)
    }
}

const clearPatient = (dispatch: Dispatch<PatientAction>) => async() => {
    dispatch({
        type: 'CLEAR_PATIENT'
    })
}


export const {Provider, Context} = dataContext<PatientContextProps>(patientReduce, 
    {
        createPatient,
        getPatients,
        getPatient,
        clearPatient
    },
    {
        patients: [],
        patient: null,
        loading: false,
        error: ''
    }
)