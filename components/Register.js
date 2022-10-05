import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  return (
    <section id="login-section">
      <div className="login-container">
        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )} */}
        <div id="login-heading">
          <Link to="/">
            <span id="login-back">&#60;</span>
          </Link>
          <h1>Welcome Back</h1>
          <p id="login-note">
            Yay! You're back! Thanks for shopping with us. We have excited deals
            and promotions going on, grab your pick now!
          </p>
          <Link id="login-logo-ctn" to="/">
            <h4>MuskNet</h4>
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <h3 className="login-text">LOG IN</h3>
          {/* <br className="login-divider"></br> */}
          <div className="login-form">
            <div className="login-field">
              <label className="login-label-email">Email</label>
              <input
                className="login-email"
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p className="login-errors">{formErrors.email}</p>
            <div className="login-field">
              <label className="login-label-password">Password</label>
              <input
                className="login-password"
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p className="login-errors">{formErrors.password}</p>
            <Link className="login-btn-ctn" to="/">
              <button>LOG IN</button>
            </Link>
          </div>
        </form>
        <p className="login-register-link">
          Not registered yet? <Link to="/">Create Account</Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
