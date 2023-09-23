'use client'

import { db } from "@/firebase"
import Message from "./Message"
import { useSession } from "next-auth/react"
import ScrollableFeed from 'react-scrollable-feed'
import { useCollection } from "react-firebase-hooks/firestore"
import { collection, orderBy, query } from "firebase/firestore"

type Props = {
  chatId: string
}

function ChatWindow({ chatId }: Props) {
  const { data: session } = useSession()

  const [messages] = useCollection(session && query(
    collection(db, "users", session?.user?.email!, "chats",
      chatId,
      "messages"),
    orderBy("createdAt",
      "asc"
    )
  ))

  return (

    <ScrollableFeed >
      <div className={`flex-1 ${!messages?.empty && 'overflow-y-auto' && 'overflow-x-hidden'} `}>
        {messages?.empty && (
          <>
            <p className="mt-20 font-medium text-center text-tc">
              Begin chat with Jurix
              <p className="h-4">🚀</p>
            </p>
          </>
        )}
        {messages?.docs.map((message) => (
          <Message key={message.id} message={message.data()} />
        ))}
      </div>
    </ScrollableFeed>

  )
}

export default ChatWindow