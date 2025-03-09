import Cards from "../ui/Cards";// Import the reusable card

const notesData = [
  { title: "Software Engineering", image: "/src/assets/images/notes.jpg", link: "/software-engineering" },
  { title: "Data Structures", image: "/src/assets/images/notes.jpg", link: "/data-structures" },
  { title: "Operating Systems", image: "/src/assets/images/notes.jpg", link: "/operating-systems" },
  { title: "Computer Networks", image: "/src/assets/images/notes.jpg", link: "/computer-networks" },
];

const PYQ= () => {
  return (
  
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-3xl font-sans mt-4 mb-4 shine">PYQ</h1>
    

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {notesData.map((note, index) => (
          <Cards key={index} title={note.title} image={note.image} link={note.link} />
        ))}
      </div>
    </div>
  );
};

export default PYQ;
