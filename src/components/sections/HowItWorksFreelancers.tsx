import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HowItWorksFreelancersProps {
  className?: string;
}

export function HowItWorksFreelancers({ className }: HowItWorksFreelancersProps) {
  return (
    <section className={cn('w-full py-24 px-6 bg-[#1f0522] text-white', className)}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">How gig-gle works</h2>
        <h3 className="text-2xl font-medium mb-16 text-center opacity-90">For our freelancers</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative w-full aspect-square mb-8 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/images/freelancers-1.jpg" 
                alt="Create your profile" 
                fill
                className="rounded-2xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <h4 className="text-xl font-semibold mb-4">Create your profile & share your preferences</h4>
            <p className="text-base opacity-90">Build your accessible profile highlighting your skills and preferences</p>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative w-full aspect-square mb-8 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/images/freelancers-2.jpg" 
                alt="Find the perfect job" 
                fill
                className="rounded-2xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <h4 className="text-xl font-semibold mb-4">Find the perfect job suited to you</h4>
            <p className="text-base opacity-90">Our AI matches you with suitable opportunities based on your abilities</p>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative w-full aspect-square mb-8 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/images/freelancers-3.jpg" 
                alt="Connect and use your skills" 
                fill
                className="rounded-2xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <h4 className="text-xl font-semibold mb-4">Connect & put your skills to use</h4>
            <p className="text-base opacity-90">Connect with inclusive employers, start your journey and become one success story</p>
          </div>
        </div>
      </div>
    </section>
  );
}