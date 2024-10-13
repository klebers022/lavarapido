import Menu from "./menu";

export default function Cabacalho() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">HelpCar Lava Rapido</h1>
    <Menu />
  </header>
  );
}