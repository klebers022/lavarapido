"use client";

import { useState } from "react";
import { Pedido } from "../types";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [formData, setFormData] = useState<Pedido>({
    marca: "",
    modelo: "",
    placa: "",
    nome: "",
    tipoLavagem: "",
  });

  const adicionarPedido = () => {
    if (
      formData.marca &&
      formData.modelo &&
      formData.placa &&
      formData.nome &&
      formData.tipoLavagem
    ) {
      setPedidos([...pedidos, formData]);
      setFormData({
        marca: "",
        modelo: "",
        placa: "",
        nome: "",
        tipoLavagem: "",
      });
    }
  };

  const removerPedido = (index: number) => {
    setPedidos(pedidos.filter((_, i) => i !== index));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 p-8">
      <main className="flex-grow flex flex-col lg:flex-row gap-8">
        <section className="lg:w-1/3 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600">
            Anotar Pedido
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              name="marca"
              value={formData.marca}
              onChange={handleChange}
              placeholder="Marca"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            />
            <input
              type="text"
              name="modelo"
              value={formData.modelo}
              onChange={handleChange}
              placeholder="Modelo"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            />
            <input
              type="text"
              name="placa"
              value={formData.placa}
              onChange={handleChange}
              placeholder="Placa"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            />
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Nome do dono"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            />
            <input
              type="text"
              name="tipoLavagem"
              value={formData.tipoLavagem}
              onChange={handleChange}
              placeholder="Tipo de Lavagem"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            />
            <button
              type="button"
              onClick={adicionarPedido}
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Adicionar Pedido
            </button>
          </form>
        </section>

        <section className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600">
            Pedidos Anotados
          </h2>
          <div className="flex flex-wrap gap-6">
            {pedidos.length > 0 ? (
              pedidos.map((pedido, index) => (
                <div
                  key={index}
                  className="flex-grow basis-full md:basis-1/2 lg:basis-1/3 bg-blue-50 p-6 rounded-lg shadow-md border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-red-500 mb-4">
                    {pedido.marca} - {pedido.modelo}
                  </h3>
                  <p className="text-gray-700 mb-2">Placa: {pedido.placa}</p>
                  <p className="text-gray-700 mb-2">Dono: {pedido.nome}</p>
                  <p className="text-gray-700 mb-2">
                    Tipo de Lavagem: {pedido.tipoLavagem}
                  </p>
                  <button
                    onClick={() => removerPedido(index)}
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Remover Pedido
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-600">Nenhum pedido anotado.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
