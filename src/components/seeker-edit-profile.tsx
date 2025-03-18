"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup } from "@/components/ui/radio-group";
import { User2 } from "lucide-react";

interface ProfileFormData {
  name: string;
  email: string;
  bio: string;
  language: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function SeekerEditProfile() {
  const [formData, setFormData] = useState<ProfileFormData>({
    name: "Meadow Richardson",
    email: "",
    bio: "",
    language: "en",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleLanguageChange = (value: string) => {
    setFormData((prev) => ({ ...prev, language: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 w-300 space-y-6 sm:px-6">
      <header className="space-y-2">
        <div className="flex items-center space-x-3">
          <User2 size={64} className="mr-2" />
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">{formData.name}</h1>
            <Button type="button">Change photo</Button>
          </div>
        </div>
      </header>
      <div className="space-y-8">
        <Card>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={formData.name} onChange={handleChange} placeholder="E.g. Jane Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={formData.email} onChange={handleChange} placeholder="E.g. jane@example.com" />
            </div>
            <div className="space-y-2">
              <Label>Tell us about yourself</Label>
              <Textarea id="bio" value={formData.bio} onChange={handleChange} placeholder="Enter your bio" style={{ minHeight: "100px" }} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div>Change Password</div>
            <div>For your security, please do not share your password with others.</div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input type="password" id="currentPassword" value={formData.currentPassword} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input type="password" id="newPassword" value={formData.newPassword} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="pt-6">
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}
