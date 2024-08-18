// pages/404.js
"use client"
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const Custom404 = () => {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center h-screen p-4 text-center bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-xl text-gray-700">
          Oops! The page you're looking for does not exist.
        </p>
        <p className="mt-2 text-gray-500">
          You might want to go back to the{' '}
          <Link href="/">
             homepage
          </Link>{' '}
          or check the URL for mistakes.
        </p>
        <button
          onClick={() => router.back()}
          className="mt-6 flex items-center px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          <ArrowLeft className="mr-2" />
          Go Back
        </button>
      </div>
    </main>
  );
};

export default Custom404;
