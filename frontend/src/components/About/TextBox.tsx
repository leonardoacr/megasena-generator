const TextBox = (props: {
  title: string;
  text: string;
  linkText?: string;
  linkUrl?: string;
}) => {
  return (
    <div className="mt-4 w-5/6">
      <div className="border-b-2 border-gray-800">
        <h2 className="text-1xl mt-4 rounded-md rounded-b-none border-2 border-b-0 border-gray-800 bg-background-header p-2 font-bold">
          {props.title}
        </h2>
      </div>
      <hr className=" border-gray-700" />
      <div className="rounded-md rounded-t-none border-2 border-t-0 border-gray-800 bg-background-text-box p-4 text-sm font-light">
        {props.text}
        {props.linkText && props.linkUrl && (
          <div className="mt-4 flex justify-center">
            <button className="rounded bg-gray-600 py-2 px-4 font-bold text-white hover:bg-gray-700">
              <a href={props.linkUrl}>{props.linkText}</a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextBox;
