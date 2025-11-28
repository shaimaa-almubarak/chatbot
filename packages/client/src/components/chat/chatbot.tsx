import { useRef, useState } from 'react';
import axios from 'axios';
import TypingIndecator from './TypingIndecator';
import type { Message } from './ChatMessages';
import ChatMessages from './ChatMessages';
import ChatInput, { type ChatFormData } from './ChatInput';
import popSound from '@/assets/sounds/pop.mp3';
import notificationSound from '@/assets/sounds/notification.mp3';

const popAudio = new Audio(popSound);
popAudio.volume = 0.2;

const notificationAudio = new Audio(notificationSound);
notificationAudio.volume = 0.2;

type ChatResponse = { message: string };

const chatbot = () => {
   const [messages, setMessages] = useState<Message[]>([]);
   const [isbotTyping, setIsBotTyping] = useState(false);
   const [error, handleError] = useState('');
   const conversionId = useRef(crypto.randomUUID());

   const onSubmit = async ({ prompt }: ChatFormData) => {
      try {
         setMessages((prev) => [...prev, { content: prompt, role: 'user' }]);
         setIsBotTyping(true);
         handleError('');
         popAudio.play();

         const { data } = await axios.post<ChatResponse>('/api/chat', {
            prompt,
            conversionId,
         });

         setMessages((prev) => [
            ...prev,
            { content: data.message, role: 'bot' },
         ]);

         notificationAudio.play();
      } catch (error) {
         handleError('There is an error please try again.');
      } finally {
         setIsBotTyping(false);
      }
   };

   return (
      <div className="flex flex-col h-full justify-end">
         <div className="flex flex-col gap-3 mb-10 overflow-y-scroll">
            <ChatMessages messages={messages} />
            {isbotTyping && <TypingIndecator />}
            {error && <p className="text-red-500 font-medium">{error}</p>}
         </div>
         <ChatInput FormSubmit={onSubmit} />
      </div>
   );
};

export default chatbot;
