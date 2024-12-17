import Link from "next/link"

function NotFound(){
    return(
        <>
        <div className="w-full h-[500px] flex justify-center items-center">
            <div>
                <h1 className="text-2xl">Working On this Page </h1>
                <h1 className="text-2xl w-full text-center h-12 my-2">404</h1>
                <button className="bg-gray-400 rounded-md text-2xl h-12 w-[100%]"><Link href={"/home"}> Go To Home Page</Link></button>
            </div>

        </div>
        </>
    )
}

export default NotFound