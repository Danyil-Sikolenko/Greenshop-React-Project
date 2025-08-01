import { Link, useNavigate, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from "../../../store/thunk/authThunk";
import { clearError } from "../../../store/slice/authSlice";

import { Input, Button, Spin, Result } from "antd";

import styles from "./styles-login/login.module.css"

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const { loading, error } = useSelector(state => state.auth);


    const from = location.state?.from?.pathname || '/';

    const initialValues = {
        email: '',
        password: ''
    }

    const handleSubmit = async (value, { setSubmitting }) => {
        const result = await dispatch(login(value))
        if (result.meta.requestStatus === 'fulfilled') {
            navigate(from, { replace: true })
        }
        setSubmitting(false);
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Enter your email!'),
        password: Yup.string().min(6, 'Minimum 6 characters').required('Enter the password!')
    });

   return (
    <>

    {error ? (
      <Result
        className={styles.result_error}
        status="error"
        title="Login failed"
        subTitle={error}
        extra={
          <Button
            type="primary"
            onClick={() => {
              dispatch(clearError());
            }}
          >
            Try again
          </Button>
        }
      />
    ) : (
      <>
      <div className={styles.wrapper}>
   <div className={styles.container}>
    <div style={{ marginBottom: "40px" }}>
      <span className={styles.title_left}>Login</span>
      <span className={styles.title_right}>Register</span>
    </div>
        <p>Enter your email and password to register.</p>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleBlur,
            values,
            isSubmitting,
          }) => (
            <Form>
              <div>
                <ErrorMessage name="email" component="div" className={styles.error_message} />
                <Input
                  name="email"
                  placeholder="Enter your email address"
                  className={styles.form_email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />

                <ErrorMessage name="password" component="div" className={styles.error_message} />
                <Input.Password
                  name="password"
                  placeholder="Enter your password"
                  className={styles.form_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>

              <Button
                className={styles.btn_submit}
                type="primary"
                htmlType="submit"
                disabled={isSubmitting || loading}
              >
                {loading ? <Spin size="small" /> : "Enter to login"}
              </Button>
            </Form>
          )}
        </Formik>

        <Link to="/signup" className={styles.link}>
          Already registered? — Register
        </Link>
          </div>
          </div>
      </>
    )}
    </>
  
);
}
export default Login