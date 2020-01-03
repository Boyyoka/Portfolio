import React, { Component } from 'react';
import classnames from 'classnames';

import { sendMail } from '../../../services/api'

import { Loader } from '../../Loader'

import STRINGS from '../../../localization';


const validEmailRegex =
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

export default class ContactForm extends Component {

  state = {
    name: '',
    from: '',
    subject: '',
    message: '',
    isSubmitting: false,
    contactSuccess: false,
    contactFail: false,
    errors: {
      name: '',
      from: '',
      subject: '',
      message: ''
    }
  }

  handleContactNameChange = (name) => {
    this.setState({ name })
  }

  handleContactEmailChange = (from) => {
    this.setState({ from })
  }

  handleSubjectChange = (subject) => {
    this.setState({ subject })
  }

  handleMessageChange = (message) => {
    this.setState({ message })
  }

  formIsValid = () => {
    const { name, from, subject, message } = this.state;
    let { errors } = this.state;
    let valid = true;

    //email validation
    errors.from = from.length > 0 
    && !validEmailRegex.test(from) ? STRINGS.ERRORS_INVALID_EMAIL :
    from.length === 0 ? STRINGS.ERRORS_REQUIRED : ''

    //required
    errors.name = name.length === 0 ? STRINGS.ERRORS_REQUIRED : ''

    //custom length
    errors.subject = subject.length > 0 
    && subject.length < 5 ? STRINGS.ERRORS_SUBJECT_MIN_LENGTH :
    subject.length === 0 ? STRINGS.ERRORS_REQUIRED : ''

    errors.message = message.length > 0 
      && message.length < 25 ? STRINGS.ERRORS_MESSAGE_MIN_LENGTH :
      message.length === 0 ?  STRINGS.ERRORS_REQUIRED : ''

    Object.values(errors).some(
      val => val.length > 0 && (valid = false ));

    this.setState({ errors })

    return valid
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.formIsValid()) {
      return
    }

    const { name, from, subject, message } = this.state;

    const data = {
      name,
      from,
      subject,
      message
    }

    this.setState({
      isSubmitting: true,
      contactSuccess: false,
      contactFail: false
    })

    sendMail(data).then(() => {
      this.setState({
        contactSuccess: true,
        isSubmitting: false,
        name: '',
        from: '',
        subject: '',
        message: ''
      })
    })
      .catch(() => {
        this.setState({ isSubmitting: false })
      })
  }

  render() {
    const {
      name,
      from,
      subject,
      message,
      isSubmitting,
      contactSuccess,
      contactFail,
      errors
    } = this.state;

    return (
      <form action onSubmit={this.handleSubmit} id="contactForm" name="contactForm">
        <fieldset>
          <div style={{ position: 'relative' }}>
            <label htmlFor="contactName">{STRINGS.CONTACT_NAME} <span className="required">*</span></label>
            <input type="text" value={name} size={35} id="contactName" name="name" onChange={(e) => this.handleContactNameChange(e.target.value)} />
            <div className="errors">{errors.name}</div>
          </div>
          <div style={{ position: 'relative' }}>
            <label htmlFor="contactEmail">{STRINGS.CONTACT_EMAIL} <span className="required">*</span></label>
            <input type="text" value={from} size={35} id="contactEmail" name="from" onChange={(e) => this.handleContactEmailChange(e.target.value)} />
            <div className="errors">{errors.from}</div>
          </div>
          <div style={{ position: 'relative' }}>
            <label htmlFor="contactSubject">{STRINGS.CONTACT_SUBJECT}</label>
            <input type="text" value={subject} size={35} id="contactSubject" name="subject" onChange={(e) => this.handleSubjectChange(e.target.value)} />
            <div className="errors">{errors.subject}</div>
          </div>
          <div style={{ position: 'relative' }}>
            <label htmlFor="contactMessage">{STRINGS.CONTACT_MESSAGE} <span className="required">*</span></label>
            <textarea value={message} cols={50} rows={15} id="contactMessage" name="message" onChange={(e) => this.handleMessageChange(e.target.value)} />
            <div className="errors">{errors.message}</div>
          </div>
          <div style={{ display: 'flex' }}>
            <input type="submit" className="submit" value={STRINGS.CONTACT_SUBMIT} disabled={isSubmitting}/>
            {isSubmitting && <Loader />}
          </div>
        </fieldset>

        <div id="message-success" className={classnames({ 'show': contactSuccess })}>
          <i className="fa fa-check" />{STRINGS.CONTACT_MESSAGE_SUCCESS}<br />
        </div>
        <div id="message-warning" className={classnames({ 'show': contactFail })}>{STRINGS.CONTACT_MESSAGE_FAIL}</div>
      </form>
    );
  }
}