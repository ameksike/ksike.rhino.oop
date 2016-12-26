
	//... Cargar la biblioteca denominada KOOP
	require("../../koop");
	//... Definir una clase base denominada Animal
	koop.class("Animal",
	{
		construct: function(name){
			 this.name = name ? name : "";
		},
		shout: function(){
			return "-";
		},
		getName: function(){
			return this.name;
		}
	});
	//... Definir una clase Dog que hereda de Animal
	koop.class("Dog",
	{
		extend: Animal,
		construct: function(name, owner){
			//... Redefinir el constructor 
			this.owner = owner ? owner : "";
			//... Invocar el contructor de la clase padre
			this.parent.construct.apply(this, [name]);
		},
		getOwner:function(){
			return this.owner;
		}
	});
	//... Definir una clase Cat que hereda de Animal, pero en esta ocasión especificarla como texto
	koop.class("Cat",
	{
		extend: "Animal",
		construct: function(name){
			this.msi = false;
			//... Invocar el contructor de la clase padre
			this.parent.construct.apply(this, [name]);
		},
		shout:function(){
			return this.parent.shout() + "miau";
		}
	});
	//... Definir una clase Siames que hereda de Cat, estableciéndose una jerarquía de 3 nivel
	koop.class("Siames",
	{
		extend: "Cat",
		steal: function(){
			return "... it's coming;";
		}
	});
	//... Creando instancias de las clases 
	var siames = new Siames("Michuky");
	var cat = new Cat("Mishu");
	var dog = new Dog("Pluto", "Mickey Mouse");
	//... invocando funciones 
	console.log(siames.getName());
	console.log(cat.getName());
	console.log(dog.getName());
	console.log(dog.getOwner());
	//..................................................