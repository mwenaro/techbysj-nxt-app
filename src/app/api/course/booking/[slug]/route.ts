import { deleteData, getDataById, updateData } from '@/libs/firebase';
import { NextResponse } from 'next/server';

const table = "course_booking"
export async function GET(
  request: Request,
  { params }: { params: { slug: any } }
) {
  try {
    let resp = await getDataById(table, params.slug);
    return NextResponse.json(resp);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: any } }
) {
  try {
    let resp = await deleteData(table, params.slug);

    return NextResponse.json({ resp });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
export async function PUT(
  request: Request,
  { params }: { params: { slug: any } }
) {
  let body = await request.json();

  try {
    let resp = await updateData(table, body, params.slug);

    return NextResponse.json({ resp });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
