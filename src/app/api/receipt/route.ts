import { getData, ref, db, saveData, get } from '@/libs/firebase';
import { receiptGen } from '@/libs/pdf';

import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    // Example usage
const receiptId = 'ABC123';
const date = '2023-06-21';
const details = 'Product details...';

await receiptGen({"{{receiptId}}":receiptId, "{{date}}": date,"{{name}}":"Mwero Abdalla"});
  
  return NextResponse.json({msg:"reecipts"});
  
  
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
