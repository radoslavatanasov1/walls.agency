import React, { useState } from 'react';

const ContactUs = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to a server or an email
    console.log(formData);
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Talk About Your Project!</h2>
        <p className="mb-8">We're excited to hear about your ideas. Let's start a conversation and see how we can help bring your vision to life.</p>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {step === 1 && (
            <div>
              <label className="block text-left text-xl">Hi there! What's your name?</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full mt-2"
                placeholder="Type your name here"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <button type="button" onClick={nextStep} className="btn btn-primary mt-4">Next</button>
            </div>
          )}
          
          {step === 2 && (
            <div>
              <label className="block text-left text-xl">Nice to meet you, {formData.name}! What's your email?</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full mt-2"
                placeholder="Type your email here"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="flex justify-between mt-4">
                <button type="button" onClick={prevStep} className="btn btn-secondary">Back</button>
                <button type="button" onClick={nextStep} className="btn btn-primary">Next</button>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div>
              <label className="block text-left text-xl">What type of project are you interested in?</label>
              <select
                name="projectType"
                className="select select-bordered w-full mt-2"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select a project type</option>
                <option value="Full Stack Development">Full Stack Development</option>
                <option value="Blockchain Development">Blockchain Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Consulting">Consulting</option>
                <option value="Other">Other</option>

              </select>
              <div className="flex justify-between mt-4">
                <button type="button" onClick={prevStep} className="btn btn-secondary">Back</button>
                <button type="button" onClick={nextStep} className="btn btn-primary">Next</button>
              </div>
            </div>
          )}
          
          {step === 4 && (
            <div>
              <label className="block text-left text-xl">Do you have a budget in mind?</label>
              <select
                name="budget"
                className="select select-bordered w-full mt-2"
                value={formData.budget}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select a budget range</option>
                <option value="Under $5,000">Under $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                <option value="Above $20,000">Above $20,000</option>
              </select>
              <div className="flex justify-between mt-4">
                <button type="button" onClick={prevStep} className="btn btn-secondary">Back</button>
                <button type="button" onClick={nextStep} className="btn btn-primary">Next</button>
              </div>
            </div>
          )}
          
          {step === 5 && (
            <div>
              <label className="block text-left text-xl">Finally, tell us a bit more about your project.</label>
              <textarea
                name="message"
                className="textarea textarea-bordered w-full mt-2"
                placeholder="Share some details..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <div className="flex justify-between mt-4">
                <button type="button" onClick={prevStep} className="btn btn-secondary">Back</button>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
