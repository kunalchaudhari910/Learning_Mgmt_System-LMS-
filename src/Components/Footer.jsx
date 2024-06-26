import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <>
            <footer className='relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20'>
                <section className='text-lg text-red'>
                    Copyright {year} | All rights reserved
                </section>
                <section className='flex items-center justify-center gap-5 text-2xl text-white'>
                    <a target='_blank' href='https://www.facebook.com/' className='hover:text-yellow-400 transition-all ease-in-out duration-300'>
                        <BsFacebook />
                    </a>
                    <a target='_blank' href='https://www.instagram.com/' className='hover:text-yellow-400 transition-all ease-in-out duration-300'>
                        <BsInstagram />
                    </a>
                    <a target='_blank' href='https://www.linkedin.com/' className='hover:text-yellow-400 transition-all ease-in-out duration-300'>
                        <BsLinkedin />
                    </a>
                    <a target='_blank' href='https://twitter.com/' className='hover:text-yellow-400 transition-all ease-in-out duration-300'>
                        <BsTwitter />
                    </a>
                </section>
            </footer>
        </>
    );

}

export default Footer;