import { Outlet } from "react-router-dom"

function DashboardLayout(){
    return (
        <>
        <div className="w-full" style={{display: 'flex'}}>
            <div className="w-1/4 bg-teal-400 h-screen">
                <h1>SideBar</h1>
            </div>
            <div className="w-3/4 h-screen">
                <Outlet />
            </div>
        </div>
        </>
    )
}

export default DashboardLayout