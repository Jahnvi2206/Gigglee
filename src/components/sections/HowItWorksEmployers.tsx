import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HowItWorksEmployersProps {
    className?: string;
}

export function HowItWorksEmployers({ className }: HowItWorksEmployersProps) {
    return (
        <section className={cn('w-full py-24 px-6 bg-[#1f0522] text-white', className)}>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 text-center">How gig-gle works</h2>
                <h3 className="text-2xl font-medium mb-16 text-center opacity-90">For our employers</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="relative w-full aspect-square mb-8 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/images/employers-1.jpg"
                                alt="Search skills or post jobs"
                                fill
                                className="rounded-2xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                            />
                        </div>
                        <h4 className="text-xl font-semibold mb-4">Search the skills you require/Post the jobs you wish to have done</h4>
                    </div>
                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="relative w-full aspect-square mb-8 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/images/employers-2.jpg"
                                alt="Browse profiles"
                                fill
                                className="rounded-2xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                            />
                        </div>
                        <h4 className="text-xl font-semibold mb-4">Browse through various profiles and select the best fit for the job</h4>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="relative w-full aspect-square mb-8 transition-transform duration-300 group-hover:scale-105">
                            <Image 
                                src="/images/employers-3.jpg"
                                alt="Connect and get work done"
                                fill
                                className="rounded-2xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                            />
                        </div>
                        <h4 className="text-xl font-semibold mb-4">Connect, get the work done & we hope it is a success!</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}