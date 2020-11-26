import React from 'react';

import Link from 'gatsby-link';

export type BreadcrumbsProps = {
    breadcrumbLinks: Array<{
        label: string;
        link: string;
    }>;
};

const Breadcrumbs = ({ breadcrumbLinks }: BreadcrumbsProps): React.ReactElement => {
    return (
        <div className="py-3 -mx-5px flex flex-wrap font-semibold text-sm">
            {breadcrumbLinks.map((breadcrumb, idx) => (
                <Link
                    to={breadcrumb.link}
                    key={breadcrumb.label}
                    className={`flex items-center px-5px text-gray-300 ${
                        breadcrumb.link !== '#' && 'duration-200 hover:text-yellow-500'
                    }
                    ${idx === breadcrumbLinks.length - 1 && 'text-yellow-500'}`}
                >
                    {breadcrumb.label}
                    {idx !== breadcrumbLinks.length - 1 && (
                        <span className="text-3xl pb-1 ml-2 text-gray-100 font-normal leading-none">&#8250;</span>
                    )}
                </Link>
            ))}
        </div>
    );
};

export default Breadcrumbs;
