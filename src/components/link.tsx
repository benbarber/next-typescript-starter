import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

const Link: React.FC<LinkProps> = ({ children, className, ...props }) => (
  <NextLink {...props}>
    <a className={className}>{children}</a>
  </NextLink>
);

interface LinkProps extends NextLinkProps {
  className?: string;
}

export default Link;
