import Image from "next/image";
import imge from "../../Public/images/kotot.png";
import Counter from "./counter";
import Test from "./Test";
import Contact from "./Contact";
import Qustiton from "./Qustiton";
import Gamat from "./Gamat";
import ManNahno from "./ManNahno";
import Tatata from "./Tatata";
import Search from "./Search";
import Servises from "./Servises";
function Deva() {
  return (
    <>
      <Image
        src={imge}
        alt=""
        className="w-full h-52 mt-[9rem] max-lg:mr-12 max-lg:min-w-[75rem] absolute -z-10"
      />
      <Search />
      <Counter />
      <Qustiton />
      <Gamat />
      <Servises />
      <Tatata />
      <Test />
      <ManNahno />
      <Contact />
    </>
  );
}

export default Deva;
