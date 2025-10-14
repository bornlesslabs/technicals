import React from 'react';
import Code from '../../components/Code';

export const metadata = {
  title: 'Code',
};

export default function Page() {
  const bg = '/placeholder.jpg';

  return (
    <main>
      <Code bgImage={bg} />
    </main>
  );
}
