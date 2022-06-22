// import React from 'react';
// import avater from '../../Common/Image/avatar.svg'
// import bg from '../../Common/Image/bg.svg'
// import wave from '../../Common/Image/wave.png'
// import './login.css';
// import FluidInput from './fluidInput';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { loginSchema } from '../../validation/loginValidation';
// import { useForm } from 'react-hook-form';
// import { useDispatch,useSelector } from 'react-redux';
// import { login } from '../../store/user';
// import { getUser } from '../../store/user';
// export default function Login() {
//     const { register, handleSubmit, formState } = useForm({
//         resolver: yupResolver(loginSchema)
//     })
//     const dispatch = useDispatch()
//     const submit = (data) => {
//         console.log(data)
//         dispatch(login(data.userName, data.password))
//         console.log('sumbited', 'this and', data)
//     }
//     const user = useSelector((state)=> getUser(state))
//     const handler = { register, formState }
//     return (
//         <div className='login'>
//             <img class="wave" src={wave} />
//             <div class="container">
//                 <div class="img">
//                     <img src={bg} />
//                 </div>
//                 <div class="login-content">
//                     <form onSubmit={handleSubmit(submit)}         >
//                         <img src={avater} />
//                         <h2 class="title">Welcome</h2>
//                         {/* <p className='error'>{user?.error[0]}</p> */}
//                         <FluidInput label={"Username"} handler={handler} type={"text"} />
//                         <FluidInput label={"Password"} handler={handler} type={"password"} />
//                         <button class="btn" value="Login" > Login</button>
//                     </form>
//                 </div>
//             </div>
//         </div>

//     )
// }
