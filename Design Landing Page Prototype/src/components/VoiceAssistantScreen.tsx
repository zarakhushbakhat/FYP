import { motion } from 'motion/react';
import { Mic, Volume2, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function VoiceAssistantScreen() {
  const [isListening, setIsListening] = useState(false);

  const conversationHistory = [
    { type: 'user', message: 'What is my next medicine?' },
    { type: 'assistant', message: 'Your next medicine is Metformin 500mg at 2:00 PM today.' },
    { type: 'user', message: 'Schedule appointment with Dr. Johnson' },
    { type: 'assistant', message: 'I have scheduled an appointment with Dr. Sarah Johnson for next Monday at 10:00 AM. Would you like me to set a reminder?' },
  ];

  return (
    <motion.div
      className="space-y-6 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center">
        <h1 className="mb-2 bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] bg-clip-text text-transparent"
          style={{ fontSize: '2.5rem', fontWeight: 700 }}>
          Voice Assistant
        </h1>
        <p className="text-[#94a3b8]" style={{ fontSize: '1.125rem' }}>
          Talk to your AI health companion
        </p>
      </div>

      {/* Voice Interface */}
      <motion.div
        className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-12 rounded-2xl border border-white/10 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="relative inline-block mb-8"
          whileHover={{ scale: 1.05 }}
        >
          {/* Pulsing rings */}
          {isListening && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full bg-[#14B8A6]/30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-[#38BDF8]/30"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </>
          )}
          
          <Button
            onClick={() => setIsListening(!isListening)}
            className={`w-32 h-32 rounded-full relative z-10 ${
              isListening
                ? 'bg-gradient-to-r from-[#F97316] to-[#F97316]/80'
                : 'bg-gradient-to-r from-[#14B8A6] to-[#38BDF8]'
            } hover:scale-105 transition-all duration-300`}
            style={{
              boxShadow: isListening 
                ? '0 0 60px rgba(249, 115, 22, 0.6)'
                : '0 0 40px rgba(20, 184, 166, 0.5)'
            }}
          >
            <Mic className="w-16 h-16 text-white" />
          </Button>
        </motion.div>

        <h3 className="text-white mb-2" style={{ fontWeight: 600, fontSize: '1.25rem' }}>
          {isListening ? 'Listening...' : 'Tap to speak'}
        </h3>
        <p className="text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
          {isListening 
            ? 'I am listening. Ask me anything about your health.'
            : 'Ask about medicines, appointments, or health advice'}
        </p>

        {/* Wave animation when listening */}
        {isListening && (
          <div className="flex justify-center gap-1 mt-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 rounded-full bg-gradient-to-t from-[#14B8A6] to-[#38BDF8]"
                animate={{
                  height: [20, 40, 20],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Conversation History */}
      <motion.div
        className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-white mb-4 flex items-center gap-2" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
          <MessageSquare className="w-5 h-5 text-[#38BDF8]" />
          Recent Conversations
        </h3>
        <div className="space-y-3">
          {conversationHistory.map((item, index) => (
            <motion.div
              key={index}
              className={`p-4 rounded-xl ${
                item.type === 'user'
                  ? 'bg-[#14B8A6]/10 ml-8'
                  : 'bg-[#38BDF8]/10 mr-8'
              }`}
              initial={{ opacity: 0, x: item.type === 'user' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <div className="flex items-start gap-3">
                {item.type === 'assistant' && (
                  <Volume2 className="w-5 h-5 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                )}
                <p className={`${
                  item.type === 'user' ? 'text-[#14B8A6]' : 'text-[#E5E7EB]'
                }`} style={{ fontSize: '0.875rem' }}>
                  {item.message}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Suggestions */}
      <motion.div
        className="grid grid-cols-2 gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {['What are my vitals?', 'Medicine schedule', 'Upcoming appointments', 'Health tips'].map((suggestion, index) => (
          <Button
            key={index}
            variant="outline"
            className="border-[#38BDF8]/30 text-[#38BDF8] hover:bg-[#38BDF8]/10 rounded-xl py-6"
          >
            {suggestion}
          </Button>
        ))}
      </motion.div>
    </motion.div>
  );
}
