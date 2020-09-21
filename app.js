function Queue(){
	var storage = {},
  	head = 0,
    tail= 0;
    
	return {
  	enQueue: function(item){
    	storage[tail] = item;
      tail++;
    },
    deQueue: function(){
    	var size = tail - head;
      
      if (size <= 0) return undefined;
      
      var item = storage[head];
      delete storage[head];
      
      head++;
      
      //Reset the counter
      if (head === tail){
      	head = 0;
        tail = 0;
      }
    },
    size: function(){
    	return tail - head;
    },
    peek: function(){
    	return storage[tail - 1];
    },
    print: function(){
    	var result = [];
      
      for (var key in storage){
      	result.push(storage[key]);
      }
      
      return result;
    }
  }
}
var demoQueue = new Queue();

function perform(type){
	var status = document.getElementById('current-status');
  
  status.innerHTML = 'Status: Processing...';
  
  if (type === 'enQueue'){
  	var item = document.getElementById('insert').value;
    
    if (item){
    	demoQueue.enQueue(item);
    }
  }
  else{
  	demoQueue[type]();
  } 
  
  printQueueDetails();  
  
  printQueueToScreen();
  
  status.innerHTML = 'Status: Completed.'  
}

function printQueueDetails(){
	var size = demoQueue.size();
  var lastAdded = demoQueue.peek() || 'N/A';
  
  document.getElementById('current-size').innerHTML = 'Size of queue: ' + size;
  document.getElementById('last-added').innerHTML = 'Last added to queue: ' + lastAdded;
}

function printQueueToScreen(){	
  var stackInPrint = demoQueue.print();
  var display = document.getElementById('queue-look');

  display.innerHTML = '';
  document.getElementById('insert').value= '';
  var DisplayLabel = document.createElement('div');  
  DisplayLabel.setAttribute('class', 'queue-label');
  DisplayLabel.innerHTML = 'Demo Queue: '

  display.appendChild(DisplayLabel);

  for (var i = 0; i < stackInPrint.length; i++){
    var item = stackInPrint[i];
    var div = document.createElement('div');

    div.setAttribute('class', 'queue-item');
    div.innerHTML = item;   

    display.appendChild(div);
  }
}