import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='bg-[#1C2B35] p-5'>
            <nav className=' flex justify-between items-center container mx-auto'>
                <img src={logo} alt="" />
                <div className='flex gap-5 text-[#FFF] font-medium'>
                    <a href="">Order</a>
                    <a href="">Order Review</a>
                    <a href="">Manage Inventory</a>
                    <a href="">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;