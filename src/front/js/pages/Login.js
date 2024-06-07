import React from 'react'

const Login = () => {


  return (
    <React.Fragment>
      <div>login</div>
      <form>
        <div className="container mt-5 p-5 border border border-dark-subtle" style={{ maxWidth: '550px', maxHeight: '270px' }}>
          <div className="mb-3 form-box">
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
            <button type="submit" className="btn btn-dark mt-3 container-fluid">Login</button>
          </div>
        </div>
      </form>
    </React.Fragment>
  )
}

export default Login