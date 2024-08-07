import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Camera } from "lucide-react"

const Index = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    idPassport: '',
    email: '',
    twoFACode: '',
    faceImage: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData(prevState => ({
      ...prevState,
      faceImage: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      username: '',
      name: '',
      idPassport: '',
      email: '',
      twoFACode: '',
      faceImage: null
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="idPassport">ID or Passport Number</Label>
            <Input
              id="idPassport"
              name="idPassport"
              value={formData.idPassport}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="twoFACode">2FA Authenticator Code</Label>
            <Input
              id="twoFACode"
              name="twoFACode"
              value={formData.twoFACode}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="faceImage">Facial Recognition</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="faceImage"
                name="faceImage"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                required
                className="hidden"
              />
              <Button
                type="button"
                onClick={() => document.getElementById('faceImage').click()}
                className="w-full"
              >
                <Camera className="mr-2 h-4 w-4" /> Upload Face Image
              </Button>
            </div>
            {formData.faceImage && (
              <p className="mt-2 text-sm text-green-600">Image uploaded successfully</p>
            )}
          </div>
          <Button type="submit" className="w-full">Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default Index;
