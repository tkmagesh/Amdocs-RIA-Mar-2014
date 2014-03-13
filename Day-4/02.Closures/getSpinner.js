function getSpinner(){
	var counter = 0;
	function _up(){
		return ++counter;
	}
	function _down(){
		return --counter;
	}
	return {
		up : _up,
		down : _down
	}
}