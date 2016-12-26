/**
 *
 * @framework: Ksike
 * @package: base
 * @subpackage: patterns
 * @version: 0.1
 * @description: Class es una libreria para el trabajo con clases, pretende acercar el javascript a la POO
 * @authors: ing. Hermes Lazaro Herrera Martinez, ing. Antonio Membrides Espinosa
 * @dependencies: koop.Class
 * @made: 08/12/2010
 * @update: 17/01/2011
 * @license: LGPL v2
 *
 */
koop.design = koop.design ? koop.design : {};
koop.design.pattern = koop.design.pattern ? koop.design.pattern : {};

koop.class.prototype.keyword.patterns = function(_in, _out){
	if(_out["_inf_"]) _out["_inf_"].patterns = _in;
}

koop.class.prototype.event.preConstruct.push(function(_class){
	if(this._inf_.patterns){
		var _implement = function(key, _class, _obj){
			if(koop.design.pattern)
				if(koop.design.pattern[key]){
					if(koop.design.pattern[key].prototype.implement)
						koop.design.pattern[key].prototype.implement(_class, _obj);
				}
			throw {msg: "Design patterns <<"+key+">> it not exist", type:"core", thrower:"KoopClass"};			
		}
		if(this._inf_.patterns instanceof Array){
			for(var i in this._inf_.patterns)
				_implement(this._inf_.patterns[i], _class, this);
		}else _implement(this._inf_.patterns, _class, this);
	}
});

