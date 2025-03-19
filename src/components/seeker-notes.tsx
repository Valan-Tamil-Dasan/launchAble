// app/seeker-notes/page.tsx - Main seeker notes list page
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Note {
  id: number;
  title: string;
  content: string;
  coach: string;
}

// Example notes with longer paragraphs
const notes: Note[] = [
  { 
    id: 1, 
    title: "Job Preparation", 
    coach: "Coach Alex", 
    content: "Focus on your strengths and build confidence in interviews. Before any interview, research the company thoroughly and prepare specific examples from your experience that demonstrate relevant skills. These stories should follow the STAR format: Situation, Task, Action, and Result.\n\nPractice common interview questions out loud, and record yourself to analyze your speech patterns. Pay attention to filler words and work on eliminating them. Body language matters significantly, so maintain good posture, make appropriate eye contact, and practice a firm handshake.\n\nPrepare thoughtful questions to ask your interviewer about the company culture, team dynamics, and growth opportunities. This shows your genuine interest in the position and helps you evaluate if the workplace is right for you.\n\nThe night before your interview, prepare your outfit, documents, and route to the interview location. Arrive 15 minutes early to account for unexpected delays and to give yourself time to compose your thoughts."
  },
  { 
    id: 2, 
    title: "Resume Tips", 
    coach: "Coach Maria", 
    content: "Use a clear and structured format with strong action words in your resume. Begin each bullet point with powerful verbs like 'achieved,' 'implemented,' or 'coordinated' rather than using passive language. This immediately communicates your capabilities and impact.\n\nTailor your resume for each job application by carefully analyzing the job description and highlighting relevant skills and experiences. Use keywords from the posting to help your resume pass through Applicant Tracking Systems (ATS).\n\nQuantify your achievements whenever possible. Instead of saying 'Increased sales,' specify 'Increased regional sales by 27% within 6 months.' Numbers provide concrete evidence of your contributions and make your accomplishments more impressive and believable.\n\nKeep your resume concise and focused. For most professionals, a two-page maximum is appropriate. Use bullet points rather than paragraphs for readability, and maintain consistent formatting throughout the document including font type, size, and spacing."
  },
  { 
    id: 3, 
    title: "Workplace Communication", 
    coach: "Coach Sam", 
    content: "Active listening and clear articulation improve teamwork significantly. When colleagues are speaking, focus completely on understanding their message rather than formulating your response. Demonstrate your attention by nodding, maintaining eye contact, and asking clarifying questions.\n\nIn written communication, be concise and specific. State your purpose early in emails and documents, and use formatting tools like bullets and headers to organize information logically. Before sending important communications, review them for clarity and tone.\n\nNon-verbal cues account for a large percentage of communication. Be mindful of your body language in meetings and conversations. Uncrossed arms, appropriate eye contact, and facing the speaker directly all signal openness and engagement.\n\nFeedback is essential for growth but can be difficult to deliver effectively. Use the 'sandwich method' by starting with positive observations, addressing areas for improvement, and concluding with encouragement and support. Always focus on specific behaviors rather than personality traits. Active listening and clear articulation improve teamwork significantly. When colleagues are speaking, focus completely on understanding their message rather than formulating your response. Demonstrate your attention by nodding, maintaining eye contact, and asking clarifying questions.\n\nIn written communication, be concise and specific. State your purpose early in emails and documents, and use formatting tools like bullets and headers to organize information logically. Before sending important communications, review them for clarity and tone.\n\nNon-verbal cues account for a large percentage of communication. Be mindful of your body language in meetings and conversations. Uncrossed arms, appropriate eye contact, and facing the speaker directly all signal openness and engagement.\n\nFeedback is essential for growth but can be difficult to deliver effectively. Use the 'sandwich method' by starting with positive observations, addressing areas for improvement, and concluding with encouragement and support. Always focus on specific behaviors rather than personality traits."
  },
];

// Export notes for use in other files
export { notes };

export default function SeekerNotesPage() {
  const speakText = (text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Your Coaching Notes</h1>
      
      <div className="flex flex-col gap-6">
        {notes.length > 0 ? (
          notes.map((note) => (
            <Card key={note.id} className="hover:shadow-lg transition">
              <CardHeader className="flex flex-row justify-between items-center pb-2">
                <div>
                  <CardTitle className="text-xl">{note.title}</CardTitle>
                  <p className="text-sm text-gray-500">By {note.coach}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="ghost" onClick={(e) => speakText(note.content, e)}>
                    <Volume2 className="w-5 h-5" />
                  </Button>
                  <Link href={`/seeker-notes/${note.id}`}>
                    <Button variant="outline">
                      Read Full Note <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="line-clamp-3">
                {note.content.split('\n\n')[0]}
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-gray-500 text-center">No notes available yet.</p>
        )}
      </div>
    </div>
  );
}
