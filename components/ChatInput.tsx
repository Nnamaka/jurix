'use client'

import { db } from "@/firebase"
import { FormEvent, useState } from "react"
import { useSession } from "next-auth/react"
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"

type Props = {
  chatId: string
}

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState('')
  const { data: session } = useSession()


  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`
      }
    }

    await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
      message
    )

    await fetch('/api/askJurix', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        session,
      })
    })
    .then(() => {
      console.log('successful')
    })
    .catch(err => console.log('Error dey o', err))

  }

  return (
    <div className="bg-hov border-tc border text-white-400 rounded-lg 
    text-sm w-[596px] items-center">
      <form
        onSubmit={sendMessage}
        className="p-5 space-x-5 flex h-[60.56px]">
        <input type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Chat with Jurix"
          className="bg-transparent font-medium focus:outline-none flex-1 
          disabled:cursor-not-allowed disabled:text-gray-300 
          text-tc"
          disabled={!session}
        />

        <button
          disabled={!prompt || !session}
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold
         px-4 py-2 h-7 rounded disabled:cursor-not-allowed"
          type="submit">
          <PaperAirplaneIcon className="h-3 w-3" />
        </button>
      </form>
    </div>
  )
}

export default ChatInput