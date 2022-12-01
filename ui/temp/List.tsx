"use client";

import { useRef } from "react";

interface TempListProps {
  children: React.ReactNode;
}

const TempList: React.FC<TempListProps> = ({ children }) => {
  const _ref = useRef<HTMLUListElement>(null);

  return (
    <ul
      ref={_ref}
      style={{
        width: "100px",
        height: "200px",
        overflowY: "auto",
        backgroundColor: "gray",
      }}
    >
      {children}
    </ul>
  );
};

export default TempList;
