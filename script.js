function mincost(arr)
{ 
  const {minHeap}= require('heap-js')
	const pq= new minHeap();
  let cost =0;

for(let i =0;i<arr.length;i++){
	pq.push(arr[i]);
}
	while(pq.length>1{
		let top1 = pq.peek();
		pq.pop();
		 
			let top2 = pq.peek();
			pq.pop();
         let val = top1+top2;
		cost+=val;
		pq.push(val);
		
		
	}
	return cost+pq.top();	
}

module.exports=mincost;
