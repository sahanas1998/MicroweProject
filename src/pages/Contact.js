import React, { useState } from 'react';

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const formData = new FormData(form);
      const formDataObj = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });
      console.log(formDataObj);
    }
    setValidated(true);
  };

  return (
    <div className='m-4'>
      <form className={`mx-3 ${validated ? 'was-validated' : 'needs-validation'}`} noValidate onSubmit={handleSubmit}>
        <div className='container'>
          <div className='row'>
            <div className="col-md-6 mb-3">
              <label htmlFor="fname" className="form-label">First Name</label>
              <input type="text" className="form-control" id="fname" required name="fname" />
              <div className="invalid-feedback">Please enter a first name </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="lname" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lname" name='lname'required/>
              <div className="invalid-feedback">Please enter a last name </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" name='email' required />
              <div className="invalid-feedback">Please enter the email address in correct form </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="number" className="form-control" id="phone" name='phone' required />
              <div className="invalid-feedback">Please enter the phone number </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='col'>
            <div className="mb-3">
              <label htmlFor="option" className="form-label">Select the option</label>
              <select className="form-control" required name="option">
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
              </select>
              <div className="invalid-feedback">Please select the option </div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea type="message" className="form-control" id="message" name='message'required></textarea>
              <div className="invalid-feedback">Please type message </div>
            </div>
            <div className="d-grid mb-3">
              <button className="btn btn-dark" type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
