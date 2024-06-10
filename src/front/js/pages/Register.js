import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    return (
        <React.Fragment>
            <form>
                <div className="container mt-5 p-4 border border border-dark-subtle" style={{ maxWidth: '550px', maxHeight: '280px' }}>
                    <div className="mb-3 form-box">
                        <div className="h4 text-center pb-3 m-0">Create Account</div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                                style={{ borderRadius: '10px', maxHeight: '55px' }} />
                            <label for="floatingInput" style={{ fontSize: '14px' }} className='fw-semibold'>Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                                style={{ borderRadius: '10px', maxHeight: '55px' }} />
                            <label for="floatingPassword" style={{ fontSize: '14px' }} className='fw-semibold'>Password</label>
                        </div>
                        <div className="buttons row gap-2 justify-content-center">
                            <button type="submit" className="btn btn-success mt-3 col-5">Save</button>
                            <button type="button" className="btn btn-primary mt-3 col-5" onClick={() => { navigate('/login') }}>Back to Login</button>
                        </div>
                    </div>
                </div>
            </form>
        </React.Fragment>
    )
}

export default Register