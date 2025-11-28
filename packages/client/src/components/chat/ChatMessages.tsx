import { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

export type Message = { content: string; role: 'user' | 'bot' };
type Props = { messages: Message[] };
const ChatMessages = ({ messages }: Props) => {
   const lastMessageRef = useRef<HTMLParagraphElement | null>(null);
   useEffect(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
   }, [messages]);
   const onCopyChatMessage = (
      e: React.ClipboardEvent<HTMLParagraphElement>
   ) => {
      const seclection = window.getSelection()?.toString().trim();
      if (seclection) {
         e.preventDefault();
         e.clipboardData.setData('text/plain', seclection);
      }
   };
   return (
      <div className="flex flex-col gap-3.5">
         {messages.map((message, index) => (
            <div
               key={index}
               ref={index === messages.length - 1 ? lastMessageRef : null}
               onCopy={onCopyChatMessage}
               className={` px-3 py-1 rounded-2xl ${
                  message.role === 'user'
                     ? 'bg-blue-600 text-white self-end'
                     : 'bg-gray-100 text-black self-start'
               }`}
            >
               <ReactMarkdown>{message.content}</ReactMarkdown>
            </div>
         ))}
      </div>
   );
};

export default ChatMessages;
