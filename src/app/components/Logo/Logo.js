import Link from "next/link";
import Image from "next/image";
import LogoImg from "../../../../public/logo.png";

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <Image src={LogoImg} alt="logo" style={{ width: "70px", height:"36px" }} />
      </Link>
    </div>
  );
}
