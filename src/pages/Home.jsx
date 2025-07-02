import { useEffect, useState } from "react";

const Home = () => {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    age: "",
    grade: "",
  });

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await fetch("http://localhost:5000/api/students", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        setStudents(data);
      } else {
        console.error("Failed to load data");
      }
    };

    fetchStudents();
  }, []);

  const handleAddingModel = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewStudent({ name: "", age: "", grade: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitStudent = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });

      if (res.ok) {
        const addedStudent = await res.json();
        setStudents((prev) => [...prev, addedStudent]);
        handleCloseModal();
        alert("Student added successfully!");
      } else {
        alert("Failed to add student");
      }
    } catch (error) {
      console.error("Error adding student:", error);
      alert("Error adding student");
    }
  };

  return (
    <div className="p-8">
      <button
        onClick={handleAddingModel}
        className="bg-gray-800 text-white p-2 rounded-sm mb-4"
      >
        + Add Student
      </button>

      <h1 className="text-2xl font-bold mb-4">Welcome To HomePage</h1>
      <h2 className="text-xl font-semibold mb-4">Students List:</h2>

      {students.length > 0 ? (
        <div className="grid gap-4">
          {students.map((student, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-sm bg-white"
            >
              <p>
                <strong>Name:</strong> {student.name}
              </p>
              <p>
                <strong>Age:</strong> {student.age}
              </p>
              <p>
                <strong>Grade:</strong> {student.grade}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No students found</p>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Add New Student</h3>

            <form onSubmit={handleSubmitStudent} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newStudent.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Age:</label>
                <input
                  type="number"
                  name="age"
                  value={newStudent.age}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Grade:</label>
                <input
                  type="text"
                  name="grade"
                  value={newStudent.grade}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-sm"
                  required
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600"
                >
                  Add Student
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-500 text-white px-4 py-2 rounded-sm hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
