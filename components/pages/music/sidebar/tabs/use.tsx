import { useState } from "react";
import { ActiveTabImpl } from "./types";

const useTabs = () => {
  const [activeTab, setActiveTab] = useState<ActiveTabImpl>("musics");
  return { activeTab, setActiveTab };
};
export default useTabs;
