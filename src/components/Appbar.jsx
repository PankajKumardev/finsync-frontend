export const Appbar = () =>{
    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
           <div className="flex font-bold text-[#00baf2] text-xl"> Fin<p className="text-[#0f4a8a;]">Sync</p></div>
        </div> 
        <div className="flex">
            <div className="flex flex-col h-full justify-center mr-4 font-bold text-blue-900 ">Hello,</div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-black">User</div>
            </div>
        </div>
    </div>
}