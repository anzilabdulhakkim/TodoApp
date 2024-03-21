const SortTodos = ({ sortTodos, sortOrder }) => {
  return (
    <div className="text-center mb-4">
    <label className="mr-2">Sort by Date:</label>
    <button onClick={() => sortTodos(sortOrder === 'asc' ? 'desc' : 'asc')} className="bg-blue-500 text-white px-4 py-2 rounded-md">{sortOrder === 'asc' ? 'Newest First' : 'Oldest First'}</button>
  </div>
);
};

export default SortTodos;

