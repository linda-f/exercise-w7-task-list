const TaskForm = ({ newTodo, handleNewTodoChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h1>📝 ToDo App</h1>
      <h2>Type you tasks here below 👇</h2>
      <label>
        <textarea
          rows="4"
          cols="50"
          type="text"
          value={newTodo}
          onChange={handleNewTodoChange}
          placeholder="Type a task.."
        />
      </label>
      <button type="submit">Submit form!</button>
    </form>
  );
};

export default TaskForm;
