import { getData, ref, db, saveData, get } from '@/libs/firebase';

import { NextResponse } from 'next/server';
import { generatePDF } from './hii';

export async function GET(req: Request) {
  
  let host = req.url.split('/api/')[0];
  await generatePDF(host,async()=>console.log("Hello world"));

 return NextResponse.json({ msg: host });

}

export async function POST(request: Request) {
  try {
    let body = await request.json();
    let res = await saveData('events', body);
    return NextResponse.json({ msg: 'Successfully added id => ' + res });
  } catch (error: any) {
    console.log({ error: error.message });
    NextResponse.json({ error: error.message });
    return false;
  }
}
