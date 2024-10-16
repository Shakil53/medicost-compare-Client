import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import banner from '../../../assets/sectionImages/deviceEqu/reatments.jpg';
import treatMentCarousel1 from '../../../assets/sectionImages/deviceEqu/1.jpg'
import treatMentCarousel2 from '../../../assets/sectionImages/deviceEqu/2.jpg'
import treatMentCarousel3 from '../../../assets/sectionImages/deviceEqu/3.jpg'
import treatMentCarousel4 from '../../../assets/sectionImages/deviceEqu/4.jpg'
import treatMentCarousel5 from '../../../assets/sectionImages/deviceEqu/5.jpg'
import treatMentCarousel6 from '../../../assets/sectionImages/deviceEqu/6.jpg'
import treatMentCarousel7 from '../../../assets/sectionImages/deviceEqu/7.jpg'
import treatMentCarousel8 from '../../../assets/sectionImages/deviceEqu/8.jpg'
import treatMentCarousel9 from '../../../assets/sectionImages/deviceEqu/9.jpg'


const deviceAndEquip = [
    { id: 1, src: treatMentCarousel1, name: 'Vwash Plus 100 ml', product: 'Intimate Wash', discountPrice: '450.0', regularPrice: '460.0' },
    
    { id: 2, src: treatMentCarousel2, name: 'New Whisper Maxi Nights (15 Pads)', product: 'Sanitary Napkin', discountPrice: '365.0', regularPrice: '370.5' },
    
    { id: 3, src: treatMentCarousel3, name: 'Norix 1', product: 'Tablet', discountPrice: '63', regularPrice: '70' },
    
    { id: 4, src: treatMentCarousel4, name: 'Freedom Heavy Flow Wings 16pads', product: 'Sanitary Napkin', discountPrice: '190.0', regularPrice: '195.0' },
    
    { id: 5, src: treatMentCarousel5, name: 'Joya Extra Heavy Flow Wings 8 Pad', product: 'Sanitary Napkin', discountPrice: '104.5', regularPrice: '115.0' },
    
    { id: 6, src: treatMentCarousel6, name: 'Veet Hair Removal 25g', product: 'Cream', discountPrice: '108.5', regularPrice: '115.0' },
    
    { id: 7, src: treatMentCarousel7, name: 'Getwell Get Sure Pregnancy Test Cassette', product: 'Pregnancy test strip', discountPrice: '80', regularPrice: '85' },
    
    { id: 8, src: treatMentCarousel8, name: 'Good news Digital Pregnancy Cassette', product: 'Test device', discountPrice: '62.0', regularPrice: '65.0' },
    
    { id: 9, src: treatMentCarousel9 , name: 'Freedom Heavy Flow Wings 16pads', device: 'Sanitary Napkin', discountPrice: '190.0', regularPrice: '195.0' }
];


const DevicesEquipment = () => {
    return (
        <div className="w-full ">
        <h1 className='text-center p-3 text-4xl font-bold text-gray-600 mb-5'>Device and Equipment</h1>
        <div className="flex justify-center items-center h-auto overflow-hidden bg-background mb-5">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full max-w-6xl"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {deviceAndEquip.map((image) => (
                        <CarouselItem key={image.id} className="pl-2 md:pl-2 basis-1/2 md:basis-1/4">
                            <div className="p-1">
                                <Card className="shadow-lg ml-1">
                                    <CardContent className="flex aspect-square items-center justify-center p-2">
                                        <img
                                            src={image.src}
                                            alt={`Carousel item ${image.id}`}
                                            width={400}
                                            height={400}
                                            className="rounded-md object-cover"
                                        />
                                    </CardContent>
                                    <div className="p-4">
                                        <h1 className="truncate text-lg font-semibold">{image.name}</h1>
                                        <p className="text-gray-500 text-sm">{image.device}</p>

                                        <p>Best Price: <span className="text-green-500">৳{image.discountPrice}</span> 
                                        <span className="text-red-400 line-through ml-1">৳{image.regularPrice}</span></p>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
        {/* banner---------- */}
        <div className='flex p-1 sm:p-4'>
                <img src={banner} className='h-24 sm:h-60 w-[120px] sm:w-[500px] bg-gradient-to-r from-teal-100 to-teal-400'></img>
                <div className='h-24 sm:h-60  bg-gradient-to-r from-teal-400 to-teal-200 p-0 sm:p-4 flex flex-col justify-between'>
                    <div className='space-y-0 sm:space-y-2'>
                        <h1 className='text-start text-md sm:text-5xl font-bold bg-gradient-to-tr from-fuchsia-50 to-fuchsia-200 text-fuchsia-100 bg-clip-text text-transparent'>
                           Device and Equipment
                        </h1>
                        <p className='text-gray-500 font-semibold text-xs sm:text-base'>
                        Explore MedicostCompare extensive range of skincare products designed to your skin. <span className="hidden sm:block">From hydrating moisturizers to targeted treatments, achieve a radiant complexion and address your specific skincare needs with our curated selection.</span>
                        </p>
                    </div>
                    <div className='mt-auto flex justify-end mr-1 sm:mr-5'>
                        <button className='border px-1.5 sm:px-3 py-0.5 sm:py-2 rounded bg-gradient-to-b from-fuchsia-50 to-fuchsia-200 text-gray-600 font-bold sm:font-semibold text-xs sm:text-base'>
                            See more
                        </button>
                    </div>
                </div>


            </div>

    </div>
    );
};

export default DevicesEquipment;