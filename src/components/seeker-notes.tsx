"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";

interface Note {
  id: number;
  title: string;
  content: string;
  coach: string;
}

//const notes: Note[] = []; 
const notes: Note[] = [
  { id: 1, title: "Job Preparation", coach: "Coach Alex", content: "Focus on your strengths and build confidence in interviews." },
  { id: 2, title: "Resume Tips", coach: "Coach Maria", content: "Use a clear and structured format with strong action words." },
  { id: 3, title: "Workplace Communication", coach: "Coach Sam", content: "Active listening and clear articulation improve teamwork." },
];

export default function NotesApp() {
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const speakText = (text: string) => {
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {notes.length > 0 ? (
        notes.map((note) => (
          <Card key={note.id} className="cursor-pointer hover:shadow-lg transition h-48 flex flex-col">
            <CardHeader className="flex justify-between items-center">
              <div onClick={() => setSelectedNote(note)} className="flex-grow">
                <CardTitle>{note.title}</CardTitle>
                <p className="text-sm text-gray-500">By {note.coach}</p>
              </div>
              <Button size="icon" variant="ghost" onClick={() => speakText(note.content)}>
                <Volume2 className="w-5 h-5" />
              </Button>
            </CardHeader>
            <CardContent onClick={() => setSelectedNote(note)} className="flex-grow text-wrap break-words">
              {note.content}
            </CardContent>
          </Card>
        ))
      ) : (
        <p className="text-gray-500 text-center col-span-full">No notes available yet.</p>
      )}

      {/* Dialog for full note */}
      {selectedNote && (
        <Dialog open={!!selectedNote} onOpenChange={() => setSelectedNote(null)}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>{selectedNote.title}</DialogTitle>
              <p className="text-sm text-gray-500">By {selectedNote.coach}</p>
            </DialogHeader>
            <p className="p-4">{selectedNote.content}</p>
            <Button variant="outline" onClick={() => speakText(selectedNote.content)}>
              <Volume2 className="mr-2" /> Read Aloud
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
