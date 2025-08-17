import { config } from "@/helpers/config"
import Link from "next/link"
import { Container } from "react-bootstrap"
import "./topbar.scss";


export const Topbar = () => {
  return (
    <div className="topbar"><Container>
         <div className="slogan">

            <i className="pi pi-megaphone">
                {config.project.slogan}
            </i>
         </div>

         <Link href="/login" className="btn btn-primary">
         <i className="pi pi-user"></i>Login</Link>        
        </Container></div>
  )
}
