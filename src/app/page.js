import { EnvelopeOpenIcon, Link1Icon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={'/recipes'}><Link1Icon/>Go To the APP</Link>
    </main>
  );
}
