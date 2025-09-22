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
    res.status(200).json({
      success: true,
      message: `ID ${id} encontrado com sucesso!,`,
      restaurante: restaurante,
    });
  } else {
    res.status(400).json({
      success: false,
      message: `Id ${id} inválido`,
    });
  }
};

export { getAllRestaurantes, getRestaurantesById };
