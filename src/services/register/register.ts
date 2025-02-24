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
    
import { RegisterFormData } from "../../types/auth";

export const createUser = async (formData: RegisterFormData) => {
    const link = 'http://localhost:4000'
    try {
        const response = await fetch(`${link}/register`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json", 
                },
                body: JSON.stringify(formData),
            });
            return response
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
  
};
    
