import React from "react";

interface CategoryBtnProps {
  btnTitle: string;
  btnColor: string;
}

const CategoryBtn: React.FC<CategoryBtnProps> = ({ btnTitle, btnColor }) => {
  return (
    <button className={`${btnColor} py-2 px-4 rounded-full cursor-pointer uppercase text-white font-semibold`}>
      {btnTitle}
    </button>
  );
};

export default CategoryBtn;
