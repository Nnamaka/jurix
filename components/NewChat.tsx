'use client'

import { db } from "../firebase"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { PlusIcon } from "@heroicons/react/24/solid"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"


function NewChat() {

  const { data: session } = useSession()
  const router = useRouter()

  const createNewChat = async () => {
    const doc = await addDoc(collection(db, 'users', session?.user?.email!, 'chats'), {
      userid: session?.user?.email!,
      createdAt: serverTimestamp()
    })

    router.push(`/conv/${doc.id}`)
  }
  return (
    <div
      onClick={createNewChat}
      className="border-tc border chatRow">
      <PlusIcon className="h-4 w-4" />
      <p>New Conversation</p>
    </div>
  )
}

export default NewChat