const Pagination = ({ todosPerPage, totalTodos, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination my-5 flex gap-3 justify-center">
        {pageNumbers.map(number => (
          <li key={number} className={currentPage === number ? 'page-item active' : 'page-item'}>
            <button onClick={() => paginate(number)} className="page-link bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded  ">{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
