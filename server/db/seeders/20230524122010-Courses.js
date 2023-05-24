/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Courses', [{
      name: 'Fullstack JavaScript',
      description: `Fullstack-разработчик человек, который возлагает на себя ответственность за все этапы разработки веб-сервиса.
         Он принимает участие как в создании визуальной части интернет-ресурса, так и в реализации серверной. 
         Создает с нуля веб-приложение — самостоятельно или при поддержке команды разработчиков. Full stack = Frontend + Backend.
         Frontend — это то, что вы видите на мониторе. Backend — это все что отвечает за логику «под капотом»
        `,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Courses', null, {});
  },
};
