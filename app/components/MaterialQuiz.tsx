"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronRight, CheckCircle, Brain } from "lucide-react"

interface MaterialQuizProps {
  onClose: () => void
}

const questions = [
  {
    id: 1,
    question: "What type of project are you working on?",
    options: ["Home Renovation", "New Construction", "Repair Work", "DIY Project"],
  },
  {
    id: 2,
    question: "What's your experience level?",
    options: ["Beginner", "Intermediate", "Advanced", "Professional"],
  },
  {
    id: 3,
    question: "What's your budget range?",
    options: ["Under $100", "$100-$500", "$500-$1000", "Over $1000"],
  },
]

export default function MaterialQuiz({ onClose }: MaterialQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const recommendations = [
    "Professional Drill Set - Perfect for your skill level",
    "Multi-Tool Kit - Great for versatile projects",
    "Safety Equipment Bundle - Essential for any project",
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3">
            <Brain className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-800">AI Material Quiz</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X className="h-6 w-6 text-slate-600" />
          </button>
        </div>

        <div className="p-6">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-6"
              >
                {/* Progress Bar */}
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    className="bg-gradient-to-r from-sky-500 to-purple-500 h-2 rounded-full"
                  />
                </div>

                <div>
                  <p className="text-sm text-slate-600 mb-2">
                    Question {currentQuestion + 1} of {questions.length}
                  </p>
                  <h3 className="text-xl font-semibold text-slate-800 mb-6">{questions[currentQuestion].question}</h3>
                </div>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={option}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(option)}
                      className="w-full p-4 text-left bg-slate-50 hover:bg-sky-50 rounded-xl border border-slate-200 hover:border-sky-300 transition-all flex items-center justify-between group"
                    >
                      <span className="text-slate-700 group-hover:text-sky-700">{option}</span>
                      <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-sky-500" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto"
                >
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </motion.div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Perfect Matches Found!</h3>
                  <p className="text-slate-600">Based on your answers, here are our AI-powered recommendations:</p>
                </div>

                <div className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <motion.div
                      key={rec}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="p-4 bg-gradient-to-r from-sky-50 to-purple-50 rounded-xl border border-sky-200"
                    >
                      <p className="text-slate-700 font-medium">{rec}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-sky-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow"
                >
                  View Recommended Products
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}
