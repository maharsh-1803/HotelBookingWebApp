import { RegisterFormData } from "./pages/Register";
import { SignInFormData } from "./pages/SignIn";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
import {HotelType} from '../../BackEnd/src/shared/types'

export const register = async (formData:RegisterFormData)=>{
    const response = await fetch(`${API_BASE_URL}/api/users/register`,{
        method:"POST",
        credentials:"include",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(formData),
    });

    const responseBody = await response.json();

    if(!response.ok)
    {
        throw new Error(responseBody.message);
        
    }
}

export const signIn = async(formData:SignInFormData)=>{
    const response = await fetch(`${API_BASE_URL}/api/auth/login`,{
        method:"POST",
        credentials:"include",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(formData)
    })
    const body = await response.json();
    if(!response.ok)
    {
        throw new Error(body.message);
    }
    return body;
}

export const validateToken = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
        credentials: "include",
    });
    console.log("response in validatetoken",response)
    if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(`Failed to validate token: ${errorBody.message || response.statusText}`);
    }

    return response.json();
};

  

export const signOut = async ()=>{
    const response = await fetch(`${API_BASE_URL}/api/auth/logout`,{
        credentials:"include",
        method:"POST"
    });
    if(!response.ok)
    {
        throw new Error("Error during sign out");
    }
}

export const addMyHotel = async (hotelFormData : FormData)=>{
    const response = await fetch(`${API_BASE_URL}/api/my-hotels`,{
        method:"POST",
        credentials:"include",
        body:hotelFormData,
    })

    if(!response.ok)
    {
        throw new Error("Faild to add hotel");
    }
    return response.json();
}

export const fetchMyHotels = async ():Promise<HotelType[]> =>{
    const response = await fetch(`${API_BASE_URL}/api/my-hotels`,{
        credentials:"include"
    })
    if(!response.ok)
    {
        throw new Error("Error fetching hotels");
    }
    return response.json();
}

export const fetchMyHotelById = async (hotelId:string):Promise<HotelType>=>{
    const response = await fetch(`${API_BASE_URL}/api/my-hotels/${hotelId}`,{
        credentials:"include",
    });
    if(!response.ok)
    {
        throw new Error("Error fetching Hotels");
    }

    return response.json();
}