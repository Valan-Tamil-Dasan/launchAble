import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, PlayCircle } from "lucide-react";

const assessments = [
  {
    id: 1,
    company: "Google",
    coach: "John Doe",
    duration: "60 mins",
    date: "Aug 25, 2024",
    description: "A technical assessment covering DSA and System Design.",
    difficulty: "Hard",
    tags: ["DSA", "System Design", "Behavioral"],
  },
  {
    id: 2,
    company: "Amazon",
    coach: "Jane Smith",
    duration: "45 mins",
    date: "Sep 10, 2024",
    description: "An online coding challenge focusing on algorithms.",
    difficulty: "Medium",
    tags: ["Coding", "Algorithms"],
  },
  {
    id: 3,
    company: "Microsoft",
    coach: "David Johnson",
    duration: "30 mins",
    date: "Sep 15, 2024",
    description: "A multiple-choice questionnaire on cloud computing.",
    difficulty: "Easy",
    tags: ["Cloud", "Azure", "Multiple Choice"],
  },
];

export default function SeekerOA() {
  return (
<div className="p-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {assessments.map((assessment) => (
      <Card 
        key={assessment.id} 
        className="w-full min-w-150 cursor-pointer transition-all hover:shadow-lg"
      >
        <CardContent className="p-4 flex flex-col">
          
          {/* Header Section */}
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-bold">{assessment.company}</h3>
              <p className="text-sm text-gray-500">Coach: {assessment.coach}</p>
            </div>
            <Badge variant="outline" className="text-sm bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
              {assessment.difficulty}
            </Badge>
          </div>

          {/* Assessment Info */}
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 line-clamp-2">
            {assessment.description}
          </p>

          {/* Metadata */}
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-500">{assessment.duration}</span>
            <Calendar className="w-4 h-4 text-gray-500 ml-2" />
            <span className="text-sm text-gray-500">{assessment.date}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {assessment.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Take Assessment Button */}
          <Button className="w-full flex items-center gap-2" variant="default">
            <PlayCircle className="w-5 h-5" />
            Take Assessment
          </Button>

        </CardContent>
      </Card>
    ))}
  </div>
</div>
  );
}
