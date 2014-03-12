function isPrime(n){
	if (n <= 3 ) return true;
	for(var i=2;i<=(n/2);i++)
		if (n % i === 0) return false;
	return true;
}
function onMessageReceived(msgArg){
	var start = msgArg.data.start,
		end = msgArg.data.end,
		primeCount = 0,
		progressMsg  = {
			type : "progress",
			percentCompleted : 0,
			primeCount : 0,
		};
	for(var i=start;i<=end;i++){
		if (isPrime(i)){
			primeCount++;
		}
		progressMsg.primeCount = primeCount;
		progressMsg.percentCompleted = ((i - start) / (end - start)) * 100;
		self.postMessage(progressMsg); // progress
	}
	var completionMessage = {
		type : "result",
		primeCount : primeCount
	};
	self.postMessage(completionMessage); // completion
}
self.addEventListener("message",onMessageReceived);