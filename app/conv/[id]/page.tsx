'use client'

import ChatInput from "@/components/ChatInput"
import ChatWindow from "@/components/ChatWindow"

type Props = {
  params: {
    id: string
  }
}
function Chatpage({ params: { id } }: Props) {
  return (

    <div className="flex flex-col h-screen overflow-hidden">
      <ChatWindow chatId={id} />

      <div className="flex pt-2 flex-col items-center">
        <div className="flex flex-col items-start">
          <ChatInput chatId={id} />
          <p className="text-xs mt-2 mb-10 text-tc">
            Jurix is powered by chatgpt.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Chatpage