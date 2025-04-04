import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface JourneyProps {
  className?: string;
}

export function Journey({ className }: JourneyProps) {
  return (
    <section className={cn('w-full py-24 px-6 bg-[#1f0522] text-white', className)}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h2 className="text-5xl font-bold mb-6">Ready to start your journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of young individuals discovering the meaningful opportunities that celebrate their abilities
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/profile-setup" passHref>
              <Button className="text-lg px-8 py-6 h-auto bg-[#501559] hover:bg-[#3D2B79] text-white border-none w-full sm:w-auto">
                Create your profile
              </Button>
            </Link>
            <Link href="/opportunities" passHref>
              <Button variant="outline" className="text-lg text-[#501559] px-8 py-6 h-auto border-2 hover:bg-white/10 w-full sm:w-auto">
                Search Opportunities
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full aspect-square">
          <Image
            src="/images/journey.png"
            alt="Abstract illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section >
  );
}