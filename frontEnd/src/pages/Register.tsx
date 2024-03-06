import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from '../api-client';
import { useAppContext } from "../contexts/AppContext";


export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export const Register = () => {
  const {showToast} = useAppContext()
  const { register,watch,handleSubmit,formState:{errors} } = useForm<RegisterFormData>();
  const mutation = useMutation(apiClient.register,{
    onSuccess:()=>{
      showToast({message:"Registration Success!",type:"SUCCESS"})
    },
    onError:(error:Error)=>{
      showToast({message:error.message,type:"ERROR"})
    }
  });
  const onsubmit = handleSubmit((data)=>{
    mutation.mutate(data);
  })
  return (
    <>
      <form className="flex flex-col gap-5" onSubmit={onsubmit}>
        <h2 className="text-3xl font-bold">Create an Account</h2>
        <div className="flex flex-col md:flex-row gap-5">
          <label
            className="text-gray-700 text-sm font-bold flex-1"
            {...register("firstName", { required: "firstName is required" })}
          >
            First Name :
            <input className="border rounded w-full py-1 px-2 font-normal" />
            {errors.firstName && (<span className="text-red-700">{errors.firstName.message}</span>)}
          </label>
          <label
            className="text-gray-700 text-sm font-bold flex-1"
            {...register("lastName", { required: "lastName is required" })}
          >
            Last Name :
            <input className="border rounded w-full py-1 px-2 font-normal" />
            {errors.lastName && (<span className="text-red-700">{errors.lastName.message}</span>)}
          </label>
        </div>
        <label
          className="text-gray-700 text-sm font-bold"
          {...register("email", { required: "Email is required" })}
        >
          Email :
          <input
            type="email"
            className="border rounded w-full py-1 px-2 font-normal"
          />
          {errors.email && (<span className="text-red-700">{errors.email.message}</span>)}
        </label>
        <label
          className="text-gray-700 text-sm font-bold"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "password must be atleast 6 character long",
            },
          })}
        >
          Password :
          <input
            type="password"
            className="border rounded w-full py-1 px-2 font-normal"
          />
          {errors.password && (<span className="text-red-700">{errors.password.message}</span>)}
        </label>
        <label
          className="text-gray-700 text-sm font-bold"
          {...register("confirmPassword", { validate:(val)=>{
                if(!val)
                {
                    return "This field is required"
                }
                else if(watch("password")!== val)
                {
                    return "Your password do not match";
                }
          } })}
        >
          confirm Password :
          <input
            type="password"
            className="border rounded w-full py-1 px-2 font-normal"
          />
          {errors.confirmPassword && (<span className="text-red-700">{errors.confirmPassword.message}</span>)}
        </label>
        <span>
            <button  type="submit" className="bg-sky-900 text-white p-2 font-bold hover:bg-sky-800">Create Account</button>
        </span>
      </form>
    </>
  );
};

export default Register;
