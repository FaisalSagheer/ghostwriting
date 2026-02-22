import Card from "./Card";

function ServicesSection( servicesSectionData ) {
    const { title, description, servicesItems } = servicesSectionData;
    return (
        <div className='bg-foreground mx-auto py-20 px-10 lg:px-0'>
            <div className='flex justify-center items-center flex-col space-y-5 text-center'>
                <h2 className='text-5xl'>{title}</h2>
                <p className='text-[1rem] lg:w-2xl'>{description}</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto pt-18 gap-12 lg:gap-6'>
                {servicesItems.map((services, index) =>
                    <Card CardData={services} key={index} />
                )}
            </div>
        </div>

    )
}

export default ServicesSection
