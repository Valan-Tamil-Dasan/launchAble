"use client";

import { useEffect, useState } from "react";
import QuizComponent from "@/components/seeker-quiz";
import { Card, CardContent } from "@/components/ui/card";

// Types with correct answers included
interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizData {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

export default function QuizPage() {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching quiz data
    const fetchQuizData = async () => {
      try {
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // This would be replaced with actual fetch in production
        // const response = await fetch('/api/quiz/quiz-1');
        // const data = await response.json();
        // Sample data with correct answers

        const data = {
          id: "quiz-1",
          title: "Basic Assessment",
          questions: [
            {
              id: "q1",
              question: "What is the capital of France?",
              options: ["Paris", "London", "Berlin", "Madrid"],
              correctAnswer: "Paris"
            },
            {
              id: "q2",
              question: "Which programming language is React built with?",
              options: ["JavaScript", "Python", "Java", "C++"],
              correctAnswer: "JavaScript"
            },
            {
              id: "q3",
              question: "What does HTML stand for?",
              options: [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Hyper Transfer Markup Language",
                "Home Tool Markup Language"
              ],
              correctAnswer: "Hyper Text Markup Language"
            }
          ]
        };
        
        setQuizData(data);
      } catch (error) {
        console.error("Failed to fetch quiz data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-2xl">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
              <p className="text-center mt-4">Loading assessment...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!quizData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-2xl">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-red-500">Failed to load assessment</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <QuizComponent quizData={quizData} />
    </div>
  );
}
