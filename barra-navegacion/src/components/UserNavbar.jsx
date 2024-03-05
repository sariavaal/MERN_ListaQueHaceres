import { useContext } from "react";
import  UserContext  from "../components/UserContext";


const UserNavbar = () =>{
    const {userName} = useContext(UserContext);

    return (
        <nav className="bg-blue-500 border-gray-200 dark:blue-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {userName && <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-auto">Hola! {userName} </span>}
            </div>

        </nav>
    
    )
}

export default UserNavbar;