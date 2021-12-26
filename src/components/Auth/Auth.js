import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import classes from './Auth.module.css'


const Auth = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                    "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                  )
                .required('Required'),
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return (
        <form className={classes.Form} onSubmit={formik.handleSubmit}>
            <label className={classes.Label}>
                EMAIL
                <input
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email
                ? (<div className={classes.Error}>{formik.errors.email}</div>)
                : null}
            </label>
            <label className={classes.Label}>
                PASSWORD
                <input
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password
                ? (<div className={classes.Error}>{formik.errors.password}</div>)
                : null}
            </label>
            <button className={classes.Button} type="submit">Login</button>
        </form>
    )
}

export default Auth
