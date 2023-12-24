import { ReactNode } from "react";
import Footer from "../../Components/User/Footer/Footer";
import Navbar from "../../Components/User/Navbar/Navbar";

interface UserLayoutProps {
  children: ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default UserLayout;
