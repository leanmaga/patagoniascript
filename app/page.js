import { Footer, ContactForm } from "../components";
import {
  Hero,
  About,
  Feedback,
  GetStarted,
  Insights,
  WhatsNew,
  World,
  Explore,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Hero />

    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>

    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>

    <World />

    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
      <ContactForm />
    </div>

    <Footer />
  </div>
);

export default Page;
