function sum(x,y){
	function parseArg(n){
		if (n instanceof Array) return sum.apply(this,n);
		if (typeof n === "function") return parseArg(n());
		if (isNaN(n)) return 0;
		return parseInt(n);
	}
	/*function getRemaining(args){
		var result = [];
		for(var i=1;i<args.length;i++)
			result.push(args[i]);
		return result;
	}*/
	return arguments.length <= 1 ? parseArg(arguments[0]) 
		: parseArg(arguments[0]) + sum.apply(this,[].slice.call(arguments,1));
	/*var result = 0;
	for(var i=0;i<arguments.length;i++)
		result += parseArg(arguments[i]);
	return result;*/
}