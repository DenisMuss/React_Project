export interface TodoListProps {
  todos: string[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}