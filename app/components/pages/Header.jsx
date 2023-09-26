import logo from "../assets/img/logo (2).png";
import Container from "../atoms/Container";
import Image from "next/image";

const Header = () => {
  return (
    <main className="bg-bg-header sm:py-[20px] py-[8px]">
      <Container variant="wrapper">
        <Container variant="flexed">
          <div>
            <Image src={logo} alt="logo" width={80} height={80} />
          </div>
        </Container>
      </Container>
    </main>
  );
};

export default Header;
