import Icon from "../atoms/Icon";
import Container from "../atoms/Container";

const Header = () => {
  return (
    <main className="bg-bg-header py-[25px]">
      <Container variant="wrapper">
        <Container variant="flexed">
          <div>
            icon
            <Icon />
          </div>
          <div className="flex gap-[5rem]">
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
          </div>
        </Container>
      </Container>
    </main>
  );
};

export default Header;
