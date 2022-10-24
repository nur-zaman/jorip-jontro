import { Card } from "../components/Card";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function dashboard() {
    return (
        
        <div className=" bg-slate-900">

        <Navbar></Navbar>
        <div className=" flex">
         
        {/* <div className=" my-2 "> </div> */}
        <Sidebar className="" ></Sidebar>
       
        <div className="w-full flex">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>

        </div>
        </div>

        </div>


        

    )
}