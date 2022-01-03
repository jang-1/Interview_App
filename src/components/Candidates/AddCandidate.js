import { useDispatch, useSelector } from 'react-redux'
import { candidatesActions } from '../../store';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import classes from './AddCandidate.module.css'


const AddCandidate = () => {
    const candidates = useSelector(state => state.candidates.candidates);
 
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            primarySkill: '',
            moreSkills: "ReactJS, NodeJS, AngularJS, Python, SQL, VueJS, C, C++, C#, Java, jQuery",
            dateOfBirth: '01.01.2022',
            hobby: '',
            education: '',
            projects: '',
            phone: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required('Required'),
            lastName: Yup.string()
                .required('Required'),
            primarySkill: Yup.string()
                .required('Required'),
            moreSkills: Yup.string()
                .required('Required'),
            dateOfBirth: Yup.string()
                .required('Required'),
            hobby: Yup.string()
                .required('Required'),   
            education: Yup.string()
                .required('Required'),
            projects: Yup.string()
                .required('Required'),
            phone: Yup.number()
                .min(9, "Phone Number must contain 9 numbers")
                .required('Required'), 
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
        }),
        onSubmit: (values) => {
            const id = {
                id:candidates.length + 1,
            }
            const newCandidate = Object.assign(values,id);
            const moreskills = values.moreSkills.trim().split(",")
            values.moreSkills = moreskills

            
            dispatch(candidatesActions.add(newCandidate))
            alert("You add new candidate")
        },
      });

    return (
        <form className={classes.Form} onSubmit={formik.handleSubmit}>
            <label className={classes.Label}>
                FirstName
                <input
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName
                ? (<div className={classes.Error}>{formik.errors.firstName}</div>)
                : null}
            </label>
            <label className={classes.Label}>
                Last Name
                <input
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName
                ? (<div className={classes.Error}>{formik.errors.lastName}</div>)
                : null}
            </label>

            <label className={classes.Label}>
                Primary Skill
                <input
                    name="primarySkill"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.primarySkill}
                />
                {formik.touched.primarySkill && formik.errors.primarySkill
                ? (<div className={classes.Error}>{formik.errors.primarySkill}</div>)
                : null}
            </label>
            
            <label className={classes.Label}>
                More skills
                <input
                    name="moreSkills"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.moreSkills}
                />
                {formik.touched.moreSkills && formik.errors.moreSkills
                ? (<div className={classes.Error}>{formik.errors.moreSkills}</div>)
                : null}
            </label>
            
            <label className={classes.Label}>
                Date of Birth
                <input
                    name="dateOfBirth"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.dateOfBirth}
                />
                {formik.touched.dateOfBirth && formik.errors.dateOfBirth
                ? (<div className={classes.Error}>{formik.errors.dateOfBirth}</div>)
                : null}
            </label>

            <label className={classes.Label}>
                Hobby
                <input
                    name="hobby"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.hobby}
                />
                {formik.touched.hobby && formik.errors.hobby
                ? (<div className={classes.Error}>{formik.errors.hobby}</div>)
                : null}
            </label>

            <label className={classes.Label}>
                Education
                <input
                    name="education"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.education}
                />
                {formik.touched.education && formik.errors.education
                ? (<div className={classes.Error}>{formik.errors.education}</div>)
                : null}
            </label>

            <label className={classes.Label}>
                Projects
                <input
                    name="projects"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.projects}
                />
                {formik.touched.projects && formik.errors.projects
                ? (<div className={classes.Error}>{formik.errors.projects}</div>)
                : null}
            </label>

            <label className={classes.Label}>
                Phone
                <input
                    name="phone"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone
                ? (<div className={classes.Error}>{formik.errors.phone}</div>)
                : null}
            </label>

            <label className={classes.Label}>
                Email
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

            <button className={classes.Button} type="submit">Send</button>
        </form>
    )
}

export default AddCandidate
