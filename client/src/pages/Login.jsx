import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const user =''
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const navigate = useNavigate();


  useEffect(() => {
    user && navigate('/dashboard')  //if user exist we navigate to dashboard
  }, [user]);   //when ever user changes its going to be fired again

  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-#f3f4f6'>
      <div className='w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'>

        {/* left side */}
        <div className='h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>
        <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20'>
        <span className='flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-grey-300 text-grey-600 '>
          Manage All Your Task In One Place 
        </span>
        <p className='flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-teal-900'>
          <span>Cloud-Based</span>
          <span>Task-Manager</span>
        </p>
        
        <div className='cell'>
          <div className='circle rotate-in-up-left'></div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login