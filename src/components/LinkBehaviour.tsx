import React, {forwardRef} from "react";
import NextLink, {LinkProps} from 'next/link';

export const LinkBehaviour = forwardRef<HTMLAnchorElement, LinkProps>(
    ({...props}, ref) => (
    <NextLink ref={ref} {...props} />
));

LinkBehaviour.displayName = 'LinkBehaviour';
