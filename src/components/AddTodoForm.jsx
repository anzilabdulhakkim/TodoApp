import { useState } from 'react';

const AddTodoForm = ({ addTodo, assignedToOptions }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('pending');
  const [assignedTo, setAssignedTo] = useState('');
  const [completionDateTime, setCompletionDateTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !assignedTo || !completionDateTime) {
      alert('Please fill out all fields.');
      return;
    }
    addTodo({
      title,
      status,
      assignedTo,
      completionDateTime
    });
    setTitle('');
    setStatus('pending');
    setAssignedTo('');
    setCompletionDateTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 text-center">
      <input type="text" placeholder="Add task..." value={title} onChange={(e) => setTitle(e.target.value)} className="border rounded-md px-2 py-1 mr-2" />
      <select value={status} onChange={(e) => setStatus(e.target.value)} className="border rounded-md px-2 py-1 mr-2">
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <select value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} className="border rounded-md px-2 py-1 mr-2">
        <option value="">Assign To...</option>
        {assignedToOptions.map((name, index) => (
          <option key={index} value={name}>{name}</option>
        ))}
      </select>
      <input type="datetime-local" placeholder="Completion Date & Time" value={completionDateTime} onChange={(e) => setCompletionDateTime(e.target.value)} className="border rounded-md px-2 py-1 mr-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
