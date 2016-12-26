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
koop.class.prototype.keyword.imitate = function(_in, _out){
	if(_in){
		var _this = this;
		_out._inf_.imitate = _in;
		_out.parent = _out.parent ||{};
		var _clone = function(_in, _out){
			_this.clone(_in.prototype, _out, "_inf_|parent|construct");	
			_this.clone(_in.prototype, _out.parent, "_inf_|parent|construct");		
		}
		if(typeof(_in) === "function") _clone(_in, _out);
		else if(_in instanceof Array)
			for(var i in _in) _clone(_in[i], _out);
	}
}