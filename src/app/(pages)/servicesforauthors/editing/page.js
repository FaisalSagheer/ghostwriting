import Services from "../../services/page"
import Benefits from "./_components/Benefits"
import ContactMin from "./_components/ContactMini"
import HeroSection from "./_components/HeroSection"
import { ReactLenis} from 'lenis/react';

function Editing() {
    return (
        <ReactLenis root>
            <HeroSection />
            <Benefits />
            <Services />
            <ContactMin />
            <div className='bg-primary text-black'>
                {/* <Faq /> */}
            </div>
        </ReactLenis>
    )
}

export default Editing