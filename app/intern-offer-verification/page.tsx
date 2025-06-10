'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';

const InternOfferVerificationPage: React.FC = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
console.log(code)
  const allowedCode = 'bh0908nu';
  const pdfUrl = '/pdf/bhanu-olt.pdf'; // Path to your hardcoded PDF

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Intern Offer Verification</h1>

      {code === allowedCode ? (
        <div className="w-full" style={{ height: '80vh' }}>
          <iframe
            src={pdfUrl}
            width="100%"
            height="100%"
            title="Intern Offer Letter"
          />
        </div>
      ) : (
        <p>Offer letter not found or invalid code.</p>
      )}
    </div>
  );
};

export default InternOfferVerificationPage;
