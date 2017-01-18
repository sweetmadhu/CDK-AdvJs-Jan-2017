/*
function add(x,y){
	function parseArg(n){
		if (Array.isArray(n)) return add.apply(this, n);
		if (typeof n === 'function') return parseArg(n());
		return isNaN(n) ?  0 : parseInt(n, 10);
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add([].slice.call(arguments, 1));
}
*/
function add(...values){
	function parseArg(n){
		if (Array.isArray(n)) return add(...n);
		if (typeof n === 'function') return parseArg(n());
		return isNaN(n) ?  0 : parseInt(n, 10);
	}
	return values.length <= 1 ? parseArg(values[0]) : parseArg(values[0]) + add(values.slice(1));
}