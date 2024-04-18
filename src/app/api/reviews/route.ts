import { NextResponse } from 'next/server';
import { reviewsMock } from '@shared/mock/reviewsMock';


const GET = async (req: Request) => {
  return NextResponse.json(reviewsMock);
};

export { GET };
