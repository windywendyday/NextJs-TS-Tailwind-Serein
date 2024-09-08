import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import Gallery from "@/components/Gallery/Gallery";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
      <div className="bg-mildBlue h-full">
        <Header />
        <Banner />
        <Gallery />
        <Footer />
      </div>
  );
}
