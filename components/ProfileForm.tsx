import React, { useState, FormEvent } from 'react';
import { ProfileFormData } from '../types';
import Button from './Button';
import { CompanyIcon, EmailIcon, LoadingSpinner, PhoneIcon, TitleIcon, UserIcon, WebsiteIcon } from './icons';

interface ProfileFormProps {
  onGenerate: (formData: ProfileFormData) => void;
  isLoading: boolean;
  error: string | null;
}

const InputField: React.FC<{
  id: keyof ProfileFormData;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
}> = ({ id, label, type, placeholder, value, onChange, icon }) => (
  <div>
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <div className="relative rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span className="text-gray-400">{icon}</span>
      </div>
      <input
        type={type}
        name={id}
        id={id}
        className="block w-full rounded-md border-gray-300 pl-10 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  </div>
);

const ProfileForm: React.FC<ProfileFormProps> = ({ onGenerate, isLoading, error }) => {
  const [formData, setFormData] = useState<ProfileFormData>({
    name: '',
    title: '',
    company: '',
    email: '',
    phone: '',
    website: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden w-full p-8 space-y-6 relative">
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-10 rounded-2xl transition-opacity duration-300">
          <LoadingSpinner className="h-10 w-10 text-blue-600" />
          <p className="mt-4 text-lg font-semibold text-gray-700">Generating Slide...</p>
          <p className="text-sm text-gray-500">This may take a moment.</p>
        </div>
      )}
      <h2 className="text-2xl font-bold text-center text-gray-800">Enter Your Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField id="name" label="Full Name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} icon={<UserIcon />} />
          <InputField id="title" label="Title" type="text" placeholder="Your Title" value={formData.title} onChange={handleChange} icon={<TitleIcon />} />
        </div>
        <InputField id="company" label="Company" type="text" placeholder="Your Company" value={formData.company} onChange={handleChange} icon={<CompanyIcon />} />
        <InputField id="email" label="Email Address" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} icon={<EmailIcon />} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField id="phone" label="Phone Number" type="tel" placeholder="(123) 456-7890" value={formData.phone} onChange={handleChange} icon={<PhoneIcon />} />
          <InputField id="website" label="Website" type="url" placeholder="www.example.com" value={formData.website} onChange={handleChange} icon={<WebsiteIcon />} />
        </div>
        
        {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <LoadingSpinner />
              <span className="ml-2">Generating...</span>
            </>
          ) : 'Generate Slide'}
        </Button>
      </form>
    </div>
  );
};

export default ProfileForm;