import { Logo } from "@/components/logo";

export const Navbar = () => {
    return (
        <nav className="fixed z-50 top-0 px4 w-full h-14 border-b shadow-sm bg-white flex items-center">
            {/* TODO: Mobile Sidebar */}
            <div className="flex items-center gap-x-4">
                <div className="flex items-center gap-x-4">
                    <Logo />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;