import type { Route } from "./+types/home";
import LandingPage from "../home/main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ReOL — Legacy and EOL Software Maintenance & Support" },
    { name: "description", content: "Empowering businesses by stabilizing and maintaining EOL software. We safeguard your company from forced implementations and legacy systems collapse." },
  ];
}

export default function Home() {
  return <LandingPage />;
}
