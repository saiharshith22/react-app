import React, { type ReactNode } from "react";

type Image = {
  src: string;
  alt: string;
};

type HeaderProps = {
  image: Image;
  children: ReactNode;
};

const Header = ({ image, children }: HeaderProps) => {
  const { src, alt } = image;
  return (
    <header>
      <img
        src={src}
        alt={alt}
        style={{ borderRadius: "50%", width: "100px", height: "100px" }}
      />
      {children}
    </header>
  );
};

export default Header;
