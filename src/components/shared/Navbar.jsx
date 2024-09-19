import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

function Navbar() {
  return (
    <section className="bg-gray-200 p-4">
      <div className="container mx-auto">
        <header className="flex items-center justify-between ">
          {/* logo */}
          <Link to={ROUTES.HOME}>
            <img
              src="https://i.ibb.co/LSg6pnJ/logo.png"
              alt="logo"
              className="w-10 cursor-pointer"
            />
          </Link>
          {/* nav */}
          <nav className="space-x-4">
            <span className="hover:text-orange-500 cursor-pointer">Home</span>
            <Link
              to={ROUTES.PRODUCTS}
              className="hover:text-orange-500 cursor-pointer"
            >
              Products
            </Link>
            <Link to="/brands" className="hover:text-orange-500 cursor-pointer">
              Brands
            </Link>
            <span className="hover:text-orange-500 cursor-pointer">Combo</span>
            <span className="hover:text-orange-500 cursor-pointer">Offers</span>
          </nav>
        </header>
      </div>
    </section>
  );
}

export default Navbar;
