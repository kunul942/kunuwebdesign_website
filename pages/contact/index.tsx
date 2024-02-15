import { NextPage } from 'next';
import { ContactPageDesktop } from '../../components/Desktop/ContactPageDesktop';
import { ContactPageMobile } from '../../components/Mobile/ContactPageMobile';

const ContactPage: NextPage = () => {
    return (
        <div>
            <ContactPageDesktop />
            <ContactPageMobile />
        </div>
    );
};

export default ContactPage;
