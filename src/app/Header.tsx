function Header() {

    return (<header className="inline-flex">
            <h1 className="">My Website</h1>
            <div className="absolute right-0">
                <nav className="">
                    <ul className="inline-flex no-underline">
                        <li className="px-10"><a href="">Home</a></li>
                        <li className="px-10"><a href="">About</a></li>
                        <li className="px-10"><a href="">Services</a></li>
                        <li className="px-10"><a href="">Contact</a></li>
                    </ul>
                    <hr></hr>
                </nav>
            </div>
        </header>);
}

export default Header;