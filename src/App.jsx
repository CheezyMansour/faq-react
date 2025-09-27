import { faq } from "./data";
import { ListItem } from "./listItems";
import "./App.css";

export function App() {
  return (
    <>
      {faq.map((q, i) => {
        const { question, answer } = q;
        return <ListItem key={i} question={question} answer={answer} />;
      })}
    </>
  );
}
