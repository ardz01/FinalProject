import {Bars3Icon} from "@heroicons/react/24/outline";
function Header() {
    return (
      <header className="bg-discord_blue flex items-center justify-between py-4 px-6">
        <a href="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwBoMCeEcDr0UoWD1SmP0K8Oy_w5-WGcMpw51BRIg_kuh4nyklwNF9HS3fzFaoCBPNxg&usqp=CAU"
            className="w-32 h-12 object-contain"
            alt=""
          />
        </a>
        <div className="hidden lg:flex  space-x-6 text-white ">
          <a className="link">Download</a>
          <a className="link">Why Unibuddy?</a>
          <a className="link">School</a>
          <a className="link">Safety</a>
          <a className="link">Support</a>
        </div>
        <div className="flex space-x-4">
          <button
            className="bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium">
            Login
          </button>
          <Bars3Icon className="h-9 text-white cursor-pointer lg:hidden" />
        </div>
      </header>
    );
  }
  
  export default Header;
  