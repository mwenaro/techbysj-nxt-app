import { sendConfirmationEmail } from '@/libs';
import { getData, ref, db, saveData, get } from '@/libs/firebase';
import { sendTestEmail } from '@/libs/nodemailer/gmail';
import { NextResponse } from 'next/server';
const table = 'courses';

export async function GET(request: Request) {
  const callBack = (payload: { data?: any; error?: any }) => {
    let result = payload.data
      ? { data: payload.data }
      : { error: payload.error };
    return NextResponse.json(result);
  };

  let resp = await getData(table, callBack);
  return NextResponse.json(resp);
  try {
    const eventRef = ref(db, table);
    let snapshot = await get(eventRef);
    let data = await snapshot.val();

    return new Response(JSON.stringify(data), {
      status: 200,
      statusText: 'OK',
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      statusText: 'An error occured',
    });
  }
}

export async function POST(request: Request) {
  try {
    let body = await request.json(),
      { email, clientName } = body;
    let res = await saveData(table, body);

    // return NextResponse.json({ body });
    // let p = await sendConfirmationEmail(email, clientName, 'Enquiries');
    let p = await sendTestEmail(email,"Enquiries", "Hello there");
    return NextResponse.json({ msg: 'Successfully added id => ' + res, p });
  } catch (error: any) {
    console.log({ error: error.message });
    return NextResponse.json({ error: error.message });
    // return false;
  }
}
