import React from 'react';

// import { Link } from 'gatsby';
import Link from 'gatsby-link';

import Container from 'components/common/container/Container';

export type HeaderProps = {
    langs: Array<{
        lang: string;
        link: string;
    }>;
    pageLang: 'en' | 'id' | 'jp';
};

const Header = ({ pageLang, langs }: HeaderProps): React.ReactElement => {
    const langStyle =
        'flex items-center justify-center text-xs h-7 w-12 rounded-50px overflow-hidden mr-4 last:mr-0  duration-200 ease-in-out';
    const langActive = 'bg-yellow-500 text-black';
    const langInactive = 'bg-gray-100 text-gray-400 hover:bg-yellow-500 hover:text-black';

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
            <Container type="header">
                <div className="h-28 md:h-16 flex flex-wrap justify-between items-center">
                    <Link
                        to={`/${pageLang === 'id' ? '' : pageLang}`}
                        className="w-full md:w-auto text-center md:text-left"
                    >
                        <h2 className="font-novocento-bold text-4xl mt-1 md:mt-0 text-yellow-500 leading-none">
                            LOGIQUE
                        </h2>
                    </Link>
                    <ul className="flex my-0 py-3 md:py-0 -mb-10px md:mb-0 w-full md:w-auto justify-center md:justify-end bg-blue-800 md:bg-transparent">
                        {langs.map((datum) => (
                            <Link
                                key={datum.lang}
                                to={datum.link}
                                className={`${langStyle} ${pageLang === datum.lang ? langActive : langInactive}`}
                            >
                                <li className="mb-0 uppercase">{datum.lang}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </Container>
        </header>
    );
};

export default Header;
