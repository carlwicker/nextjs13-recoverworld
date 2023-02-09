import EmailWeb from "./EmailWeb";
import Social from "./Social";
import TextBlock from "./TextBlock";

export default function Footer() {
  return (
    <div className="flex w-full justify-between lg:gap-40 gap-10 lg:pt-20 pt-10 lg:pb-40 pb-20 lg:flex-row flex-col">
      <div className="lg:w-1/3">
        <EmailWeb />
      </div>
      <div className="lg:w-1/3">
        <TextBlock />
      </div>
      <div className="lg:w-1/3">
        <Social />
      </div>
    </div>
  );
}
