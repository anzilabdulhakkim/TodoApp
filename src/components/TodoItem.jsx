import { useState } from 'react';

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const [editable, setEditable] = useState(false);
  const [editedTodo, setEditedTodo] = useState({
    title: todo.title,
    assignedTo: todo.assignedTo,
    completionDateTime: todo.completionDateTime,
  });

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleStatusChange = () => {
    const updatedTodo = { ...todo, status: todo.status === 'pending' ? 'completed' : 'pending' };
    updateTodo(todo.id, updatedTodo);
  };

  const handleEdit = () => {
    updateTodo(todo.id, editedTodo);
    setEditable(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTodo({
      ...editedTodo,
      [name]: value,
    });
  };

  return (
    <div className="p-4 border rounded-lg shadow-md mb-4 border-2 border-solid border-black">
      {editable ? (
        <div>
          <input
            type="text"
            name="title"
            value={editedTodo.title}
            onChange={handleChange}
            className="text-xl font-bold mb-2 w-full border-b-2 border-gray-400"
          />
          <input
            type="text"
            name="assignedTo"
            value={editedTodo.assignedTo}
            onChange={handleChange}
            className="text-gray-600 mb-2 w-full border-b-2 border-gray-400"
          />
          <input
            type="datetime-local"
            name="completionDateTime"
            value={editedTodo.completionDateTime}
            onChange={handleChange}
            className="text-gray-600 mb-2 w-full border-b-2 border-gray-400"
          />
        </div>
      ) : (
        <div>
        <h3 className="text-xl font-bold mb-2 cursor-pointer" onClick={() => setEditable(true)}>{todo.title}</h3>
        <p className="text-gray-600">Status: {todo.status}</p>
        <p className="text-gray-600">Assigned To: {todo.assignedTo}</p>
        <p className="text-gray-600">Completion Date & Time: {todo.completionDateTime}</p>
        </div>
        )}
        <br />
      <button onClick={handleStatusChange} className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">{todo.status === 'pending' ? 'Mark as Completed' : 'Mark as Pending'}</button>
      <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded-md mr-2">Delete</button>
      {editable && <button onClick={handleEdit} className="px-4 py-2 bg-green-500 text-white rounded-md">Save</button>}
    </div>
  );
};

export default TodoItem;
