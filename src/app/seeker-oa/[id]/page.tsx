"use client";

import QuizComponent from "@/components/seeker-quiz";
import { Title } from "@/components/title";

export default function QuizPage() {
  const quizData = {
    id: "quiz-1",
    title: "Google Online Assessment",
    questions: [
      {
        id: "q1",
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"]
      },
      {
        id: "q2",
        question: "Which programming language is React built with?",
        options: ["JavaScript", "Python", "Java", "C++"]
      },
      {
        id: "q3",
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Hyper Transfer Markup Language",
          "Home Tool Markup Language"
        ]
      }
    ]
  };

  return (
    <>
      <Title title="Online Assessment"/>
      <div className="container mx-auto py-8">
        <QuizComponent quizData={quizData} />
      </div>
    </>
  );
}
