import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

const middleware = async (req: NextRequest): Promise<Response | undefined> => {
  // Token will exist if the user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname, origin } = req.nextUrl;

  // Allow the request if the following is true...
  // 1) Its a request for  next-auth session & provider fetching
  // 2) the token exist
  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next();
  }

  // Redirect them to login if they dont have token AND requesting a protected route
  if (!token && pathname !== '/login') {
    return NextResponse.redirect(`${origin}/login`);
  }

  return undefined;
};

export default middleware;
