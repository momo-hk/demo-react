import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";

import {
    withStyles,
    Paper,
    Typography,
    FormGroup,
    Button,
} from 'material-ui'
import Send from '@material-ui/icons/Send';
import Clear from '@material-ui/icons/Clear';
import styles from './index-style'

import {
    renderInput,
    renderSelect,
    submit,
    normalizeNumber,
    validateChineseChars,
    validateEnglishChars
} from './export.js'

import {getStudentData} from 'constants/student-util'



class StudentSearch extends Component {

    static defaultData = {
        schoolLevel: getStudentData('schoolLevel'),
        schoolSession: getStudentData('schoolSession'),
        classLevel: getStudentData('classLevel'),
        className: getStudentData('className')
    }

    render() {
        const {handleSubmit, pristine, reset, submitting, dispatch} = this.props;
        const {
            formContainer,
            formHeader,
            formContent,
            formText,
            formButton
        } = this.props.classes;

        const searchHandler = submit(dispatch);

        return (
            <div>
                <Paper elevation={6} className={formContainer}>
                    <Typography
                        className={formHeader}
                        variant="headline"
                        component="h3"
                        color="primary">
                        Select/Fill out the criteria to search for student information
                    </Typography>

                    <form noValidate autoComplete="off">
                        <FormGroup className={formContent} row>
                            <Field
                                name="studentEnglishName"
                                component={renderInput}
                                label="Student English Name"
                                validate={validateEnglishChars}
                                classes={formText}/>
                            <Field
                                name="studentChineseName"
                                component={renderInput}
                                label="Student Chinese Name"
                                validate={validateChineseChars}
                                classes={formText}/>
                        </FormGroup>
                        <FormGroup className={formContent} row>
                            <Field
                                name="schoolLevel"
                                component={renderSelect}
                                defaultValue="School Level"
                                optionList={StudentSearch.defaultData.schoolLevel}
                                classes={formText}/>
                            <Field
                                name="SchoolSession"
                                component={renderSelect}
                                defaultValue="School Session"
                                optionList={StudentSearch.defaultData.schoolSession}
                                classes={formText}/>
                            <Field
                                name="ClassLevel"
                                component={renderSelect}
                                defaultValue="Class Level"
                                optionList={StudentSearch.defaultData.classLevel}
                                classes={formText}/>
                            <Field
                                name="ClassName"
                                component={renderSelect}
                                defaultValue="Class Name"
                                optionList={StudentSearch.defaultData.className}
                                classes={formText}/>
                        </FormGroup>
                        <FormGroup className={formContent} row>
                            <Field
                                name="registrationNo"
                                type="text"
                                component={renderInput}
                                label="Registration Number"
                                normalize={normalizeNumber}
                                classes={formText}/>
                            <Field
                                name="strn"
                                type="text"
                                component={renderInput}
                                label="STRN"
                                classes={formText}/>
                        </FormGroup>
                        <FormGroup className={formContent} row>
                            <Button
                                className={formButton}
                                variant="raised"
                                color="primary"
                                disabled={submitting}
                                onClick={handleSubmit(searchHandler)}>
                                Send
                                <Send/>
                            </Button>
                            <Button
                                className={formButton}
                                variant="raised"
                                color="secondary"
                                disabled={pristine || submitting}
                                onClick={reset}>
                                Reset
                                <Clear/>
                            </Button>
                        </FormGroup>
                    </form>
                </Paper>
            </div>
        )
    }
}

export default reduxForm({
    form: 'studentSearch' // a unique identifier for this form
})(withStyles(styles)(StudentSearch));
