import React from 'react'
import classes from './Auth.module.css'

const Auth = () => {
    return (
        <form className={classes.Form}>
            <label className={classes.Label}>
                Email:
                <input/>
            </label>
            <label className={classes.Label}>
                Password:
                <input/>
            </label>
        </form>
    )
}

export default Auth
