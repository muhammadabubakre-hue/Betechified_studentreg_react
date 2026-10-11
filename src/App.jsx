import React, { useState } from 'react';

function StudentRegistration() {
  // State to hold the list of registered students
  const [students, setStudents] = useState([]);
  
  // States to capture input values
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prevent adding empty entries
    if (!name.trim() || !course.trim()) return;

    // Create a new student object with a unique timestamp ID
    const newStudent = {
      id: Date.now(),
      name: name,
      course: course
    };

    // Update state array using the spread operator
    setStudents([...students, newStudent]);

    // Clear inputs after adding
    setName('');
    setCourse('');
  };

  // Delete a student by filtering out their unique ID
  const deleteStudent = (idToEliminate) => {
    const updatedStudents = students.filter(student => student.id !== idToEliminate);
    setStudents(updatedStudents);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', fontFamily: 'sans-serif' }}>
      <h2>Student Registration App</h2>
      
      {/* Registration Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Student Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter name"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Course:</label>
          <input 
            type="text" 
            value={course} 
            onChange={(e) => setCourse(e.target.value)} 
            placeholder="Enter course"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px', background: '#d32f2f', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Add Student
        </button>
      </form>

      {/* Registered Students Display */}
      <h3>Registered Students</h3>
      {students.length === 0 ? (
        <p>No students registered yet.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {students.map((student) => (
            <li key={student.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ccc' }}>
              <span><strong>{student.name}</strong> - {student.course}</span>
              <button onClick={() => deleteStudent(student.id)} style={{ padding: '5px 10px', background: '#ccc', border: 'none', cursor: 'pointer' }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentRegistration;
