import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Search, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image';
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Header() {
    type PhoneImage = {
        name: string,
        src: string
    }

    // Phone images
    const phoneImages: PhoneImage[] = [{
        name: "Samsung Galaxy Z Flip 6",
        src: "/images/phones/samsung-galaxy-z-flip-six.png"
    },
    {
        name: "Iphone 16 Pro Max",
        src: "/images/phones/iphone-16-pro-max.png"
    },
    {
        name: "Samsung S25 Ultra",
        src: "/images/phones/samsung-s25-ultra.png"
    }
]

  return (
    <header className='flex flex-col md:flex-row gap-8 items-center md:justify-between py-40 md:py-60'>
        {/* Copy and CTAs */}
        <article className='px-4 md:px-32 md:w-1/2'>
            {/* Copy */}
            <article className="flex flex-col gap-2 justify-center">
                {/* Badge */}
                <Badge className="bg-blue-200 text-sky-600 px-8 py-2 flex gap-2 items-center font-medium text-center w-fit text-sm md:text-md">
                    <p>New stock weekly. Limited units. Move fast, chat later</p>
                </Badge>

                {/* Heading */}
                <h2 className='text-5xl md:text-6xl font-bold'>Mutare’s Trusted Source for <span className='bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-blue-700'>Smartphones</span></h2>
                <p className='text-slate-500'>Whether you’re looking for the latest iPhone, Samsung, or something in between, we’ve got it all. No more endless scrolling. Just grab your phone, pick a deal, and let us handle the rest. Smart phones for smart shoppers, right here in Mutare.</p>
            </article>

            {/* CTAs */}
            <article className="flex flex-col md:flex-row gap-2 items-center mt-4">
                <Button className='w-full md:w-fit' asChild>
                   <Link href="/shop">
                   <ShoppingCart />
                   Shop Phones</Link>
                </Button>
                <Button className='w-full md:w-fit' variant="secondary" asChild>
                   <Link href="/shop">
                   <Search />
                   Browse Deals</Link>
                </Button>
            </article>
        </article>

        {/* Phone images */}
        <article className="md:w-1/2 w-fit flex flex-col justify-center items-center">
        <article className="bg-gradient-to-r min-h-[400px] md:min-h-auto w-fit from-sky-300 to-blue-700 flex h-full rounded-md justify-center items-center">
            

<Carousel className="w-fit max-w-xs">
      <CarouselContent>
      {
                phoneImages.map((phone: PhoneImage, index: number) => (
                    <CarouselItem className='flex justify-center items-center' key={index}>
                    <Image 
                    width={400}
                    height={400}
                    src={phone.src} 
                    alt={`Smart Switch Mobile's ${phone.name}`} />
                    </CarouselItem>
                ))
            }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      </Carousel>
        </article></article>
    </header>         
  )
}

export default Header
