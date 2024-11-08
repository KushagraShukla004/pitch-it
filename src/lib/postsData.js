const posts = [
  {
    _id: 1,
    _createdAt: new Date(),
    views: 55,
    author: {
      _id: 1,
      name: "Kushagra Shukla",
      image:
        "https://images.unsplash.com/photo-1669475576662-af6f022dad1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDI%3D",
    },
    description: "This is a description",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "AI",
    title: "Code Testing AI",
  },
  {
    _id: 2,
    _createdAt: new Date(),
    views: 15,
    author: {
      _id: 2,
      name: "Sam",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8Mg%3D%3D",
    },
    description: "This is a description",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Business",
    title: "Healthcare Automation",
  },
  {
    _id: 3,
    _createdAt: new Date(),
    views: 40,
    author: {
      _id: 3,
      name: "Joe",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8Mg%3D%3D",
    },
    description: "This is a description",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Agriculture",
    title: "Pesticide Control",
  },
  {
    _id: 4,
    _createdAt: new Date(),
    views: 25,
    author: {
      _id: 4,
      name: "Marcus",
      // image:
      //   "https://images.unsplash.com/photo-1581391528803-54be77ce23e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDI%3D",
    },
    description: "This is a description",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "AI",
    title: "Chat to PDF",
  },
  {
    _id: 5,
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name: "Adi" },
    description: "This is a description",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Business",
    title: "Currency Exchange",
  },
  // {
  //   _id: 6,
  //   _createdAt: new Date(),
  //   views: 55,
  //   author: { _id: 1 },
  //   description: "This is a description",
  //   image:
  //     "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   category: "AI",
  //   title: "Code Testing using Generative AI",
  // },
  // {
  //   _id: 7,
  //   _createdAt: new Date(),
  //   views: 55,
  //   author: { _id: 1 },
  //   description: "This is a description",
  //   image:
  //     "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   category: "AI",
  //   title: "Code Testing using Generative AI",
  // },
  // {
  //   _id: 8,
  //   _createdAt: new Date(),
  //   views: 55,
  //   author: { _id: 1 },
  //   description: "This is a description",
  //   image:
  //     "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   category: "AI",
  //   title: "Code Testing using Generative AI",
  // },
  // {
  //   _id: 9,
  //   _createdAt: new Date(),
  //   views: 55,
  //   author: { _id: 1 },
  //   description: "This is a description",
  //   image:
  //     "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   category: "AI",
  //   title: "Code Testing using Generative AI",
  // },
  // {
  //   _id: 10,
  //   _createdAt: new Date(),
  //   views: 55,
  //   author: { _id: 1 },
  //   description: "This is a description",
  //   image:
  //     "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   category: "AI",
  //   title: "Code Testing using Generative AI",
  // },
];

export default posts;
