import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const links = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/journal',
      label: 'Journal',
    },
    {
      href: '/history',
      label: 'History',
    },
  ];
  return (
    <div className="wrapper">
      <aside className="px-2 py-4">
        <div>
          <Image src="/smile.png" alt="logo" width={64} height={64} />
        </div>
        <nav className=" mt-4">
          <ul>
            {links.map((link) => (
              <li
                key={link.href}
                className="py-2 text-xl transition-colors duration-300 rounded hover:bg-zinc-100"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <header className="border-b border-s border-black/10">
        <div className="h-full w-full px-6 flex items-center justify-end">
          <UserButton />
        </div>
      </header>
      <main className=" border-s border-black/10 bg-zinc-400/10 flex h-full">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
