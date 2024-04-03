import { NextRequest, NextResponse } from "next/server";

//localhost:3000/api/weather
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");
  const latitude = searchParams.get("lat");
  const longitude = searchParams.get("lon");
  let url = "";
  if (address) {
    url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      address +
      "&appid=" +
      "0618e0a52e84e81760b476a8ddab9916";
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0618e0a52e84e81760b476a8ddab9916`;
  }
  console.log(url);
  const res = await fetch(url);

  const data = await res.json();
  return NextResponse.json({ data });
}
