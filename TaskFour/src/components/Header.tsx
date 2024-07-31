import { ListContainer } from "./ListContainer";

const Header = () => {
  return (
    <div className="flex justify-center w-[100%] mt-8">
      <div>
        <h1 className="text-3xl font-bold text-center">LISTIFY</h1>

        <ListContainer />
      </div>
    </div>
  );
};

export default Header;
