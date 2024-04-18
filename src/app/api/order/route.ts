import { NextResponse } from 'next/server';

const POST = async (req: Request) => {
  const body = await req.json();
  return NextResponse.json({ body });
};

export { POST };
