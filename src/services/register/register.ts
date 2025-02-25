// import { RegisterFormData } from "../../types/auth";
// import { USUARIO } from "../axiosBaseUrl";

// export const createUser = async (formData: RegisterFormData) => {
//     const link = process.env.USER
//     try {
//         const response = USUARIO.post('/register',formData)
//             return response
//     } catch (error: any) {
//         throw new Error(error.response.data.message);
//     }
  
// };
    
import { LoginFormData, RegisterFormData } from "../../types/auth";
const link = 'http://localhost:4000'

export const createUser = async (formData: RegisterFormData) => {
    
    try {
        const response = await fetch(`${link}/register`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json", 
                },
                body: JSON.stringify(formData),
            });
            return response.json();
    } catch (error: any) {
        throw new Error(error.response.data.message || 'Erro desconhecido');
    }
};

export const authUser = async (formData: LoginFormData) => {
    try {
        const response = await fetch(`${link}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(formData),
        });

        return await response.json();
    } catch (error: any) {
        throw new Error(error.message || 'Erro desconhecido');
    }
};

    
