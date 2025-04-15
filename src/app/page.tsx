import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import Header from "@/components/home/Header";
import NewArrivals from "@/components/home/NewArrivals";
import SendMessageForm from "@/components/home/SendMessageForm";
import Testimonials from "@/components/home/Testimonials";
import WhereToFindUs from "@/components/home/WhereToFindUs";
import WhyChooseUs from "@/components/home/WhyChooseUs";

function Home() {
  return (
    <>
      <Header />
      <NewArrivals />
      <WhyChooseUs />
      <Testimonials />
      <WhereToFindUs />
      <SendMessageForm />
      <FAQ />
      <FinalCTA />
    </>
  );
}

export default Home;
