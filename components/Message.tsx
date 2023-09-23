import { DocumentData } from "firebase/firestore"


type Props = {
  message: DocumentData
}
function Message({ message }: Props) {
 
  const isJurix = message.user.name === "Jurix"
  return (
    <div className={`py-5 text- ${isJurix && 'bg-hov'}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={message.user.avatar} className="h-8 w-8" alt="" />
        <p className="pt-1 text-tc font-medium ">
          {message.text}
        </p>
      </div>
    </div>
  )
}

export default Message