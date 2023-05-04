import Link from 'next/link';
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import Post from '../interfaces/post';
import { useRouter } from 'next/router';

type Props = {
  posts: Post[];
};

const Navbar = ({ posts }: Props) => {
  const menuRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  useClickAway(menuRef, () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  });

  const randomArticle = `/posts/${
    posts?.[Math.floor(Math.random() * posts?.length)]?.slug
  }`;

  return (
    <>
      <div className='flex flex-wrap py-2'>
        <div className='w-full px-4'>
          <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-emerald-500 rounded'>
            <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
              <div className='w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start'>
                <Link
                  href='/'
                  className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white'
                >
                  Jbloomfeld.xyz
                </Link>
                <button
                  className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                  type='button'
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </button>
              </div>
              <div
                ref={menuRef}
                className={
                  'absolute z-10 w-40 mt-2 p-2 top-12 right-4 bg-white rounded shadow-lg lg:bg-transparent lg:shadow-none lg:p-0 lg:mt-0 lg:top-0 lg:w-auto lg:relative lg:flex' +
                  (menuOpen ? '' : ' hidden')
                }
                id='example-navbar-info'
              >
                <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
                  <li className='nav-item'>
                    <Link
                      href='/'
                      className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-emerald-500 hover:text-teal-800 lg:text-white lg:hover:opacity-75'
                    >
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      href='/about'
                      className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-emerald-500 hover:text-teal-800 lg:text-white lg:hover:opacity-75'
                    >
                      About
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      href={randomArticle}
                      className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-emerald-500 hover:text-teal-800 lg:text-white lg:hover:opacity-75'
                    >
                      Random Article
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
