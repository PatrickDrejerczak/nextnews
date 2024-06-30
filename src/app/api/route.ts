import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  console.log(request);

  return new Response("Hello!");
}

// export function POST(request: any) {
//   console.log(request);

//   return new Response.json();
// }
