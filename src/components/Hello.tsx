// 타입을 선언해 줄 수 있습니다!
type HelloProps = {
  name: string;
};

const Hello = ({ name }: HelloProps) => {
  return <div>Hello, {name}!</div>;
};

export default Hello;
