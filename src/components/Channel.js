import { HashtagIcon } from "@heroicons/react/24/outline";

function Channel({ id, channelName }) {

   const setChannel = () => {};
    
   return (
      <div
        className="font-medium flex items-center cursor-pointer hover:bg-[#3A3C43] p-1 rounded-md  hover:text-white"
        onClick={setChannel} >
        <HashtagIcon className="h-5 mr-2" /> {channelName}
      </div>
    );
    
  }
  
  export default Channel;