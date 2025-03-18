"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Calendar, FileText, MessageCircle } from "lucide-react";
import CoachCalendar from "./coach-calendar";

const applications = [
  {
    id: "1",
    name: "William Collins",
    subject: "Software Developer Position",
    preview: "Hello, I've applied for the software developer position. I have 3 years of experience with React and Node.js. I'd like to discuss how my skills...",
    time: "2 days ago",
    tags: ["Technical", "Remote"],
    disability: "Visual Impairment",
    unread: true
  },
  {
    id: "2",
    name: "Sarah Johnson",
    subject: "Marketing Specialist Application",
    preview: "Thank you for considering my application. I've attached my portfolio showing campaigns I've worked on despite my disability. I believe I can bring...",
    time: "4 days ago",
    tags: ["Marketing", "Part-Time"],
    disability: "Hearing Impairment",
    unread: false
  },
  {
    id: "3",
    name: "Michael Chen",
    subject: "Data Analyst Position",
    preview: "I'm excited about the data analyst role at your company. With my background in statistics and experience working with accessibility tools, I can...",
    time: "1 week ago",
    tags: ["Analytics", "Entry-Level"],
    disability: "Mobility Impairment",
    unread: false
  },
  {
    id: "4",
    name: "Jessica Rodriguez",
    subject: "UX Designer Application",
    preview: "I'm applying for the UX designer position. As someone with ADHD, I've developed unique approaches to design thinking. My portfolio demonstrates...",
    time: "1 week ago",
    tags: ["Design", "Hybrid"],
    disability: "ADHD",
    unread: true
  },
  {
    id: "5",
    name: "David Kim",
    subject: "Customer Service Representative",
    preview: "I'm interested in the customer service position. I have 5 years of experience in customer-facing roles. My disability has given me a unique perspective on...",
    time: "2 weeks ago",
    tags: ["Customer Service", "Full-Time"],
    disability: "Autism Spectrum",
    unread: false
  }
  ,

];

export function CoachInbox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  
  const filteredApplications = applications.filter(app => {
    const matchesSearch = 
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      app.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.preview.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.disability.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesFilter = 
      filter === "all" || 
      (filter === "unread" && app.unread);
      
    return matchesSearch && matchesFilter;
  });

  return (
    <div className = "flex flex-row pt-10 px-10 justify-center">

    <div className="flex flex-col px-10 pb-10  mb-auto align-middle justify-center w-full">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-2xl text-center font-bold">Review Inbox</h1>
        <Tabs defaultValue="all"  onValueChange={setFilter}>
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">Unreviewed</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
        <Input 
          placeholder="Search applications..." 
          className="pl-10 bg-white dark:bg-slate-800"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {/*<ScrollArea className="h-screen w-full rounded-md border p-4">*/}
      <div className="space-y-3">
        {filteredApplications.map((app) => (
          <Card 
            key={app.id} 
            className={`cursor-pointer transition-all hover:shadow ${app.unread ? 'border-l-4 border-l-gray-500' : ''}`}
          >
            <CardContent className="p-0">
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center">
                    <h3 className={`text-lg ${app.unread ? 'font-bold' : 'font-medium'}`}>{app.name}</h3>
                    {app.unread && (
                      <span className="ml-2 w-2 h-2 bg-gray-500 rounded-full"></span>
                    )}
                  </div>
                  <span className="text-sm text-slate-500">{app.time}</span>
                </div>
                
                <div className="mb-1">
                  <span className={`text-base ${app.unread ? 'font-medium' : ''}`}>{app.subject}</span>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">{app.preview}</p>
                </div>
                
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className="bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
                    {app.disability}
                  </Badge>
                  
                  {app.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  
            <div className="ml-auto flex gap-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MessageCircle size={16} />
                      <span className="sr-only">Meet</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Meet</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Calendar size={16} />
                      <span className="sr-only">Schedule</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Schedule</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <FileText size={16} />
                      <span className="sr-only">Notes</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Notes</TooltipContent>
                </Tooltip>
          </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {/*</ScrollArea> */}
    </div>
    { <CoachCalendar/> }
    </div>
  );
}
