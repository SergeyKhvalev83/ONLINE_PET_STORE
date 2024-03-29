'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const arr = [
      {
        title: 'Dog',
        type: 'pomeranian',
        price: 2699,
        quantity: 2,
        owner_id: 1,
        url: 'https://www.rover.com/blog/wp-content/uploads/iStock-1422682177-1024x683.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Dog',
        type: 'shephard',
        price: 1550,
        quantity: 1,
        owner_id: 2,
        url: 'https://westernshepherd.com/wp-content/uploads/2021/03/Precious.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'retriever ',
        type: 'Dog',
        price: 1899,
        quantity: 1,
        owner_id: 3,
        url: 'https://www.rover.com/blog/wp-content/uploads/2020/06/Golden-Retriever-2.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Cat',
        type: 'Bengal',
        price: 2001,
        quantity: 5,
        owner_id: 1,
        url: 'https://image.petmd.com/files/styles/978x550/public/2023-04/bengal-cat-breed.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Cat',
        type: 'Maine Coon',
        price: 2500,
        quantity: 1,
        owner_id: 2,
        url: 'https://image.petmd.com/files/styles/863x625/public/2023-04/Maine-coon-cat.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Cat',
        type: 'crazy',
        price: 89,
        quantity: 23,
        owner_id: 3,
        url: 'https://media.istockphoto.com/id/490618514/photo/funny-crazy-cat.jpg?s=612x612&w=0&k=20&c=B0M1byWurJnAbcnlEc1H7NhKyTPxDq3cN9Ya8JGJX_M=',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Hamster',
        type: 'mouse',
        price: 89,
        quantity: 35,
        owner_id: 1,
        url: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtc3RlcnxlbnwwfHwwfHx8MA%3D%3D',

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Parrot',
        type: 'bird',
        price: 159,
        quantity: 99,
        owner_id: 2,
        url:"https://ychef.files.bbci.co.uk/624x351/p0hhjf1l.jpg",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'fish',
        type: 'golden fish',
        price: 1,
        quantity: 94,
        owner_id: 3,
        url:"https://i.pinimg.com/736x/9b/c3/1f/9bc31fc8c5749e5970fba31d6c85586f.jpg",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'bulldog ',
        type: 'Dog',
        price: 55,
        quantity: 5,
        owner_id: 1,
        url:"https://www.akc.org/wp-content/uploads/2017/11/Bulldog-standing-in-the-grass.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Sharoo',
        type: 'Dragon',
        price: 87,
        quantity: 9,
        owner_id: 2,
        url: "https://t3.ftcdn.net/jpg/05/80/74/04/360_F_580740494_9R9vqDM4zshhNeEMIFgCFYh24bVuqkNa.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'husky ',
        type: 'Dog',
        price: 45,
        quantity: 15,
        owner_id: 3,
        url: "https://media-be.chewy.com/wp-content/uploads/2021/06/01091720/Siberian-Husky_FeaturedImage-1024x615.jpg",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Products', arr, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
