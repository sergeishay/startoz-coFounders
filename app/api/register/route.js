import bcrypt from 'bcrypt';
import { connectToDB } from "../../../utils/database";
import User from '../../models/user';
import { NextResponse } from 'next/server';


// export async function POST(request){
//     const body = await request.json();
//     const { username, email, password } = body
//     if(!username || !email || !password){
//         return NextResponse.error('missing fields', 400);
//     }
//     await connectToDB();

//     const exist = await User.findOne({ email });
//     if(exist){
//         return NextResponse.error('Email already exists', 400);
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = await User.create({
//         email: email,
//         password: hashedPassword,
//         username: username,
//         image: "",
//         isFirstVisit: true,
//     });

//     return new NextResponse(JSON.stringify({ user: newUser })).withStatus(200);
// }

export async function POST(request){
    const body =await request.json();
    console.log(body)
    const {username, email, password} = body
    console.log({username, email, password})
    if(!username || !email || !password){
        return  NextResponse.json('missing fields', {status:400})
    }
    await connectToDB();

    const exist = await User.findOne({ email });
    if(exist){
        return  NextResponse.json("Email already exists", {status:400})
    }

    const hashedPassword = await bcrypt.hash(password,10);
    const newUserRef = await User.create({
        email: email,
        password: hashedPassword,
        username:username,
        image: "",
        isFirstVisit: true,
      });
      return NextResponse.json(newUserRef)
}

// export async function POST(request){
//     const body = await request.json();
//     const {username, email, password} = body;
    
//     if (!username || !email || !password){
//         return new NextResponse('Missing fields', {status: 422});
//     }
    
//     // Add more input validation as needed here
    
//     await connectToDB();

//     const exist = await User.findOne({ email });
//     if (exist){
//         return new NextResponse('Email already exists', {status: 400});
//     }

//     const hashedPassword = await bcrypt.hash(password,10);
//     const newUser = await User.create({
//         email,
//         password: hashedPassword,
//         username,
//         image: "",
//     });
    
//     // Create a sanitized user object to return
//     const newUserRef = {
//         _id: newUser._id,
//         email: newUser.email,
//         username: newUser.username,
//         image: newUser.image
//     };
    
//     return new NextResponse().json(newUserRef);
// }
