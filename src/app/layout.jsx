import "@/styles/index.scss";
import {montserrat} from "@/helpers/fonts";
import { config } from "@/helpers/config";
import { Topbar } from "@/components/common/header/Topbar";
import { MainMenuBar } from "@/components/common/header/MainMenuBar";
import { Footer } from "@/components/common/footer/Footer";


export const metadata = {
  title: {
    template:`%s |${config.project.name}`,
    default:`${config.project.name}-${config.project.name}`,
  },
  description:config.project.description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} `}>
        <Topbar/>
        <MainMenuBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}