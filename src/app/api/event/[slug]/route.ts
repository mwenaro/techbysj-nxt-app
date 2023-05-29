import { deleteData, getDataById, updateData } from "@/libs/firebase"
import { NextResponse } from "next/server"

export async function GET(request: Request, {params} : {params:{slug:any}}) {

try {
    let resp = await getDataById("events", params.slug)
    return NextResponse.json(resp)   
} catch (error:any) {
    return NextResponse.json({error : error.message})
}




  }

export async function DELETE(request: Request, {params} : {params:{slug:any}}) {

try {
    let resp = await deleteData("events", params.slug)

    return NextResponse.json({resp})   
} catch (error:any) {
    return NextResponse.json({error : error.message})
}




  }
export async function PUT(request: Request, {params} : {params:{slug:any}}) {
    let body = await request.json();
    
try {
    let resp = await updateData("events",body, params.slug)

    return NextResponse.json({resp})   
} catch (error:any) {
    return NextResponse.json({error : error.message})
}




  }