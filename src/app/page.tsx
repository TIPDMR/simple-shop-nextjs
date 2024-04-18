import React from 'react';
import HomePage from '@/views/Home/Page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Simple Shop witch NextJS 14',
  description: 'Example simple shop witch NextJS 14',
};

export default function Home() {
  return <HomePage />;
}
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
