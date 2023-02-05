import Hamburger from "./Hamburger";
import Navigation from "./Navigation";

function TopBar() {
  return (
    <div className="container mx-auto py-2 flex justify-between w-full items-center h-[50px]">
      <a href="#" className="logo font-bold uppercase text-xl">
        RecoverWorld
      </a>
      <div className="lg:hidden">
        <Hamburger />
      </div>
      <div className="lg:block hidden">
        <Navigation />
      </div>
    </div>
  );
}

export default TopBar;
