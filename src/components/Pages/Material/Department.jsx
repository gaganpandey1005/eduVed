import Cards from "../ui/Cards";

// Importing images
import cseImage from "../../../assets/images/cse.png";
import eeImage from "../../../assets/images/ee.png";
import meImage from "../../../assets/images/me.png";
import ceImage from "../../../assets/images/ce.png";
import eceImage from "../../../assets/images/ece.png";
import itImage from "../../../assets/images/it.png";

const Department = () => {
  const departments = [
    { name: "Computer Science", img: cseImage, link: "/select-sem/CS" },
    { name: "Electrical Engineering", img: eeImage, link: "/select-sem/EE" },
    { name: "Mechanical Engineering", img: meImage, link: "/select-sem/ME" },
    { name: "Civil Engineering", img: ceImage, link: "/select-sem/CE" },
    {
      name: "Electronics & Communication",
      img: eceImage,
      link: "/select-sem/ECE",
    },
    { name: "Information Technology", img: itImage, link: "/select-sem/IT" },
  ];

  return (
    <div className="flex flex-col items-center mt-12 mb-28 justify-center min-h-screen">
      <h1 className="text-blue-400 text-2xl font-bold mb-6">
        Please Select Your Department
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {departments.map((dept, index) => (
          <Cards
            key={index}
            title={dept.name}
            image={dept.img}
            link={dept.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Department;
