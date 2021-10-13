const menu = {
    _course:{
      appetizers: [],
      mains: [],
      desserts: [],
    },
  
    //setters for the course properties
    set appetizers (alist) {
      this._course.appetizers.push(alist);
    },
    set mains (alist) {
      this._course.mains.push(alist);
    },
    set desserts (alist) {
      this._course.desserts.push(alist);
    },
  
    //getters for the course properties
    get appetizers(){
      return this._course.appetizers;
    },
    get mains(){
      return this._course.mains;
    },
    get desserts(){
      return this._course.desserts;
    },
  
    //get the value of the course object
    get course(){
      return this._course;
    },
  
    //function to add dishes to course 
    addDishToCourse (courseName, dishName, dishPrice) {
          const dish = {
            name: dishName,
            price: dishPrice,
          }
      if(courseName === 'appetizers'){
        this._course.appetizers.push(dish);
      }else if (courseName === 'mains'){
        this._course.mains.push(dish);
      }else if(courseName === 'desserts'){
        this._course.desserts.push(dish);
      }else{
        console.log('Kindly choose the right course');
      }
    },
  
    getRandomDishFromCourse (courseName) {
      let dishes = this._course[courseName];
      let theIndex = Math.floor(Math.random() * dishes.length);
      return this._course[courseName][theIndex];
    },
  
    //function to generate 3 meals, one from each course and return the total cost
    generateRandomMeal () {
      let appetizer = this.getRandomDishFromCourse('appetizers');
      let main = this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts');
  
      let totalPrice = appetizer.price + main.price + dessert.price;
  
      return `The 3 meals: \n${appetizer.name} \n${main.name} \nand ${dessert.name} would cost ${totalPrice} GHS, enjoy your meals :)`;
    },
  
  };
  
  //adding some dishes to the 3 main courses, giving the course name, the food or dish and the price
  menu.addDishToCourse('appetizers','Soup',5);
  menu.addDishToCourse('appetizers','Salad',8);
  menu.addDishToCourse('appetizers','Kakro',3);
  menu.addDishToCourse('appetizers','Chips',10);
  menu.addDishToCourse('appetizers','French Fries',20);
  
  
  menu.addDishToCourse('mains', 'Waakye',7);
  menu.addDishToCourse('mains', 'Kenkey with Fish',5);
  menu.addDishToCourse('mains', 'Banku with Okro Stew',8);
  menu.addDishToCourse('mains', 'Fufu',15);
  menu.addDishToCourse('mains', 'Jollof Rice',10);
  
  menu.addDishToCourse('desserts', 'Biscuits',5);
  menu.addDishToCourse('desserts', 'Cakes',15);
  menu.addDishToCourse('desserts', 'Cookies',6);
  menu.addDishToCourse('desserts', 'Ice Cream',5);
  menu.addDishToCourse('desserts', 'Croissant',30);
  
  //Generate a set of 3 meals with total cost and logging to the console
  meal = menu.generateRandomMeal();
  console.log(meal);
  
    