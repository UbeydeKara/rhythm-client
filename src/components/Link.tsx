import NextLink from "next/link";
import React from "react";

export default function Link({href, children, ...props}: {href: string, children: React.ReactElement}) {
    return(
        <NextLink href={href} {...props} style={{textDecoration: "none", color: "inherit"}}>
            {children}
        </NextLink>
    );
};
