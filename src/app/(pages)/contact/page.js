// 'use client'
import Faq from '@/components/common/Faq'
import Details from './_components/Details'
import Locations from './_components/Locations'
import { ReactLenis} from 'lenis/react';
import ContactForm from './_components/ContactForm';

function Contact() {
    return (
        <div>
            <ReactLenis root>
                {/* <HeroSection /> */}
                <ContactForm />
                <Details />
                <Locations />
                <div className='bg-primary text-secondary-foreground'>
                    <Faq />
                </div>
            </ReactLenis>
        </div>
    )
}

export default Contact
