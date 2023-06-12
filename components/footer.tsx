import { useRouter } from 'next/router';
import Container from './container';
import Image from 'next/image';

const Footer = () => {
  const router = useRouter();
  return (
    <footer className='bg-neutral-50 border-t border-neutral-200'>
      <Container>
        <div className='py-6 flex items-center justify-between'>
          <span className='text-gray-600'>
            Scroll back up, you missed the good part
          </span>
          <div className='flex space-x-4'>
            <a
              href='https://twitter.com/0xJub11'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                src={`${router.basePath}/assets/images/twitter.png`}
                alt='twitter logo'
                width='25'
                height='25'
              />
            </a>
            <a
              href='https://medium.com/@jackbloomfeld1'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                src={`${router.basePath}/assets/images/medium.png`}
                alt='medium logo'
                width='25'
                height='25'
              />
            </a>
            <a
              href='https://www.linkedin.com/in/jack-bloomfeld-90357b112/'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                src={`${router.basePath}/assets/images/linkedin.png`}
                alt='linkedin logo'
                width='25'
                height='25'
              />
            </a>
            <a
              href='https://github.com/jackbl1'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                src={`${router.basePath}/assets/images/github.png`}
                alt='github logo'
                width='25'
                height='25'
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
