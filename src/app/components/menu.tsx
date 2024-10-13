import Link from "next/link";

export default function Menu() {
  return (
    <nav className="bg-blue-500 p-4">
    <ul className="flex space-x-4">
      <li>
        <Link href={"/"} className="text-white hover:text-gray-300">
          Home
        </Link>
      </li>
      <li>
        <Link href={"/pedidos"} className="text-white hover:text-gray-300">
          Pedidos
        </Link>
      </li>
    </ul>
  </nav>
  );
}
