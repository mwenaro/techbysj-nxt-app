import { deleteData, getDataById, updateData } from '@/libs/firebase';
import { products } from '@/utlis';
import { NextResponse } from 'next/server';

const table = 'products';
export async function GET(
  request: Request,
  { params: { slug } }: { params: { slug: any } }
) {
  try {
    return NextResponse.json(products.find((p) => p.id == slug));
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
