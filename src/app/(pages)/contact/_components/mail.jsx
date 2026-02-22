import { sendMail } from '../../../../backend/SendMail'
import ContactForm from './ContactForm'

const ContactMail = () => {
  return <ContactForm sendMail={sendMail} />
}

export default ContactMail
