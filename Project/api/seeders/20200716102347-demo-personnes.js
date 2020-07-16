module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('personnes', [
      {
        nom: 'Ana Souza',
        active: true,
        email: 'ana@ana.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nom: 'Marcos Cintra',
        active: true,
        email: 'marcos@marcos.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nom: 'Felipe Cardoso',
        active: true,
        email: 'felipe@felipe.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nom: 'Sandra Gomes',
        active: false,
        email: 'sandra@sandra.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nom: 'Paula Morais',
        active: true,
        email: 'paula@paula.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nom: 'Sergio Lopes',
        active: true,
        email: 'sergio@sergio.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('personnes', null, {})
  }
}
