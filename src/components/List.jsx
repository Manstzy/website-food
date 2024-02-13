const List = (props) => {
  // Mengakses properti 'text' dari props langsung
  const { text } = props;

  return (
    <li className="mt-2 cursor-pointer py-2 ">
      <a className="hover:text-slate-200 text-slate-300 no-underline" href="#">
        {text}
      </a>
    </li>
  );
};

export default List;
