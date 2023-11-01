import Counter from "./Counter";
import Layout from "../shared/Layout";

type HomeProps = {
  count: number;
  title: string;
};

export default function Home({ count, title }: HomeProps) {
  return (
    <div>
      Home number: {count} - string : {title}
    </div>
  );
}
