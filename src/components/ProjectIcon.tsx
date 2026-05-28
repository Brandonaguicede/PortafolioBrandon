import { Database, Globe, Layers, Server } from "lucide-react";

function ProjectIcon({ type }: { type: string }) {
  if (type === "layers") return <Layers size={20} className="text-white" />;
  if (type === "database") return <Database size={20} className="text-white" />;
  if (type === "globe") return <Globe size={20} className="text-white" />;
  return <Server size={20} className="text-white" />;
}

export default ProjectIcon;
