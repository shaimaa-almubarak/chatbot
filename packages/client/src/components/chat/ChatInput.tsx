import React, { type KeyboardEvent } from 'react';
import { Button } from '../ui/button';
import { FaArrowUp } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

export type ChatFormData = {
   prompt: string;
};

type Props = {
   FormSubmit: (data: ChatFormData) => void;
};

const ChatInput = ({ FormSubmit }: Props) => {
   const { register, handleSubmit, reset, formState } = useForm<ChatFormData>();

   const handlFormSubmit = handleSubmit((data) => {
      reset({ prompt: '' });
      FormSubmit(data);
   });

   const onKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
         e.preventDefault();
         handleSubmit(FormSubmit)();
      }
   };

   return (
      <form
         onSubmit={handlFormSubmit}
         onKeyDown={onKeyDown}
         className="flex flex-col gap-2 items-end border-2 rounded-md p-4"
      >
         <textarea
            autoFocus
            {...register('prompt', {
               required: true,
               validate: (data) => data.trim().length > 0,
            })}
            className="w-full border-0 focus:outline-0 resize-none "
            placeholder="Ask Anything"
            maxLength={1000}
         />
         <Button
            disabled={!formState.isValid}
            className="rounded-full w-9 h-9 cursor-pointer"
         >
            <FaArrowUp />
         </Button>
      </form>
   );
};

export default ChatInput;
