const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  create: async (req, res) => {
    const { email, nome, telefones } = req.body;
    try {
      const motorista = await prisma.motorista.create({
        data: { email, nome, telefones },
      });
      res.status(201).json(motorista);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao criar motorista', details: error.message });
    }
  },

  read: async (req, res) => {
    try {
      const motoristas = await prisma.motorista.findMany();
      res.status(200).json(motoristas);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar motoristas', details: error.message });
    }
  },

  readOne: async (req, res) => {
    const { id } = req.params;
    try {
      const motorista = await prisma.motorista.findUnique({
        where: { id: parseInt(id) },
        include: { pedidos: true }, 
      });
      if (!motorista) {
        return res.status(404).json({ error: 'Motorista não encontrado' });
      }
      res.status(200).json(motorista);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar motorista', details: error.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { email, nome, telefones } = req.body;
    try {
      const motorista = await prisma.motorista.update({
        where: { id: parseInt(id) },
        data: { email, nome, telefones },
      });
      res.status(200).json(motorista);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao atualizar motorista', details: error.message });
    }
  },

  del: async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.motorista.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: 'Erro ao deletar motorista', details: error.message });
    }
  },
};