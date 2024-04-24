import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/UseConversation';
import NotificationSound from '../assets/sounds/notification.mp3';

export default function useListenMessages() {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            const sound = new Audio(NotificationSound);
            sound.play();
            newMessage.shouldShake = true;
            setMessages([...messages, newMessage]);
        })
    }, [socket, setMessages, messages]);

    return socket?.off("newMessage");
}
