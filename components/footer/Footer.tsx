import EmailWeb from "./EmailWeb";
import Social from "./Social";
import TextBlock from "./TextBlock";

export default function Footer() {
  return (
    <div className="flex w-full justify-between gap-40 pt-20 pb-40">
      <div className="w-1/3">
        <EmailWeb />
      </div>
      <div className="w-1/3">
        <TextBlock />
      </div>
      <div className="w-1/3">
        <Social />
      </div>
    </div>
  );
}
