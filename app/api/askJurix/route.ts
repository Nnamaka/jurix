import admin from "firebase-admin"
import { adminDb } from '@/firebaseAdmin'
import {  NextResponse } from "next/server"
import type { NextApiResponse } from "next"

type Data = {
  answer: string;
};

export async function POST(req: Request, res: NextApiResponse<Data>) {
  const { prompt, chatId, session } = await req.json();

  if (!prompt) {
    NextResponse.json({ answer: "Please provide a prompt!" }, { status: 400 });
    return;
  }

  if (!chatId) {
    NextResponse.json(
      { answer: "Please provide a valid chat ID!" },
      { status: 400 }
    );
    return;
  }

  let response = ''

  // await fetch(`${process.env.JURIX_AI_URL}/api/jurix/chat`,{
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({
  //     prompt,
  //     chatId,
  //     session,
  //   })
  // })
  // .then(res => res.json())
  // .then(data => {
  //   response = data.message!
  // })
  // .catch(err => console.log("We got an error: ", err));

  console.log('response: ',response)

  const message: Message = {
      text: response || "ChatGPT was unable to find an answer for that",
      createdAt: admin.firestore.Timestamp.now(),
      user: {
          _id: 'Jurix',
          name: 'Jurix',
          avatar: 'https://links.papareact.com/89k',
      },
  }

  await adminDb.collection('users')
  .doc(session?.user?.email!)
  .collection('chats')
  .doc(chatId)
  .collection('messages')
  .add(message);

  return NextResponse.json({ answer: message });
}
