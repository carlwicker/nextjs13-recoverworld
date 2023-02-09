interface ICatLabel {
  label: string;
  catNum: string;
}

export default function CatLabel({ label, catNum }: ICatLabel) {
  return (
    <div className="flex gap-2 text-xs">
      <div className="hover:text-red-600 transition duration-500 ease-out cursor-pointer">
        {catNum}
      </div>
      {" | "}
      <div className="hover:text-red-600 transition duration-500 ease-out cursor-pointer">
        {label}
      </div>
    </div>
  );
}
