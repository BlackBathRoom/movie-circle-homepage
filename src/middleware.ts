import { NextResponse, type NextRequest } from 'next/server';

const encoder = new TextEncoder();

const timingSafeEqual = (a: string, b: string) => {
  const aBytes = encoder.encode(a);
  const bBytes = encoder.encode(b);

  if (aBytes.byteLength !== bBytes.byteLength) {
    return false;
  }

  let result = 0;
  for (let i = 0; i < aBytes.length; i++) {
    result |= aBytes[i] ^ bBytes[i];
  }
  return result === 0;
};

export function middleware(request: NextRequest) {
  if (process.env.ENABLE_BASIC_AUTH !== 'true') {
    console.log('Basic authentication is disabled. Skipping middleware.');
    return NextResponse.next();
  }

  if (!process.env.BASIC_AUTH_USER || !process.env.BASIC_AUTH_PASS) {
    console.error('Basic authentication credentials are not set.');
    return NextResponse.json(
      { error: 'Basic authentication credentials are not set.' },
      {
        status: 500,
      },
    );
  }

  const authUser = process.env.BASIC_AUTH_USER;
  const authPass = process.env.BASIC_AUTH_PASS;

  const basicAuth = request.headers.get('authorization');

  if (!basicAuth) {
    console.log('🔥 No authorization header found');
    return NextResponse.json(
      { error: 'Please enter credentials' },
      {
        headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
        status: 401,
      },
    );
  }

  const [scheme, encoded] = basicAuth.split(' ');

  if (!encoded || scheme !== 'Basic') {
    return new Response('Malformed authorization header.', {
      status: 400,
    });
  }

  const [user, password] = Buffer.from(encoded, 'base64').toString().split(':');

  if (
    !timingSafeEqual(user, authUser) ||
    !timingSafeEqual(password, authPass)
  ) {
    return NextResponse.json(
      { error: 'Invalid credentials' },
      {
        headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
        status: 401,
      },
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/(.*)'],
};
