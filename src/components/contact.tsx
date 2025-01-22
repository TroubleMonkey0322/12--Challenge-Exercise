import React, {useState} from 'react';


const Contact = () => {   

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  function EmailInput() {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
  
    const validateEmail = (email) => {
           const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  setErrors({
    ...errors,
    [name]: '',
  });
};

const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors({
        ...errors,
        [name]: 'This field is required',
      });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"  
            onBlur={handleBlur}
            required
            />
      {!isValid && <p style={{ color: 'red' }}>Please enter a valid email address.</p>}

          
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );

}

        
 
export default Contact