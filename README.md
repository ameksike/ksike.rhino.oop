# koop

Ksike Object Oriented Prograning (KOOP), is a library that allows you to create an abstraction layer that promotes and facilitates the use of the object-oriented programming paradigm on the JavaScript language

# .............................................................
Ksike Object Oriented Prograning (KOOP), es una biblioteca que permite crear una capa de abstracción que promueve y facilita el empleo del paradigma de programación orientado a objeto sobre el lenguaje JavaScript



Ejemplo de utilización en un Web Browser:
```html
	<!-- IN KOOP js necesarios para utilizar la biblioteca -->
	<script type="text/javascript" src="../../koop/src/common/Class.js"> </script>
	<!-- nótese como las keyword son cargadas con carácter opcional en función de minimizar la carga de nuestras aplicaciones, en este caso se utilizan solo dos. -->
	<script type="text/javascript" src="../../koop/src/common/keyword/Extend.js"> </script>
	<script type="text/javascript" src="../../koop/src/common/keyword/StylePb.js"> </script>
	<!-- OUT KOOP js necesarios para utilizar la biblioteca KOOP -->
```

```javascript
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
	
	//... Creando instancias de las clases 
	var dog = new Dog("Pluto", "Mickey Mouse");
	//... invocando funciones 
	console.log(dog.getName());
	console.log(dog.getOwner());
```

Ejemplo de utilización en NodeJs:
```javascript
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
	//... Creando instancias de las clases 
	var dog = new Dog("Pluto", "Mickey Mouse");
	//... invocando funciones 
	console.log(dog.getName());
	console.log(dog.getOwner());
```

Para mayor comprensión véase los demos y la documentación publicada.

For more understanding see the demos and the published documentation.