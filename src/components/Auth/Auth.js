import React from 'react'
import classes from './Auth.module.css'

const Auth = () => {
    return (
        <form className={classes.Form}>
            <label className={classes.Label}>
                EMAIL
                <input/>
            </label>
            <label className={classes.Label}>
                PASSWORD
                <input/>
            </label>
            <button className={classes.Button} type="submit">Login</button>
        </form>
    )
}

export default Auth
