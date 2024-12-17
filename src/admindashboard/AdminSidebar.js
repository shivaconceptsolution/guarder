import { Link } from "react-router-dom";

export default function AdminSidebar()
{
   return(<div>
         <ul>
         <li><Link to="/admin">Home</Link></li> 
         <li><Link to="/admin/viewfeed">View Feedback</Link></li>
         <li><Link to="/admin">Home</Link></li> 
         <li><Link to="/admin/viewfeed">View Feedback</Link></li> 
         <li><Link to="/admin">Home</Link></li> 
         <li><Link to="/admin/viewfeed">View Feedback</Link></li> 
         <li><Link to="/admin">Home</Link></li> 
         <li><Link to="/admin/viewfeed">View Feedback</Link></li> 
         <li><Link to="/admin">Home</Link></li> 
         <li><Link to="/admin/viewfeed">View Feedback</Link></li> 
         <li><Link to="/admin">Home</Link></li> 
         <li><Link to="/admin/viewfeed">View Feedback</Link></li> 
         <li><Link to="/admin">Home</Link></li> 
         <li><Link to="/admin/viewfeed">View Feedback</Link></li> 
         <li><Link to="/admin">Home</Link></li> 
         <li><Link to="/admin/viewfeed">View Feedback</Link></li>  
         <li><Link to="/admin/logout">Logout</Link></li>     
         </ul> 
   </div>)
}