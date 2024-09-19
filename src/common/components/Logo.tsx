import { Link } from "react-router-dom";
import { VisuallyHidden } from "@/common/styles/GlobalStyles";
import { scrollToTop } from "@/common/helpers/scrollToTop";

const logo = "public/images/icons/logo.svg";

export const Logo = () => {
  return (
    <Link to="/home" onClick={scrollToTop}>
      <VisuallyHidden>
        <h1>QPick Logo</h1>
      </VisuallyHidden>
      <img src={logo} alt="QPick Logo" width={85} height={30} />
    </Link>
  );
};
