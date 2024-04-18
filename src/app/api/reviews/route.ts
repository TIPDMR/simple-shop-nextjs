import { NextResponse } from 'next/server';
import { reviewsMock } from '@shared/mock/reviewsMock';


const GET = async () => {
  return NextResponse.json(reviewsMock);
};

export { GET };
