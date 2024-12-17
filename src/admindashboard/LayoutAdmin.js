import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import { useEffect } from "react";

export default function LayoutAdmin()
{
   const navigate = useNavigate()
   useEffect(()=>{
      let data = localStorage.getItem('loggedin')
      if(data==null){
           navigate("/login")
      }
   },[])
   return(<>
         <header className="container-fluid text-center p-3 bg-info">
            <h1>Admin Dashboard</h1>
         </header>
         <div className="row">
            <div className="col-md-4">
               <AdminSidebar />
            </div>
            <div className="col-md-8">
               <Outlet />
            </div>
         </div>
         <footer className="container-fluid text-center my-3 bg-info">
              <p>&copy;by Admin Dashboard</p>
         </footer>
   </>)
}