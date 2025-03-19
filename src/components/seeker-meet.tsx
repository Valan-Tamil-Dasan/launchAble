"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video } from "lucide-react";

const MeetPage = ({ meets }) => {
  return (
    <div className="p-6">
      {meets.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No meet scheduled</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {meets.map((meet) => (
            <Card
              key={meet.id}
              className="w-full min-w-150 cursor-pointer transition-all hover:shadow-lg"
            >
              <CardContent className="p-4 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold">{meet.company}</h3>
                    <p className="text-sm text-gray-500">
                      Job Seeker: {meet.jobSeeker}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-sm bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300"
                  >
                    {meet.status}
                  </Badge>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Role: {meet.jobRole}
                </p>

                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">{meet.time}</span>
                  <Calendar className="w-4 h-4 text-gray-500 ml-2" />
                  <span className="text-sm text-gray-500">{meet.date}</span>
                </div>

                {meet.meetingLink && (
                  <Button
                    className="w-full flex items-center gap-2"
                    variant="default"
                    onClick={() => window.open(meet.meetingLink, "_blank")}
                  >
                    <Video className="w-5 h-5" />
                    Join Meet
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

// Example meet data
const meets = [
  {
    id: 1,
    company: "Google",
    jobSeeker: "John Doe",
    jobRole: "Software Engineer",
    date: "2025-03-20",
    time: "10:00 AM",
    status: "Scheduled",
    meetingLink: "https://meet.google.com/xyz",
  },
  {
    id: 2,
    company: "Microsoft",
    jobSeeker: "Jane Smith",
    jobRole: "Frontend Developer",
    date: "2025-03-21",
    time: "2:00 PM",
    status: "Pending",
    meetingLink: "https://teams.microsoft.com/xyz",
  },
];

export default function SeekerMeet() {
  return <MeetPage meets={meets} />;
}
