"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Check } from "lucide-react";

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
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
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (isCompleted) {
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
