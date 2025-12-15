// 'use client'
import Faq from '@/components/common/Faq'
import Details from './_components/Details'
import Locations from './_components/Locations'
import ContactMail from './_components/mail'
import { ReactLenis} from 'lenis/react';

function Contact() {
    return (
        <div>
            <ReactLenis root>
                {/* <HeroSection /> */}
                <ContactMail />
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
