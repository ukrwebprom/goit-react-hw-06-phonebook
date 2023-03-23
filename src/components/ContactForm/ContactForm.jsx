import { MdAddCircleOutline } from 'react-icons/md';
import { HiOutlinePhoneMissedCall } from 'react-icons/hi';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import PropTypes from "prop-types";
import './contact-form.scss'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validateSchema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string().matches(phoneRegExp).required(),
})
const ContactForm = ({onSubmit}) => {

  const handleFormSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  }

    

    return (
      <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleFormSubmit}
      validationSchema={validateSchema}
      >
      <Form className="form" >
      <div>
      <Field className="form-input"
            type="text"
            name="name"
            placeholder = "Name"
          />
          <ErrorMessage name="name"  render={msg => <div className="form-error">{msg}</div>}/>
      </div>
      <div>
      <Field className="form-input"
            type="tel"
            name="number"
            placeholder = "Phone Number"
          />
          <ErrorMessage name="number" render={msg => <div className="form-error"><HiOutlinePhoneMissedCall /> Wrong phone number</div>} />
      </div>
      <button type="submit" className="btn"><MdAddCircleOutline />Add contact</button>
      </Form>
      </Formik>
    );

}

ContactForm.propTypes = {
  onSubmit:PropTypes.func.isRequired
}

export default ContactForm;
