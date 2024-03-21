import { useState, useEffect } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import FilterTodos from './components/FilterTodos';
import SortTodos from './components/SortTodos';
import Pagination from './components/Pagination';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/todos';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(5);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(apiUrl);
      setTodos(response.data);
      setFilteredTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async (todo) => {
    try {
      const response = await axios.post(apiUrl, todo);
      setTodos([...todos, response.data]);
      setFilteredTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
      setFilteredTodos(filteredTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const updateTodo = async (id, updatedTodo) => {
    try {
      const response = await axios.patch(`${apiUrl}/${id}`, updatedTodo);
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, ...response.data } : todo
      );
      setTodos(updatedTodos);
      setFilteredTodos(updatedTodos);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const filterTodos = (status) => {
    if (status === 'all') {
      setFilteredTodos(todos);
    } else {
      const filtered = todos.filter((todo) => todo.status === status);
      setFilteredTodos(filtered);
    }
    setFilter(status);
  };

  const sortTodos = (order) => {
    const sortedTodos = [...filteredTodos].sort((a, b) => {
      const dateA = new Date(a.completionDateTime);
      const dateB = new Date(b.completionDateTime);
      return order === 'asc' ? dateA - dateB : dateB - dateA;
    });
    setFilteredTodos(sortedTodos);
    setSortOrder(order);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  const assignedToOptions = ['John Doe', 'Jane Smith', 'Alice', 'Bob'];

  return (
    <>
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Todo App</h1>
      <hr />
      <br />
      <AddTodoForm addTodo={addTodo} assignedToOptions={assignedToOptions} />
      <FilterTodos filterTodos={filterTodos} />
      <SortTodos sortTodos={sortTodos} sortOrder={sortOrder} />
      <hr />
      <br />
      <TodoList todos={currentTodos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      <Pagination
        todosPerPage={todosPerPage}
        totalTodos={filteredTodos.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
    </>
  );
};

export default App;