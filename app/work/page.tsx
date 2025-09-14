import React from 'react';
import Work from '../../components/Work';

export const metadata = {
  title: 'Work',
};

export default function Page() {
  // Use a public asset as default background; replace with your Figma asset URL if needed
  const bg = '/placeholder.jpg';

  return (
    <main>
      <Work bgImage={bg} />
    </main>
  );
}
