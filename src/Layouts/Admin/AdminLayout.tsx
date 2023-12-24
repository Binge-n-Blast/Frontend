import { ReactNode } from "react";
import Sidebar from "../../Components/Admin/Sidebar/Sidebar";

interface AdminLayoutProps {
    children: ReactNode;
  }
  
const AdminLayout: React.FC<AdminLayoutProps> = ({children}) => {
  return (
    <>
    <Sidebar/>
    {children}
    
    </>
  )
}

export default AdminLayout