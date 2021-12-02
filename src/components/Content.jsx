import Line from './Line';
import dummy from '../db/data.json';

export default function Content() {
  const lines = dummy.lines;

  return (
    <div className="content col-lg-12">
      {lines.map((line) => (
        <Line
          key={line.id}
          number={line.number}
          classification={line.classification}
          importance={line.importance}
          goal={line.goal}
          due={line.due}
          status={line.status}
          completed={line.completed}
        />
      ))}
    </div>
  );
}
