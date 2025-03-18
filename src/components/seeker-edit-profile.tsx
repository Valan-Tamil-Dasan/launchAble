"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Toaster  } from "./ui/sonner";
import {toast} from "sonner"
import { RadioGroup } from "@/components/ui/radio-group";
import { User2 } from "lucide-react";
import { Form } from "react-hook-form";

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
  //const [formData, setFormData] = useState<ProfileFormData>({
  //  name: "Meadow Richardson",
  //  email: "",
  //  bio: "",
  //  language: "en",
  //  currentPassword: "",
  //  newPassword: "",
  //  confirmPassword: "",
  //});
  //
  //const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //  const { id, value } = e.target;
  //  setFormData((prev) => ({ ...prev, [id]: value }));
  //};


  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    location: "New York, USA",
    desiredJob: "Frontend Developer",
    skills: ["React", "TypeScript", "Firebase"],
    experience: "3 years at Google",
    education: "B.Sc Computer Science",
    bio: "Passionate about web development and accessibility.",
    disabilityType: "None",
    assistiveTech: "None",
    accommodations: "Flexible Hours",
  });

  const [newSkill, setNewSkill] = useState("");
const handleSave = () => {
  console.log("Saving profile...");
  toast.success("Updated Profile");
};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSkillAdd = () => {
    if (newSkill.trim() !== "") {
      setProfile({ ...profile, skills: [...profile.skills, newSkill.trim()] });
      setNewSkill("");
    }
  };

  const handleSkillRemove = (skillToRemove: string) => {
    setProfile({ ...profile, skills: profile.skills.filter((skill) => skill !== skillToRemove) });
  };
  return (
    <form method="post"  className="px-4 py-4 w-300 space-y-6 sm:px-6">
      <header className="space-y-2">
        <div className="flex justify-center items-center space-x-3">
          <User2 size={64} className="mr-2" />
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">{profile.name}</h1>
          </div>
        </div>
      </header>
    <div className="min-w-3xl mx-auto mt-10 space-y-8">
      <Card>
        <CardContent className="space-y-6 p-6">
          <h2 className="text-xl font-semibold">Personal Details</h2>
          <div className="space-y-2">
            <Label>Name</Label>
            <Input name="name" value={profile.name} onChange={handleChange} disabled={!isEditing} />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input name="email" value={profile.email} onChange={handleChange} disabled={!isEditing} />
          </div>
          <div className="space-y-2">
            <Label>Phone</Label>
            <Input name="phone" value={profile.phone} onChange={handleChange} disabled={!isEditing} />
          </div>
          <div className="space-y-2">
            <Label>Location</Label>
            <Input name="location" value={profile.location} onChange={handleChange} disabled={!isEditing} />
          </div>
        </CardContent>
      </Card>

      {/* Job Details */}
      <Card>
        <CardContent className="space-y-6 p-6">
          <h2 className="text-xl font-semibold">Job Details</h2>
          <div className="space-y-2">
            <Label>Desired Job</Label>
            <Input name="desiredJob" value={profile.desiredJob} onChange={handleChange} disabled={!isEditing} />
          </div>

          {/* Skills List */}
          <div className="space-y-2">
            <Label>Skills</Label>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="bg-black-100 text-slate-800 dark:bg-black-700 dark:text-black-300 px-2 py-1" >
                  {skill}
                  {isEditing && (
                    <button className="ml-2 text-black-500" onClick={() => handleSkillRemove(skill)}>
                      ✕
                    </button>
                  )}
                </Badge>
              ))}
            </div>
            {isEditing && (
              <div className="flex gap-2">
                <Input value={newSkill} onChange={(e) => setNewSkill(e.target.value)} placeholder="Add Skill" />
                <Button onClick={handleSkillAdd}>Add</Button>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label>Work Experience</Label>
            <Input name="experience" value={profile.experience} onChange={handleChange} disabled={!isEditing} />
          </div>
          <div className="space-y-2">
            <Label>Education</Label>
            <Input name="education" value={profile.education} onChange={handleChange} disabled={!isEditing} />
          </div>
          <div className="space-y-2">
            <Label>Tell us about yourself</Label>
            <Textarea name="bio" value={profile.bio} onChange={handleChange} disabled={!isEditing} />
          </div>
        </CardContent>
      </Card>

      {/* Accessibility & Disability Section */}
      <Card>
        <CardContent className="space-y-6 p-6">
          <h2 className="text-xl font-semibold">Accessibility & Disability Support</h2>
          <div className="space-y-2">
            <Label>Type of Disability</Label>
            <Select disabled={!isEditing}>
              <SelectTrigger>
                <SelectValue placeholder={profile.disabilityType} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="None">None</SelectItem>
                <SelectItem value="Visual Impairment">Visual Impairment</SelectItem>
                <SelectItem value="Hearing Impairment">Hearing Impairment</SelectItem>
                <SelectItem value="Mobility Disability">Mobility Disability</SelectItem>
                <SelectItem value="Cognitive Disability">Cognitive Disability</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Assistive Technology Used</Label>
            <Input name="assistiveTech" value={profile.assistiveTech} onChange={handleChange} disabled={!isEditing} />
          </div>
          <div className="space-y-2">
            <Label>Workplace Accommodations Required</Label>
            <Input name="accommodations" value={profile.accommodations} onChange={handleChange} disabled={!isEditing} />
          </div>
        </CardContent>
      </Card>
    </div>


 
<Button
  type="button"
  onClick={() => {
    if (isEditing) {
      handleSave(); // Call save logic when "Save Changes" is clicked
    }
    setIsEditing(!isEditing);
  }}
>
  {isEditing ? "Save Changes" : "Edit Profile"}
</Button>

    </form>
  );
}
