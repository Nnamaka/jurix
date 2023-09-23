'use client'

import NewChat from "./NewChat"
import { db } from "@/firebase"
import ChatRow from "./ChatRow"
import { useSession, signOut } from "next-auth/react"
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, orderBy, query } from "firebase/firestore"

function SideBar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(session &&
    query(collection(db, 'users', session.user?.email!,
      'chats'), orderBy('createdAt', 'desc')));


  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">
        <div className=" ">
          {/* NewChat */}
          <NewChat />

          <div className="flex flex-col">
            <div className="overflow-y-auto space-y-2 mt-2">
              {/* Map through the chatrows */}
              {chats?.docs.map(chat => (
                <ChatRow key={chat.id} id={chat.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {session && (
        <div className="flex space-x-2 items-center py-2">
          <img src={session.user?.image!} alt="profile picture"
            className="h-12 w-12 rounded-full mr-2" />
          <div
            onClick={() => signOut()}
            className="text-tc cursor-pointer">
            <p className="font-extrabold text-base">{session.user?.name!}</p>
            <p className="text-sm font-medium">Sign Out</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default SideBar