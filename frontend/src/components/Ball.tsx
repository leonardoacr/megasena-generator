const Ball = ({
  numbersArray,
  color,
}: {
  numbersArray: number[];
  color: string;
}) => {
  return (
    <>
      {numbersArray.map((num, index) => (
        <div
          key={index}
          className={`mr-2 flex h-8 w-8 items-center justify-center rounded-full ${color} text-white`}
        >
          {num}
        </div>
      ))}
    </>
  );
};

export default Ball;
