'use client';
// Import necessary libraries and styles
import { headerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

// Define the NavItems component
const NavItems = () => {
  // Get the current pathname
  const pathname = usePathname();

  // Map through the headerLinks and generate list items
  return (
    <ul className="flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        // Check if the current link is active
        const isActive = pathname === link.route;

        // Define the class based on the isActive state
        const listItemClass = `flex-center p-medium-16 whitespace-nowrap ${
          isActive ? 'text-primary-500' : ''
        }`;

        return (
          <li key={link.route} className={listItemClass}>
            <Link href={link.route}>
              <p>{link.label}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

// Export the NavItems component
export default NavItems;
