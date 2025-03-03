import fs from "fs";

const subjects = async (req, res) => {
  const { semester, department } = req.query;
  console.log(semester, department);

  fs.readFile("./data/subject.json", "utf-8", (err, data) => {
    if (err) {
      return res
        .status(400)
        .json({ error: "Error reading file", details: err });
    }
    let subjectData = JSON.parse(data);

    let filteredData = subjectData.filter(
      (item) =>
        (!semester || item.semester === semester) &&
        (!department || item.department.includes(department)) // Corrected: Checking if department exists in array
    );

    res.json(filteredData);
  });
};

export default subjects;
