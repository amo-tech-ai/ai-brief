import React, { useState, FormEvent } from 'react';
import { BriefData } from '../../types';
import Button from '../Button';
import StepIndicator from '../StepIndicator';
import { ArrowLeftIcon } from '../icons';

interface ContactStepProps {
  onNext: (data: Partial<BriefData>) => void;
  onBack: () => void;
  data: Partial<BriefData>;
}

const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }> = ({ label, id, error, ...props }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input 
            id={id} 
            className={`block w-full rounded-md shadow transition-all duration-200 p-3 sm:text-sm focus:ring-2 focus:shadow-md ${
                error 
                ? 'border-red-500 text-red-900 placeholder-red-400 focus:border-red-500 focus:ring-red-500' 
                : 'border-gray-300 focus:border-orange-500 focus:ring-orange-500'
            }`}
            {...props} 
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
);

const ContactStep: React.FC<ContactStepProps> = ({ onNext, onBack, data }) => {
  const [formData, setFormData] = useState({
    companyName: data.companyName || '',
    websiteUrl: data.websiteUrl || '',
    email: data.email || '',
    phone: data.phone || '',
  });

  const [errors, setErrors] = useState({
      email: '',
      phone: '',
  });

  const validate = () => {
    const newErrors = { email: '', phone: ''};
    let isValid = true;
    
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
        isValid = false;
    }

    if (formData.phone && !/^[0-9+\-() ]+$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number.';
        isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onNext(formData);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-8">
      <div className="flex justify-center mb-8">
        <StepIndicator currentStepId="contact" />
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Tell Us About You</h2>
        <p className="text-gray-600 mt-2">Add your contact info so we can personalize your AI brief.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField id="companyName" name="companyName" label="Company / Brand Name" placeholder="e.g., AMO AI" value={formData.companyName} onChange={handleChange} required />
        <InputField id="websiteUrl" name="websiteUrl" label="Website URL" placeholder="https://example.com" value={formData.websiteUrl} onChange={handleChange} required />
        <InputField id="email" name="email" label="Email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} error={errors.email} required />
        <InputField id="phone" name="phone" label="WhatsApp / Phone (Optional)" placeholder="+1 (555) 123-4567" value={formData.phone} onChange={handleChange} error={errors.phone} />
        <div className="flex justify-between items-center pt-4">
          <Button type="button" variant="secondary" onClick={onBack}><ArrowLeftIcon className="mr-2"/> Back</Button>
          <Button type="submit">Next Step</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactStep;