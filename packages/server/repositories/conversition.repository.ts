//implemntation details of conversition repository
const conversation = new Map<string, string>();
//export puplic Interface
export const ConversationRepository = {
   getLastResponseId(conversationId: string) {
      return conversation.get(conversationId);
   },
   setLastResponeId(conversationId: string, responseId: string) {
      return conversation.set(conversationId, responseId);
   },
};
