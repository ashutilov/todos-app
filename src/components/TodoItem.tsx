import {X} from 'lucide-react';
import {Button} from '@/components/ui/button';

const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li className="flex items-center justify-between rounded-lg border bg-muted/30 p-4 shadow-sm">
      <span>{props.text}</span>
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        onClick={props.onRemoveTodo}
        aria-label={`Remove "${props.text}"`}
      >
        <X className="text-destructive" />
      </Button>
    </li>
  );
};

export default TodoItem;
