import { connectToDB } from "../../../utils/database";
import CoFounder from "../../models/coFounder";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  console.log(body + "Bla");
  // Check for missing fields
  const requiredFields = [
    "phoneNumber",
    "profession",
    "lookingToBe",
    "desiredSectors",
    "country",
    "dateOfBirth",
    "aboutMe",
    "experience",
    "skills",
    "personalWeb",
    "linkedInProfileLink",
  ];

  for (const field of requiredFields) {
    if (!body[field]) {
      return new NextResponse.json(
        { message: `${field} is required` },
        { status: 400 }
      );
    }
  }

  await connectToDB();
  // const exist = await User.findOne({ email:sessionEmail });
  if (!exist) {
    console.log("cannot find the user");
  }
  console.log("Find the User");
  // Create a new co-founder document using the form data
  const newCoFounder = await CoFounder.create(body);

  return NextResponse.json(newCoFounder);
}
