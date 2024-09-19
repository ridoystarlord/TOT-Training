import React from "react";

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Category 1",
      image:
        "https://koreanmartbd.com/wp-content/uploads/2022/04/essence-1.png",
    },
    {
      id: 2,
      name: "Category 2",
      image:
        "https://koreanmartbd.com/wp-content/uploads/2022/04/essence-1.png",
    },
    {
      id: 3,
      name: "Category 3",
      image:
        "https://koreanmartbd.com/wp-content/uploads/2022/04/essence-1.png",
    },
    {
      id: 4,
      name: "Category 4",
      image:
        "https://koreanmartbd.com/wp-content/uploads/2022/04/essence-1.png",
    },
    {
      id: 5,
      name: "Category 5",
      image:
        "https://koreanmartbd.com/wp-content/uploads/2022/04/essence-1.png",
    },
  ];
  return (
    <section className="py-4 container mx-auto">
      <div className="grid grid-cols-5 gap-5">
        {categories?.map((category) => {
          return (
            <div key={category.id} className="bg-red-100 p-4 rounded space-y-4">
              <img src={category.image} alt="" className="h-10" />
              <span className="text-[10px] block text-center">
                {category.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
