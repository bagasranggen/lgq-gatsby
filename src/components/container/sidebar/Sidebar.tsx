import React from 'react';

// import { Link } from 'gatsby';
import Link from 'gatsby-link';

export type SidebarProps = {
    pageLang: 'id' | 'en' | 'jp';
};

const Sidebar = ({ pageLang }: SidebarProps): React.ReactElement => {
    const linkAnimation = 'duration-300 ease-in-out';

    const homeIcon = (
        <svg className="mx-auto" width="43" height="40" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="nonzero" fill="none">
                <path
                    className={`${linkAnimation} group-hover:fill-black`}
                    d="M37.239 16.188v19.12a2.37 2.37 0 01-2.37 2.37H8.008a2.37 2.37 0 01-2.37-2.37v-19.12l9.48-9.48 3.08-3.08a4.582 4.582 0 016.48 0l3.08 3.08 9.48 9.48z"
                    fill="transparent"
                />
                <path
                    d="M19.068 23.774h4.74a2.686 2.686 0 012.686 2.686v11.218H16.382V26.46a2.686 2.686 0 012.686-2.686z"
                    className={`${linkAnimation} group-hover:fill-yellow-500`}
                    fill="transparent"
                />
                <path
                    d="M41.293 18.454L25.572 2.734a5.853 5.853 0 00-8.268 0l-15.72 15.72a1.264 1.264 0 101.787 1.788l1.003-1.003v16.07a3.638 3.638 0 003.634 3.633h26.861a3.638 3.638 0 003.634-3.634V19.24l1.002 1.003a1.26 1.26 0 001.788 0 1.264 1.264 0 000-1.788zm-23.647 17.96V26.46c0-.784.638-1.422 1.422-1.422h4.74c.784 0 1.422.638 1.422 1.422v9.954h-7.584zm18.329-1.106c0 .61-.496 1.106-1.106 1.106h-7.11V26.46a3.955 3.955 0 00-3.95-3.95h-4.74a3.955 3.955 0 00-3.951 3.95v9.954h-7.11c-.61 0-1.106-.496-1.106-1.106V16.711l12.19-12.19a3.322 3.322 0 014.692 0l12.19 12.19v18.597z"
                    className={`${linkAnimation} group-hover:fill-yellow-500`}
                    strokeWidth="1.5"
                    stroke="#000"
                    fill="transparent"
                />
            </g>
        </svg>
    );

    const aboutIcon = (
        <svg className="mx-auto" width="35" height="35" xmlns="http://www.w3.org/2000/svg">
            <g className={`${linkAnimation} group-hover:fill-black`} fill="transparent" fillRule="evenodd">
                <path
                    d="M29.016 1.1H4.984C2.787 1.1 1 2.87 1 5.047v27.006c0 .24.06.45.179.626.179.264.479.421.803.421h0c.732 0 1.406-.656 3.972-3.462 1.312-1.435 3.747-4.096 4.482-4.3h18.58c2.197 0 3.984-1.77 3.984-3.947V5.047C33 2.871 31.213 1.1 29.016 1.1z"
                    stroke="#000"
                    strokeWidth="1.5"
                />
                <g className={`${linkAnimation} group-hover:fill-yellow-500`} fill="#000">
                    <path d="M13.3 6.1h2.3v14.1h-2.3z" />
                    <path d="M13.6 18h9v2.2h-9z" />
                </g>
            </g>
        </svg>
    );

    const sidebarLink = {
        id: [
            { label: 'Beranda', icon: homeIcon, link: '/' },
            { label: 'Tentang Kami', icon: aboutIcon, link: '/' },
        ],
        en: [
            { label: 'Home', icon: homeIcon, link: '/' },
            { label: 'About', icon: aboutIcon, link: '/' },
        ],
        jp: [
            { label: 'Home', icon: homeIcon, link: '/' },
            { label: 'About', icon: aboutIcon, link: '/' },
        ],
    };

    let sidebarLang;

    if (pageLang === 'id') {
        sidebarLang = sidebarLink.id;
    } else if (pageLang === 'en') {
        sidebarLang = sidebarLink.en;
    } else if (pageLang === 'jp') {
        sidebarLang = sidebarLink.jp;
    }

    return (
        <div className="fixed top-0 left-0 ml-4">
            <nav className="w-24 py-8 px-15px bg-yellow-500 rounded-20px flex flex-col items-center">
                {sidebarLang?.map((sidebar) => (
                    <Link to={sidebar.link} key={sidebar.label} className="group text-center text-black mb-6">
                        {sidebar.icon}
                        <div className="text-xs">{sidebar.label}</div>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
