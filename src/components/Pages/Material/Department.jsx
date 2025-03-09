import Cards from "../ui/Cards";

const Department = () => {
  const departments = [
    { name: "Computer Science", img: "/src/assets/images/cse.png", link: "/select-sem/CS" },
    { name: "Electrical Engineering", img: "/src/assets/images/ee.png", link: "/select-sem/EE" },
    { name: "Mechanical Engineering", img: "/src/assets/images/me.png", link: "/select-sem/ME" },
    { name: "Civil Engineering", img: "/src/assets/images/ce.png", link: "/select-sem/CE" },
    { name: "Electronics & Communication", img: "/src/assets/images/ece.png", link: "/select-sem/ECE" },
    { name: "Information Technology", img: "/src/assets/images/it.png", link: "/select-sem/IT" }
  ];

  return (
    <div className="flex flex-col items-center mt-12 mb-28 justify-center min-h-screen">
      <h1 className="text-blue-400 text-2xl font-bold mb-6">
        Please Select Your Department
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {departments.map((dept, index) => (
          <Cards key={index} title={dept.name} image={dept.img} link={dept.link} />
        ))}
      </div>
    </div>
  );
};

export default Department;
