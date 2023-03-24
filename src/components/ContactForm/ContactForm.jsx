import { MdAddCircleOutline } from 'react-icons/md';
import { HiOutlinePhoneMissedCall } from 'react-icons/hi';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import './contact-form.scss'
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { nanoid } from 'nanoid';
import { getContacts } from 'redux/selectors';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validateSchema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string().matches(phoneRegExp).required(),
})



const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleFormSubmit = (values, actions) => {
    const { name, number } = values;
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
  
    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      })
    );
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

export default ContactForm;
