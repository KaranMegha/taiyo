import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-blue-300">
            <button onClick={() => setOpen(!open)} className="p-3 sidebar_button" >
                            {open?"Open Sidebar":"Close Sidebar"}
                        </button>
            <div
                className={` ${
                    open ? "hidden" : "w-60 h-100"
                } flex flex-col h-screen p-2 bg-blue-300 shadow duration-300`}
            >
                <Link className="text-black py-5 cursor-pointer text-2xl" to='/'>Contact</Link>
                <Link className="text-black py-5 cursor-pointer text-2xl" to='/report'>Charts and Maps</Link>

            </div>
            </div>
    );
}