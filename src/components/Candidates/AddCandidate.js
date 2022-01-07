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
            moreSkills: [],
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
            moreSkills: Yup.array()
                .required('Required'),
            dateOfBirth: Yup.date()
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
                <select 
                    name="primarySkill"
                    id="primarySkill"
                    value={formik.values.primarySkill}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={classes.PrimarySkill}
                    >
                    <option value="">--Please choose an option--</option>   
                    <option value="ReactJS">React</option>
                    <option value="AgularJS">AgularJS</option>
                    <option value="VueJS">VueJs</option>
                    <option value="jQuery">jQuery</option>
                    <option value="NodeJS">NodeJS</option>
                    <option value="SQL">SQL</option>
                    <option value="C">C</option>
                    <option value="C++">C++</option>
                    <option value="C#">C#</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                </select>
                {formik.touched.primarySkill && formik.errors.primarySkill
                ? (<div className={classes.Error}>{formik.errors.primarySkill}</div>)
                : null}
            </label>
            
            <label className={classes.Label}>
                More skills
                <select 
                    name="moreSkills"
                    id="moreSkills"
                    value={formik.values.moreSkills}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    multiple="multiple"
                    className={classes.MoreSkills}
                    >
                    <option value="ReactJS">React</option>
                    <option value="AgularJS">AgularJS</option>
                    <option value="VueJS">VueJs</option>
                    <option value="jQuery">jQuery</option>
                    <option value="NodeJS">NodeJS</option>
                    <option value="SQL">SQL</option>
                    <option value="C">C</option>
                    <option value="C++">C++</option>
                    <option value="C#">C#</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                </select>
                {formik.touched.moreSkills && formik.errors.moreSkills
                ? (<div className={classes.Error}>{formik.errors.moreSkills}</div>)
                : null}
            </label>
            
            <label className={classes.Label}>
                Date of Birth
                <input type="date" id="start" name="dateOfBirth"
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
