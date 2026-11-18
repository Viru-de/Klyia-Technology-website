import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {normalizePathname} from '../config/routes.ts';

interface RouterContextValue {
  pathname: string;
  hash: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextValue>({
  pathname: '/',
  hash: '',
  navigate: () => {},
});

interface RouterProviderProps {
  initialPath?: string;
  children: React.ReactNode;
}

function splitUrlParts(rawUrl: string): {pathname: string; hash: string} {
  const [pathPart, hashPart] = rawUrl.split('#');
  return {
    pathname: normalizePathname(pathPart || '/'),
    hash: hashPart ? `#${hashPart}` : '',
  };
}

export function RouterProvider({initialPath = '/', children}: RouterProviderProps) {
  const initialParts = useMemo(() => {
    if (typeof window !== 'undefined') {
      return {
        pathname: normalizePathname(window.location.pathname),
        hash: window.location.hash || '',
      };
    }
    return splitUrlParts(initialPath);
  }, [initialPath]);

  const [pathname, setPathname] = useState<string>(initialParts.pathname);
  const [hash, setHash] = useState<string>(initialParts.hash);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const currentNormalized = normalizePathname(window.location.pathname);
    if (window.location.pathname !== currentNormalized && currentNormalized !== '/') {
      window.history.replaceState(null, '', `${currentNormalized}${window.location.search}${window.location.hash}`);
    }

    const handlePopState = () => {
      setPathname(normalizePathname(window.location.pathname));
      setHash(window.location.hash || '');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (hash) {
      const targetId = hash.slice(1);
      const timer = window.setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
      }, 60);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({top: 0, behavior: 'auto'});
  }, [pathname, hash]);

  const navigate = useCallback((to: string) => {
    if (typeof window === 'undefined') {
      return;
    }
    if (to.startsWith('http://') || to.startsWith('https://') || to.startsWith('mailto:') || to.startsWith('tel:')) {
      window.location.assign(to);
      return;
    }

    const parts = splitUrlParts(to);
    const targetUrl = `${parts.pathname}${parts.hash}`;
    const currentUrl = `${normalizePathname(window.location.pathname)}${window.location.hash}`;

    if (targetUrl !== currentUrl) {
      window.history.pushState(null, '', targetUrl);
      setPathname(parts.pathname);
      setHash(parts.hash);
    } else if (parts.hash) {
      const el = document.getElementById(parts.hash.slice(1));
      if (el) {
        el.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    } else {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }, []);

  const value = useMemo(() => ({pathname, hash, navigate}), [pathname, hash, navigate]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  return useContext(RouterContext);
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  onNavigate?: () => void;
}

export function Link({href, onClick, onNavigate, children, ...rest}: LinkProps) {
  const {navigate} = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(event);
    }
    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      rest.target === '_blank' ||
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:')
    ) {
      return;
    }
    event.preventDefault();
    navigate(href);
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
