import PropTypes from "prop-types";
const Category = ({ cat }) => {
  return (
    <div className="bg-[#faf8ff] rounded-md p-[40px]">
      <img className="bg-[#eeedff] p-[15px] rounded-md" src={cat.logo} alt="" />
      <h2 className="text-lg font-bold mt-8">{cat.category_name}</h2>
      <p className="text-[#A3A3A3]">{cat.availability}</p>
    </div>
  );
};
Category.propTypes = {
  cat: PropTypes.object,
};
export default Category;
