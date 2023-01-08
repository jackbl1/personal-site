import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-6 flex flex-col lg:flex-row items-center">
          Scroll back up, you missed the good part
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
