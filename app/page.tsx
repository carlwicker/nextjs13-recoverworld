import Release from "@/components/release/Release";
import TopBar from "@/components/topbar/TopBar";

export default function Home() {
  return (
    <div className="container mx-auto">
      <TopBar />
      <Release />
    </div>
  );
}
