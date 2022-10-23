import { Card } from "../components/Card";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function dashboard() {
    return (
        <>
        <div className=" bg-slate-900 ">
        <Navbar></Navbar>
        <div className=" my-2 "> </div>
        <Sidebar></Sidebar>
        </div>
        <div className="z-10">
            <Card></Card>
        </div>

        </>

    )
}