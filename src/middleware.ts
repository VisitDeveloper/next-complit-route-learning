import { NextResponse , type NextRequest } from "next/server";

// export function middleware(request : NextRequest){
//     return NextResponse.redirect(new URL('/' , request.url) )
// }


// وقتی وارد روت پروفایل میشه بر میگرده به روت صفحه اصلی
// export const config = {
//     matcher : '/profile'
// }


// import { NextRequest, NextResponse } from 'next/server';
// import { verifyJwt } from './jwt';

// export function checkAuthorization(request: NextRequest, next: () => NextResponse) {
//   const accessToken = request.headers.get("authorization")?.split(' ')[1];

//   if (!accessToken || !verifyJwt(accessToken)) {
//     return NextResponse.json(
//       {
//         message: "Unauthorized",
//       },
//       {
//         status: 401,
//       }
//     );
//   }

//   return next();
// }


export function middleware(request : NextRequest){
    const response = NextResponse.next();
    const themePreference = request.cookies.get('theme')
    if(!themePreference){
        response.cookies.set('theme' , 'dark')
    }

    // در همه ریکویست ها این هدره اضافه میشود
    response.headers.set('custom-header' , 'custom-value')

    return response

}