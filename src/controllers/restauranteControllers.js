import dados from "../models/dados.js";
const { restaurantes } = dados;

const getAllRestaurantes = (req, res) => {
  res.status(200).json({
    total: restaurantes.length,
    restaurantes: restaurantes,
  });
};

export { getAllRestaurantes };
