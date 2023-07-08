import { getData, ref, db, saveData, get } from '@/libs/firebase';
import { products } from '@/utlis';
import { NextResponse } from 'next/server';
const table = 'products';

export async function GET(request: Request) {
  return NextResponse.json(products);
}


export async function POST(request: Request) {
  try {
    let body = await request.json();
    let res = await saveData(table, body);
    return NextResponse.json({ msg: 'Successfully added id => ' + res });
  } catch (error: any) {
    console.log({ error: error.message });
    NextResponse.json({ error: error.message });
    return false;
  }
}
