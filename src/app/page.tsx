import Header from "@/components/home/Header";
import NewArrivals from "@/components/home/NewArrivals";
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
    </>
  );
}

export default Home;
