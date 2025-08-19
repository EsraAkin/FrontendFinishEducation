import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
//import { Contact } from "@/components/contact/Contact";


export const metadata = {
  title: "Contact",
  description:
    "You can always contact us for more information and support.",
};

export default async function ContactPage() {


  return (
    <>
    <PageHeader title="Contact" />
      <Spacer />
      
    </>
  );
}
