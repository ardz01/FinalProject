

import ServerIcon from "../components/ServerIcon";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { Redirect } from "react-router-dom";


function Home() {
  
    const [user] = useAuthState(auth);

  return (
    <>
      {!user && <Redirect to="/channels" />}
      <div>
        <div>
            <div>
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

          
            
        </div>
      </div>
      
  
  </>
  );
}

export default Home;