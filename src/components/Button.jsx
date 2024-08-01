export  function Button({onClick,label}) {
    return <button onClick={onClick}
    className="w-full  text-white bg-[#00baf2] hover:bg-gray-900 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
    >{label}</button>
}