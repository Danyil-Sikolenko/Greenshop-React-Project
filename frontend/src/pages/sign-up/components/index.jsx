import { Link, useNavigate } from "react-router";
import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';

import { Input, Button, } from "antd";
import styles from "./styles-signup/signup.module.css"
import { signUp } from "../../../store/thunk/authThunk";

function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error } = useSelector(state => state.auth)

    const initialValues = {
        name: '',
        email: '',
        password: ''
    }

    const handleSubmit = async (value, { setSubmitting }) => {
        const result = await dispatch(signUp(value))
        if (result.meta.requestStatus === 'fulfilled') {
            navigate('/login', { replace: true })
        }
        setSubmitting(false);
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Enter your email!'),
        email: Yup.string().email('Invalid email').required('Enter your email!'),
        password: Yup.string().min(6, 'Minimum 6 characters').required('Enter the password!')
    });

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <h2 style={{ marginBottom: "30px", fontSize: "25px", fontWeight:"800" }}>Sign-<span style={{ color: "#46a358" }}>Up</span></h2>
                    <p>Enter your name email and password to register.</p>
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
                            <Form >
                                <div className={styles.container_form}>
                                    <ErrorMessage name="name" component="div" className={styles.error_message} />
                                    <Input
                                        name="name"
                                        placeholder="Enter your username "
                                        className={styles.form_email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
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
                                    Enter to register
                                </Button>
                            </Form>
                        )}
                    </Formik>

                    <Link to="/login" className={styles.link}>
                        Already have an account?
                    </Link>
                </div>
            </div>
        </>
    )
}
export default SignUp