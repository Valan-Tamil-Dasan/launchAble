"use client";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { notes } from "../../../components/seeker-notes";
import { Volume2, ArrowLeft } from "lucide-react";

export default function SeekerNotePage() {
  const router = useRouter();
  const params = useParams();
  const noteId = parseInt(params.id as string);
  
  // Find the note
  const note = notes.find(n => n.id === noteId);
  
  // Format content with paragraphs
  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className={index > 0 ? "mt-6 text-lg" : "text-lg"}>
        {paragraph}
      </p>
    ));
  };
  
  const speakText = () => {
    if (!note) return;
    const utterance = new SpeechSynthesisUtterance(note.content);
    window.speechSynthesis.speak(utterance);
  };
  
  if (!note) {
    return (
      <div className="container mx-auto p-6 max-w-4xl">
        <div className="text-center p-12">
          <h1 className="text-2xl font-bold mb-4">Note Not Found</h1>
          <p className="mb-6">The coaching note you're looking for doesn't exist.</p>
          <Button onClick={() => router.push('/seeker-notes')}>
            <ArrowLeft className="mr-2" /> Back to Notes
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Button 
        variant="outline" 
        onClick={() => router.push('/seeker-notes')}
        className="mb-6"
      >
        <ArrowLeft className="mr-2" /> Back to Notes
      </Button>
      
      <div className="bg-white rounded-lg  p-8">

        <div className="mb-8 border-b pb-4">
          <h1 className="text-3xl font-bold mb-2">{note.title}</h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-500">By {note.coach}</p>
            <Button 
              variant="outline" 
              onClick={speakText}
              className="flex items-center"
            >
              <Volume2 className="mr-2" /> Read Aloud
            </Button>
          </div>
        </div>
        
        <article className="space-y-6">
          {formatContent(note.content)}
        </article>
      </div>
    </div>
  );
}
