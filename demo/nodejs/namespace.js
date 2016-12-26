	//... Cargar la biblioteca denominada KOOP
	require("../../koop");
	//... Definir una clase base denominada Animal
	koop.class("proy.local.Animal",
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
	koop.class("proy.local.Dog",
	{
		extend: proy.local.Animal,
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
	koop.class("proy.local.Cat",
	{
		extend: "proy.local.Animal",
		construct: function(name){
			this.msi = false;
			//... Invocar el contructor de la clase padre
			this.parent.construct.apply(this, [name]);
		},
		shout:function(){
			return this.parent.shout() + "miau";
		}
	});
	//... Creando instancias de las clases 
	var cat = new proy.local.Cat("Mishu");
	var dog = new proy.local.Dog("Pluto", "Mickey Mouse");
	//... invocando funciones 
	console.log(cat.getName());
	console.log(dog.getName());
	console.log(dog.getOwner());
	//..................................................