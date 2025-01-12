import DBConnection from "@/lib/dbconnection";
import { candidateModel } from "@/models/candidate";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    const data = await request.json();
    console.log("Request")
    console.log(data)
    try {
        await DBConnection();
        const candidataDBdata = new candidateModel(data);
        console.log("Candidate model")
        console.log(candidataDBdata)
        console.log("Saved");
        try {
            await candidataDBdata.save();
            console.log("Data saved successfully");
        } catch (saveError) {
            console.error("Error during save operation:", saveError);
        }
        console.log("saved");
        return NextResponse.json({
            message: "Candidate Data Saved Successfully",
            success: true
        })
    } catch (error) {
        return NextResponse.json({
            message: `Candidate Data Not Saved ${error}`,
            success: false
        })
    }


}