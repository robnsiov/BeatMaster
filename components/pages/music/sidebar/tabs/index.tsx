"use client";

import Card from "./card";
import Musics from "./musics";
import Tab from "./tab";
import TabsImpl from "./types";
import useTabs from "./use";

const Tabs = ({ toggleOpen }: TabsImpl) => {
  const { activeTab, setActiveTab } = useTabs();
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-full flex justify-center items-center">
          <Tab
            onClick={() => setActiveTab("musics")}
            active={activeTab === "musics"}
          >
            Musics
          </Tab>
          <Tab
            onClick={() => setActiveTab("playlists")}
            active={activeTab === "playlists"}
          >
            Playlists
          </Tab>
        </div>
        <div
          className="w-full flex justify-center items-center flex-col
         relative mt-4"
        >
          <Card active={activeTab === "musics"}>
            <Musics toggleOpen={toggleOpen} />
          </Card>
          <Card active={activeTab === "playlists"}>
            <Musics isPlaylist={true} toggleOpen={toggleOpen} />
          </Card>
        </div>
      </div>
    </>
  );
};
export default Tabs;
