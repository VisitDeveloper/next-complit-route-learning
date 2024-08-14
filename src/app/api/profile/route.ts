import { request } from 'http';
import { headers, cookies } from 'next/headers';
import { type NextRequest } from 'next/server';

export async function GET(reqeust: NextRequest) {
    const requestHeaders = new Headers(reqeust.headers)
    const headerList = headers();
    
    cookies().set('resultPerPage', "20")

    const theme = reqeust.cookies!.get('theme')

    console.log(requestHeaders.get('Authorization'))
    console.log(headerList.get('Authorization'))

    console.log(cookies().get('resultPerPage'))
    console.log(theme)

    return new Response('profile route', {
        headers: {
            "Content-type": "text/html",
            "Set-Cookie": "theme=dark",
        }
    })
}