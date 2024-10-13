import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="bg-blue-50 text-center p-10">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-6">
            Lava Rápido HelpCar - Seu carro brilhando como novo! 🚗✨
          </h2>
          <p className="text-lg font-bold text-red-600 mb-6">
            Promoção Especial: Lave seu carro hoje e ganhe{" "}
            <span className="bg-yellow-300 px-2 py-1 rounded-lg text-black">
              10% de desconto
            </span>{" "}
            na próxima lavagem!
          </p>

          <div className="bg-blue-100 p-6 rounded-lg shadow-inner mb-8">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Por que escolher o HelpCar?
            </h3>
            <ul className="list-disc list-inside text-left text-blue-700 space-y-3">
              <li>Lavagem completa com produtos de alta qualidade.</li>
              <li>
                Limpeza detalhada interna e externa, inclusive de estofados.
              </li>
              <li>
                Cera e polimento para deixar seu carro protegido e com brilho de
                showroom.
              </li>
              <li>
                Atendimento rápido e sem complicações, ideal para quem não quer
                perder tempo.
              </li>
            </ul>
          </div>

          <p className="text-gray-700 mb-4">
            📍 <strong>Localização:</strong> Estamos na Avenida Paulista 1200.
          </p>
          <p className="text-gray-700 mb-4">
            📅 <strong>Horário de Funcionamento:</strong> Segunda a Sábado, das
            8h às 18h.
          </p>
          <p className="text-gray-700 mb-4">
            📞 <strong>Agende já sua lavagem:</strong> (11) 4662-8922.
          </p>
        </div>
      </section>

      <section className="bg-white p-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-200 p-4 rounded-lg shadow-md text-center">
            <h3 className="font-bold text-xl mb-2">Guilheme Leite</h3>
            <Image
              src="/image/carro1.jpeg"
              alt="Carro do Cliente 1"
              width={150}
              height={150}
              className="mb-4 mx-auto rounded-lg"
            />

            <p className="text-gray-600">
              "Otimo trabalho, meu carro esta um brilho!"
            </p>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg shadow-md text-center">
            <h3 className="font-bold text-xl mb-2">Pietro tezza</h3>
            <Image
              src="/image/carro2.jpeg"
              alt="Carro do Cliente 1"
              width={150}
              height={150}
              className="mb-4 mx-auto rounded-lg"
            />
            <p className="text-gray-600">"Melhor que isso só dois disso"</p>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg shadow-md text-center">
            <h3 className="font-bold text-xl mb-2">Henrique Ramos</h3>
            <Image
              src="/image/carro3.jpeg"
              alt="Carro do Cliente 1"
              width={150}
              height={150}
              className="mb-4 mx-auto rounded-lg"
            />
            <p className="text-gray-600">"Serviço top, super recomendo!"</p>
          </div>
        </div>
      </section>
    </div>
  );
}
