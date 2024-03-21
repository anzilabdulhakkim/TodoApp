const FilterTodos = ({ filterTodos }) => {
  return (
    <div className="mb-4 text-center">
      <label className="mr-2">Filter By:</label>
      <button onClick={() => filterTodos('all')} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">All</button>
      <button onClick={() => filterTodos('pending')} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Pending</button>
      <button onClick={() => filterTodos('completed')} className="bg-blue-500 text-white px-4 py-2 rounded-md">Completed</button>
    </div>
  );
};

export default FilterTodos;
