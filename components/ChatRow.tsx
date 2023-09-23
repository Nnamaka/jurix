import Link from "next/link"
import { db } from "@/firebase"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { TrashIcon } from "@heroicons/react/24/outline"
import { usePathname, useRouter } from "next/navigation"
import { useCollection } from "react-firebase-hooks/firestore"
import { collection, deleteDoc, doc } from "firebase/firestore"


type Props = {
    id: string
}

function ChatRow({ id }: Props) {
    const pathname = usePathname()
    const router = useRouter()
    const { data: session } = useSession()
    const [active, setActive] = useState(false)
    const [activePage, setActivePage] = useState('')

    const [messages] = useCollection(
        collection(db, 'users', session?.user?.email!, 'chats', id, 'messages')
    )

    const deleteChat = async (id: string) => {
        await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));

        if (`/conv/${id}` === activePage) router.replace('/')
        else router.replace(activePage)
    }

    useEffect(() => {
        if (!pathname) return;

        setActive(pathname.includes(id));
        setActivePage(pathname)

    }, [pathname])

    return (
        <Link
            href={`/conv/${id}`}
            className={`chatRow justify-center ${active && 'bg-hov'}`}
        >
            <p className="flex-1 font-semibold hidden md:inline-flex truncate">{messages?.docs[messages?.docs.length - 1]?.data().text
                || "New chat"}</p>
            <TrashIcon
                onClick={() => deleteChat(id)}
                className="h-5 w-5 text-tc hover:text-red-500" />
        </Link>
    )
}

export default ChatRow