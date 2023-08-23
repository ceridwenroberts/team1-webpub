import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/gallery">
            <span>Gallery</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span>About us</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
