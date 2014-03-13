function sum(x,y){
	function parseArg(n){
		if (n instanceof Array) return sum.apply(this,n);
		if (typeof n === "function") return parseArg(n());
		if (isNaN(n)) return 0;
		return parseInt(n);
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + sum.apply(this,[].slice.call(arguments,1));
}