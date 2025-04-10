
import api from "@/lib/axios";
import { dashboardProjectSchema, Project, ProjectFormData } from "../types";
import { isAxiosError } from "axios";


export async function createProject (formdata : ProjectFormData) {
    try {
            const {data} = await api.post ("/projects", formdata)
            return data 
    } catch (error) {   
        if (isAxiosError(error) && error.response) {
           throw new Error ( error.response.data.message) 
        }
    }
}

export async function getProjects () {
    try {
           const {data }= await api ("/projects")
           const response = dashboardProjectSchema.safeParse(data)
           if (response.success  ) {
                return response.data
           }
           return data
            
    } catch (error) {   
        if (isAxiosError(error) && error.response) {
           throw new Error ( error.response.data.message) 
            

        }

    }
}

export async function getProjectById( id: Project ['_id']) {
    try {
           const {data} = await api (`/projects/${id}`)
           
           return data
            
    } catch (error) {   
        if (isAxiosError(error) && error.response) {
           throw new Error ( error.response.data.message) 
            

        }

    }
}