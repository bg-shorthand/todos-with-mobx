import { observer } from "mobx-react";
import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useTodosStore } from "../stores/TodoStore";

const AddTodos = observer(() => {
  const todosStore = useTodosStore();
  const [todo, setTodo] = useState("");

  return (
    <Stack direction="row" spacing={2} component="form">
      <TextField
        fullWidth
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        label="Add your todo."
      />
      <Button
        variant="contained"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          const { todos } = todosStore;
          const id = todos.length
            ? Math.max(...todos.map((todo) => todo.id)) + 1
            : 1;
          todosStore.add({ id, title: todo, completed: false });
        }}
      >
        ADD
      </Button>
    </Stack>
  );
});

export default AddTodos;
