import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios  from 'axios';
import { SubmitKey } from "../utils/validation-utils";


const Login = () => {
    const [loginState, setLoginState] = useState("");
    const [data, setData] = useState({
        username: "",
        password: ""
    })
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    const submit = async() => {
        try {
            //01 產生token
            const res = await axios.post(`/v2/admin/signin`, data);
            const { token, expired } = res.data;

            //02 存入token至cookie
            document.cookie = `perfectToken = ${token}; expires = ${new Date(expired)}`;

            //03 成功登入後重新導向商品頁面
            res?.data?.success && navigate("/admin/products");
        }catch(err) {
            console.log(err);
            setLoginState(err.response.data);
        }
    }

    const enterKey = SubmitKey(submit);

    return (
		<div className='container py-5'>
			<h1 className='text-center mb-5'>Backend Admin</h1>
			<div className='row justify-content-center mb-5'>
				<div className='col-md-6 d-flex flex-column gap-4'>
					<div>
						{loginState?.message && (
							<div className='alert alert-danger text-center' role='alert'>
								{loginState?.message}
							</div>
						)}
					</div>
					<div>
						<label htmlFor='email'>Email address</label>
						<input
							type='email'
							className='form-control'
							id='email'
							name='username'
							onChange={handleChange}
						/>
					</div>
					<div className='form-group position-relative'>
						<label htmlFor='password'>Password</label>
						<input
							type={showPassword ? "text" : "password"}
							className='form-control'
							id='password'
							name='password'
							onChange={handleChange}
							onKeyDown={enterKey}
						/>
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

					<button type='button' className='btn btn-outline-primary align-self-center mt-3' onClick={submit}>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}

export default Login;


