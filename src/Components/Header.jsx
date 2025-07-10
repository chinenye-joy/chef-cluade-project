import cheflogo from "../images/chef-claude-logo.png";

const Header = () => {
  return (
  <header className="flex items-center justify-center px-4 bg-slate-100 shadow-md h-20">
  <div className="flex items-center gap-3 md:gap-4">
    <img
      className="w-10 md:w-16 rounded-2xl"
      src={cheflogo}
      alt="chef-claude-logo"
    />
    <h1 className="text-xl md:text-3xl font-medium font-mono">
      Chef Claude
    </h1>
  </div>
</header>


  );
};

export default Header;
