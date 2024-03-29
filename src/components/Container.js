import {useEffect} from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'

import {init,subscribeChat, subscribeInitialMessages} from "../socketApi"
import {useChat} from "../context/ChatContext"

function Container() {
    const {setMessages} =useChat();
    useEffect(() => {
        init();
        subscribeChat((message) => {
            setMessages((prevState) => [...prevState, {message}]);
        });
        subscribeInitialMessages((messages) => {
setMessages(messages);
        })
    }, [])
    
    return (
        <div>
            <ChatList />
            <ChatForm />

        </div>
    )
}

export default Container
