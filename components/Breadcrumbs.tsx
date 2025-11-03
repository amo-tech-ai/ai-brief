import React from 'react';

interface BreadcrumbsProps {
  path: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ path }) => {
  const parts = path.split('/').filter(p => p && p !== 'dashboard');
  
  const breadcrumbs = parts.map((part, index) => {
    const href = `#/dashboard/${parts.slice(0, index + 1).join('/')}`;
    // A simple prettify for the URL part
    const text = part.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const isLast = index === parts.length - 1;

    return (
      <li key={href}>
        <div className="flex items-center">
          {index > 0 && (
             <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          )}
          <a
            href={isLast ? undefined : href}
            className={`ml-2 text-sm font-medium ${isLast ? 'text-gray-500 cursor-default' : 'text-gray-500 hover:text-gray-700'}`}
            aria-current={isLast ? 'page' : undefined}
          >
            {text}
          </a>
        </div>
      </li>
    );
  });

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2">
        <li>
          <div>
            <a href="#/dashboard" className="text-gray-500 hover:text-gray-700">
              <span className="text-sm font-medium">Dashboard</span>
            </a>
          </div>
        </li>
        {breadcrumbs}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
