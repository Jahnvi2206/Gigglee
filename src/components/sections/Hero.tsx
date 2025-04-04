import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section className={cn('w-full min-h-[600px] py-22 px-6 text-white relative overflow-hidden grid items-end', className)} style={{backgroundImage: "linear-gradient(to right, rgba(31, 5, 34, 0.8),rgba(80, 21, 89, 0.8)), url('/images/hero-section-image.jpg') !important", backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
      <div className="max-w-6xl flex flex-col items-start text-left">
        <h1 className="text-display mb-6 text-7xl font-bold">gig-gle</h1>
        <p className="text-lg mb-8 max-w-2xl text-gray-200">
          Connecting young individuals with disabilities to meaningful work opportunities that celebrate their unique abilities.
        </p>
        <div>
          <input type="text" className='bg-white/60 py-2 px-3 min-w-[400px] text-lg rounded-xl' placeholder='Search jobs, skills, or companies' />
          <button className='bg-primary py-2 px-3 text-lg rounded-xl'>Search</button>
        </div>
      </div>
    </section>
  );
}