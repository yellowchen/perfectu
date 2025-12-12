import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { AuthContext } from '../../../Common/context/AuthContext';


const Login = () => {
    const {isAuthenticated, loginState, logIn} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onTouched",
	});

    const onSubmit = async (data) => {
        await logIn(data);
    };

    useEffect(() => {
        if(isAuthenticated) {
            navigate("/admin/products");
        }
    }, [isAuthenticated, navigate])

    return (
		<div className='container py-5'>
			<h1 className='text-center mb-5'>Backend Admin</h1>
			<div className='row justify-content-center mb-5'>
				<form
					className='col-md-6 d-flex flex-column gap-4'
					onSubmit={handleSubmit(onSubmit)}
				>
					<div>
						{loginState && (
							<div
								className='alert alert-danger text-center'
								role='alert'
							>
								{loginState?.message}
							</div>
						)}
					</div>
					<div className='mb-3'>
						<label
							className='w-100 form-label mb-0'
							htmlFor='email'
						>
							Email Address
							<input
								type='email'
								id='username'
								className={`form-control ${errors.username && "is-invalid"}`}
								{...register("username", {
									required: "Email 為必填",
									pattern: {
										value: /^\S+@\S+$/i,
										message: "Email 格式不正確",
									},
								})}
							/>
							{errors.username && <div className='invalid-feedback'>{errors.username?.message}</div>}
						</label>
					</div>

					<div className='form-group position-relative'>
						<label htmlFor='password'>Password</label>
						<input
							type={showPassword ? "text" : "password"}
							id='password'
							className={`form-control ${errors.password && "is-invalid"}`}
							{...register("password", {
								required: "密碼為必填",
								minLength: {
									value: 5,
									message: "密碼長度過短",
								},
							})}
						/>
						{errors.password && <div className='invalid-feedback'>{errors.password?.message}</div>}
						<div className='eyeToggle position-absolute'>
							{showPassword ? (
								<i
									className='bi bi-eye-fill'
									onClick={() => {
										setShowPassword((prevState) => !prevState);
									}}
								></i>
							) : (
								<i
									className='bi bi-eye-slash-fill'
									onClick={() => {
										setShowPassword((prevState) => !prevState);
									}}
								></i>
							)}
						</div>
					</div>

					<button
						type='submit'
						className='btn btn-outline-primary align-self-center mt-3'
						onClick={onSubmit}
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;


