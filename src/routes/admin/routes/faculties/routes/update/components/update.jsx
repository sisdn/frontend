import React, {PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import {reduxForm} from 'redux-form';
import { pushPath } from 'redux-simple-router';
import * as elements from '~/components/elements'

require('../../../../../../../styles/react-bootstrap-switch.css');
var Switch = require('react-bootstrap-switch');

import { createValidator } from '~/utils/validate';
import { updateFaculty } from '../../../store/actions';
import facultyValidator from '../../../validation';
import InputElement from '~/components/inputElement';

class Update extends Component {
  render(){
    const faculty = this.props.faculties.find(f => f.id === this.props.params.id)
    return (
      <div>
        <h3>تعديل الكلية</h3>
        <ReduxForm onSubmit={(e) => this.handleSubmit(e)} switchValue={faculty.isActive} initialValues={{...faculty}}/>
      </div>
    )
  }

  handleSubmit(faculty){
    const {dispatch} = this.props
    dispatch(updateFaculty(faculty))
    dispatch(pushPath('/admin/faculties'))
  }
}

class UpdateFacultyForm extends Component {

  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  }

  render(){
    const {
      fields: {id, isActive, title, titleTr, isNew},
      handleSubmit,
      resetForm,
      submitting
    } = this.props;

    return(
      <div>
        <form onSubmit={handleSubmit} className="form-horizontal">
          <InputElement field={id} isReadOnly={true} label='الإختصار'/>
          { this.props.isNew ? <input type="hidden" {...isNew}></input> : null}
          <InputElement field={title} placeholder="أدخل إسم الكلية" label="إسم الكلية"/>
          <InputElement field={titleTr} placeholder="أدخل إسم الكلية بالإنجليزية" label="الإسم بالإنجليزية"/>
          <div className="form-group ">
            <div className="col-md-12 col-md-offset-2">
              <Switch className="" offText="لا" {...isActive} state={this.props.switchValue} onText="نعم" labelText="نشطة" />
            </div>
        </div>
        <br/>
          <div className="form-group">
            <div className="col-md-12 col-md-offset-2">
            <elements.ResetButton disabled={submitting} onClick={resetForm} text="إسترجاع"/>
            <elements.SubmitButton disabled={submitting} onClick={handleSubmit} text="حفظ" style={{marginRight: 10}}/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const ReduxForm = reduxForm({
  form: 'updateFaculty',
  fields: ['id', 'isActive', 'title', 'titleTr', 'isNew'],
  validate: createValidator(facultyValidator)
}
)(UpdateFacultyForm);


module.exports = connect((state) => ({faculties: state.faculties}))(Update)
