import dados from "../models/dados.js";
const { restaurantes } = dados;

const getAllRestaurantes = (req, res) => {
  res.status(200).json({
    total: restaurantes.length,
    restaurantes: restaurantes,
  });
};

const getRestaurantesById = (req, res) => {
  const id = parseInt(req.params.id);
  const restaurante = restaurantes.find((r) => r.id === id);

  if (restaurante) {
    return res.status(200).json({
      success: true,
      message: `Id ${id} encontrado!`,
      restaurante: restaurante,
    });
  }

  return res.status(400).json({
    success: false,
    message: `Restaurante ${id} não encontrada`,
  });
};

const deleteRestaurantesById = (req, res) => {
  const id = parseInt(req.params.id);
  const restaurante = restaurantes.find((r) => r.id === id);

  if (restaurante) {
    return res.status(200).json({
      success: true,
      restaurante: restaurante,
      message: `Id ${id} deletado!`
    });
  }

  return res.status(400).json({
    success: false,
    message: `Restaurante ${id} não encontrada`,
  });
};

const createRestaurante = (req, res) => {
  const {
    nome,
    categoria,
    endereco,
    telefone,
    horarioFuncionamento,
    avaliacao,
    entrega,
  } = req.body;

  const verificaId =
    restaurantes.length > 0 ? restaurantes[restaurantes.length - 1].id + 1 : 1;

  const novoRestaurante = {
    id: verificaId,
    nome: nome.toLowerCase(),
    categpria: categoria.toLowerCase(),
    endereco: endereco.toLowerCase(),
    telefone,
    horarioFuncionamento,
    avaliacao,
    entrega,
  };

  restaurantes.push(novoRestaurante);

  res.status(200).json({
    success: true,
    message: "Novo restaurante criado",
    restaurante: novoRestaurante,
  });
};

export { getAllRestaurantes, getRestaurantesById, createRestaurante, deleteRestaurantesById };
