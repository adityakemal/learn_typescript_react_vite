type handleGetCarProp = string;

type ListEmojiProps = {
  list: string[];
  listObj: Array<{ name: string; icon: string }>;
  objPerson: { name: string; car: string; age: number };
  handleGetCars: (val: handleGetCarProp) => void;
};

export default function ListEmoji({
  list,
  listObj,
  objPerson,
  handleGetCars,
}: ListEmojiProps) {
  const { name, car, age } = objPerson;
  return (
    <div>
      <ul>
        {list.map((res, i) => (
          <li key={i}>{res}</li>
        ))}
      </ul>

      <h3>list obj</h3>
      <ul>
        {listObj.map((res, i) => (
          <li key={i}>
            {res.name} - {res.icon}
          </li>
        ))}
      </ul>
      <h2> name :{name}</h2>
      <h2> car :{car}</h2>
      <h2> age :{age}</h2>
      <button onClick={() => handleGetCars("lambo")}>handle get car</button>
    </div>
  );
}
