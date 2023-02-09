

import ServerIcon from "../components/ServerIcon";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { Redirect } from "react-router-dom";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/24/outline";
import { MicrophoneIcon, PhoneIcon, Cog8ToothIcon } from "@heroicons/react/24/solid";
import Channel from "./Channel";
import Chat from "../components/Chat";
import { useCollection } from "react-firebase-hooks/firestore";




function Home() {
  
    const [user] = useAuthState(auth);
    const [channels] = useCollection(db.collection("channels"));

    const handleAddChannel = () => {
      const channelName = prompt("Enter a new channel name");
  
      if (channelName) {
        db.collection("channels").add({
          channelName: channelName,
        });
      }
    };

  return (
    <>
      {!user && <Redirect to="/" />}
      <div className="flex h-screen">
        <div className="flex flex-col space-y-3 bg-[#202225] p-3 min-w-max">
            <div className="server-default hover:bg-discord_purple">
            <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
            className="w-30 h-12 object-contain"
             alt=""
        />
            </div>

        <hr className=" border-gray-700 border w-8 mx-auto" />
          <ServerIcon image="https://rb.gy/qidcpp" />
          <ServerIcon image="https://rb.gy/zxo0lz" />
          <ServerIcon image="https://rb.gy/qidcpp" />
          <ServerIcon image="https://rb.gy/zxo0lz" />

          <div className="server-default hover:bg-discord_green group">
            <PlusIcon className="text-discord_green h-7 group-hover:text-white" />
          </div>
        </div>

        <div className="bg-[#2f3136] flex flex-col min-w-max">
          <h2  className="flex text-white font-bold text-sm items-center justify-between border-b border-gray-800 p-4 hover:bg-[#34373C] cursor-pointer">
            UniBuddy Server... <ChevronDownIcon className="h-5 ml-2" />
          </h2>
          <div className="text-[#8e9297] flex-grow overflow-y-scroll scrollbar-hide">
          <div className="flex items-center p-2 mb-2">
              <ChevronDownIcon className="h-3  mr-2" />
              <h4 className="font-semibold ">Channels</h4>
              <PlusIcon
                className="h-6 ml-auto cursor-pointer hover:text-white"
                onClick={handleAddChannel}
              />
            </div>
            <div className="flex flex-col space-y-2 px-2 mb-4">
            {channels?.docs.map((doc) => (
                <Channel
                  key={doc.id}
                  id={doc.id}
                  channelName={doc.data().channelName}
                />
              ))}

            </div>
          </div>
          <div className="bg-[#292b2f] p-2 flex justify-between items-center space-x-8">
            <div className="flex items-center space-x-1">
            <img
                src={user?.photoURL}
                alt=""
                className="h-10 rounded-full"
                onClick={() => auth.signOut()}
              />
            <h4 className="text-white text-xs font-medium">
                {user?.displayName}{" "}
                <span className="text-[#b9bbbe] block">
                  #{user?.uid.substring(0, 4)}
                </span>
              </h4>
            </div>

            <div className="text-gray-400 flex items-center">
              <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                <MicrophoneIcon className="h-5 icon " />
              </div>
              <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                <PhoneIcon className="h-5 icon" />
              </div>
              <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                <Cog8ToothIcon className="h-6 icon" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#36393f] flex-grow">
          <Chat />
        </div>

        
      </div>
      
  
  </>
  );
}

export default Home;