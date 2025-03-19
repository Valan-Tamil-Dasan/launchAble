// components/QuizComponent.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Check, X } from "lucide-react";

// Extended types to include correct answers
interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string; // Add correct answer field
}

interface QuizData {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

interface QuizComponentProps {
  quizData: QuizData;
}

const QuizComponent = ({ quizData }: QuizComponentProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const totalQuestions = quizData.questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleAnswerSelect = (answer: string) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: answer,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    quizData.questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  // Handle sharing with coach
  const handleShareWithCoach = () => {
    // In a real application, you would make an API call here to share results
    // For now, we'll just set a flag to show the completion message
    setShowResults(false);
  };

  if (isCompleted && !showResults) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Assessment Completed</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="bg-green-100 dark:bg-green-900 rounded-full p-3 mb-4">
            <Check className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Thank you for completing the assessment</h2>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Your responses have been shared with your coach for review.
          </p>
        </CardContent>
      </Card>
    );
  }

  if (isCompleted && showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / totalQuestions) * 100);

    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Assessment Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-medium">Your Score</span>
              <span className="text-lg font-bold">{score}/{totalQuestions} ({percentage}%)</span>
            </div>
            <Progress value={percentage} className="h-2 w-full" />
          </div>

          <div className="space-y-6">
            {quizData.questions.map((question, index) => {
              const isCorrect = answers[question.id] === question.correctAnswer;
              return (
                <div key={question.id} className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 flex-shrink-0 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                      {isCorrect ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium">
                        Question {index + 1}: {question.question}
                      </h3>
                      <div className="mt-2 space-y-1 text-sm">
                        <p>Your answer: <span className={isCorrect ? 'font-medium text-green-600' : 'font-medium text-red-600'}>
                          {answers[question.id] || "Not answered"}
                        </span></p>
                        {!isCorrect && (
                          <p>Correct answer: <span className="font-medium text-green-600">{question.correctAnswer}</span></p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleShareWithCoach} className="w-full max-w-xs">
            Share Results with Coach
          </Button>
        </CardFooter>
      </Card>
    );
  }

  const isAnswered = !!answers[currentQuestion?.id];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{quizData.title}</CardTitle>
          <span className="text-sm text-gray-500">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </span>
        </div>
        <Progress value={progress} className="w-full h-2 mt-2" />
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <h3 className="text-lg font-medium">{currentQuestion.question}</h3>
          <RadioGroup
            value={answers[currentQuestion.id] || ""}
            onValueChange={handleAnswerSelect}
          >
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 rounded-lg border p-3 hover:bg-slate-50 dark:hover:bg-slate-900"
                >
                  <RadioGroupItem
                    value={option}
                    id={`option-${index}`}
                  />
                  <Label
                    htmlFor={`option-${index}`}
                    className="flex-grow cursor-pointer"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={!isAnswered}
        >
          {currentQuestionIndex === totalQuestions - 1 ? "Submit" : "Next"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizComponent;
