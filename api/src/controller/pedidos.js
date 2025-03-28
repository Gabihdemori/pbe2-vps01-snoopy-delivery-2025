const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  // Cria um novo pedido
  create: async (req, res) => {
    const { motoristaId, data, produto, valor, endereco, numero, cep, complemento } = req.body;
    try {
      const pedido = await prisma.pedido.create({
        data: {
          motoristaId,
          data: new Date(data),
          produto,
          valor,
          endereco,
          numero,
          cep,
          complemento,
        },
      });
      res.status(201).json(pedido);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao criar pedido', details: error.message });
    }
  },

  // Lista todos os pedidos e soma o total dos valores
  read: async (req, res) => {
    try {
      const pedidos = await prisma.pedido.findMany({
        include: { motorista: true }, // Inclui os dados do motorista relacionado
      });

      // Soma o total dos valores dos pedidos
      const totalValor = pedidos.reduce((sum, pedido) => sum + pedido.valor, 0);

      res.status(200).json({ pedidos, totalValor });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar pedidos', details: error.message });
    }
  },

  // Mostra um pedido específico
  readOne: async (req, res) => {
    const { id } = req.params;
    try {
      const pedido = await prisma.pedido.findUnique({
        where: { id: parseInt(id) },
        include: { motorista: true }, // Inclui os dados do motorista relacionado
      });
      if (!pedido) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
      }
      res.status(200).json(pedido);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar pedido', details: error.message });
    }
  },

  // Atualiza um pedido
  update: async (req, res) => {
    const { id } = req.params;
    const { motoristaId, data, produto, valor, endereco, numero, cep, complemento } = req.body;
    try {
      const pedido = await prisma.pedido.update({
        where: { id: parseInt(id) },
        data: {
          motoristaId,
          data: new Date(data),
          produto,
          valor,
          endereco,
          numero,
          cep,
          complemento,
        },
      });
      res.status(200).json(pedido);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao atualizar pedido', details: error.message });
    }
  },

  // Deleta um pedido
  del: async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.pedido.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: 'Erro ao deletar pedido', details: error.message });
    }
  },
};