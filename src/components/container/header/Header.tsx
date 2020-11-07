import React from 'react';

import Container from 'components/common/container/Container';

import Logo from 'assets/img/logo.png';

const Header = (): React.ReactElement => {
    const langStyle =
        'flex items-center justify-center text-xs h-7 w-12 rounded-50px overflow-hidden mr-4 last:mr-0  duration-200 ease-in-out';
    const langActive = 'bg-yellow-500 text-black';
    const langInactive = 'bg-gray-100 text-gray-400 hover:bg-yellow-500 hover:text-black';

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md">
            <Container>
                <div className="h-16 flex justify-between items-center">
                    <a href="/">
                        <img src={Logo} alt="Logique Digital Indonesia" width="150px" />
                    </a>
                    <ul className="flex my-0">
                        <a href="/" className={`${langStyle} ${langActive}`}>
                            <li className="mb-0">EN</li>
                        </a>
                        <a href="/" className={`${langStyle} ${langInactive}`}>
                            <li className="mb-0">ID</li>
                        </a>
                        <a href="/" className={`${langStyle} ${langInactive}`}>
                            <li className="mb-0">JP</li>
                        </a>
                    </ul>
                </div>
            </Container>
        </header>
    );
};

export default Header;
