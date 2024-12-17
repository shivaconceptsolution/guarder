import { Link } from "react-router-dom"

export default function Footer()
{
    return( <footer className="container-fluid footer_section">
     <p>
       &copy; <span id="currentYear"></span> All Rights Reserved. Design by
       <a href="https://html.design/">Free Html Templates</a>
     </p>
   </footer>)
}