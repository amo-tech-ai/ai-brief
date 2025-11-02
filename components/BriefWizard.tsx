
import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import { ProfileData } from '../types';

interface BriefWizardProps {
  onProfileSubmit: (data: ProfileData) => void;
}

const BriefWizard: React.FC<BriefWizardProps> = ({ onProfileSubmit }) => {
  const [formData, setFormData] = useState<ProfileData>({
    name: 'Sarah Klein',
    company: 'AMO AI Digital Agency',
    website: 'www.amoai.co',
    email: 'hello@amoai.co',
    phone: '+1 415 555 0198',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onProfileSubmit(formData);
  };

  return (
    <Card title="Contact Information">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Create Your Profile Slide</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="e.g., Sarah Klein" required />
            </div>
            <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input id="company" name="company" type="text" value={formData.company} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="e.g., AMO AI Digital Agency" required />
            </div>
        </div>

        <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Website</label>
            <input id="website" name="website" type="text" value={formData.website} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="e.g., www.amoai.co" required />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="e.g., hello@amoai.co" required />
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="e.g., +1 415 555 0198" required />
            </div>
        </div>

        <div className="text-center pt-4">
          <Button type="submit">
            Generate Slide
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default BriefWizard;
