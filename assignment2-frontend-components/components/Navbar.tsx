const Navbar = () => {
    return (
    <header className="bg-white border-b border-slate-200">
    {/* <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">         */} 
    <div className="max-w-5xl mx-auto px-6 py-4 gap-4 sm:flex md:flex-row lg:flex-row items-center justify-between">         

    
        <h1 className="text-lg font-bold text-slate-900">New Generation High School </h1>
        <nav className="flex flex-wrap justify-center gap-4">
                <a href="#overview" className="text-slate-900 hover:text-blue-700">Overview</a>
                <a href="#students" className= "text-slate-900 hover:text-blue-700">Students</a>
                <a href="#add-student" className="text-slate-900 hover:text-blue-700">Add a Student</a>

        </nav>
        </div>
    </header> 
    );
};

export default Navbar;