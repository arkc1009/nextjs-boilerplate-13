"use client";

interface ItemProps {
  children: React.ReactNode;
}

const Item: React.FC<ItemProps> = ({ children }) => {
  return (
    <li style={{ display: "flex", alignItems: "center", height: "40px" }}>
      {children}
    </li>
  );
};

export default Item;
