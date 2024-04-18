import { NextResponse } from 'next/server';
import { productsMock } from '@shared/mock/productsMock';


const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = parseInt(searchParams.get('page_size') || '6', 10);
  const startIndex = page > 1 ? ((page - 1) * pageSize) : 0;
  const paginatedProducts = productsMock.slice(startIndex, (startIndex + pageSize));
  return NextResponse.json({ page: page, products: paginatedProducts });
};

export { GET };
