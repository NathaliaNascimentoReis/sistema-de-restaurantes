import dados from "../models/dados.js";
const { restaurantes } = dados;

const getAllRestaurantes = (req, res) => {
  const { categoria, endereco, avaliacao, entrega } = req.query;
  let resultado = restaurantes;

  if (categoria) {
    resultado = resultado.filter(c => c.categoria.toLowerCase() === categoria.toLowerCase());
  }

  if (endereco) {
    resultado = resultado.filter(c => c.endereco.toLowerCase() === endereco.toLowerCase());
  }

  if (avaliacao) {
    resultado = resultado.filter(c => c.avaliacao.toLowerCase() === avaliacao.toLowerCase());
  }

  res.status(200).json({
    total: resultado.length,
    restaurantes: resultado,
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
      message: `Id ${id} deletado!`,
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

const updateRestaurante = (req, res) => {
  const id = parseInt(req.params.id);

  const {
    nome,
    categoria,
    endereco,
    telefone,
    horarioFuncionamento,
    avaliacao,
    entrega,
  } = req.body;

  const restauranteParaAtualizar = restaurantes.find((r) => r.id === id);

  if (!restauranteParaAtualizar) {
    return res.status(400).json({
      success: false,
      message: "Esse restaurante não existe",
    });
  }

  const restauranteAtualizado = restaurantes.map((restaurante) => {
    return restaurante.id === id
      ? {
          ...restaurante,
          ...(nome && { nome }),
          ...(categoria && { categoria }),
          ...(endereco && { endereco }),
          ...(telefone && { telefone }),
          ...(horarioFuncionamento && { horarioFuncionamento }),
          ...(avaliacao && { avaliacao }),
          ...(entrega && { entrega }),
        }
      : restaurante;
  });

  restaurantes.splice(0, restaurantes.length, ...restauranteAtualizado);

  const restauranteNovo = restaurantes.find(
    (restaurante) => restaurante.id === id
  );

  res.status(200).json({
    success: true,
    message: "Restaurante atualizado com sucesso",
    restaurante: restauranteNovo,
  });
};

export {
  getAllRestaurantes,
  getRestaurantesById,
  createRestaurante,
  deleteRestaurantesById,
  updateRestaurante,
};
