import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <header className={cn('w-full py-4 px-6 flex items-center justify-between bg-[#1f0522]', className)}>
      <Link href="/" className="text-white text-2xl font-bold">gig-gle</Link>
      <nav className="hidden md:flex items-center space-x-6">
        <Link href="/about" className="text-white text-xl rounded-2xl hover:bg-[#300A36] transition-colors p-5">About Us</Link>
        <Link href="/login" className="text-white text-xl rounded-2xl hover:bg-[#300A36] transition-colors p-5">Sign Up/Login</Link>
        <Link href="/opportunities" className="text-white text-xl rounded-2xl hover:bg-[#300A36] transition-colors p-5">Job Categories</Link>
        <Link href="#" className="text-white text-xl rounded-2xl hover:bg-[#300A36] transition-colors p-5">Accessibility Controls</Link>
      </nav>
      <div className="md:hidden">
        {/* Mobile menu button would go here */}
        <button className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
}