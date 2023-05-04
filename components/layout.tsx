import Footer from './footer';
import Meta from './meta';
import Navbar from './navigation-bar';
import Post from '../interfaces/post';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
  posts: Post[];
};

const Layout = ({ preview, children, posts }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-repeat bg-[length:360px_240px] bg-[url('/assets/main-bg.png')]">
        <Navbar posts={posts} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
