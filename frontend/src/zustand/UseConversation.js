import { create } from 'zustand';

const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages: [],
    setMessages: (messages) => set({messages}),
    conversationsUser: [],
    setConversationsUser: (conversationsUser) => set({ conversationsUser }),

}))

export default useConversation;