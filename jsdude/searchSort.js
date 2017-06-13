// Sort and Search Questions

// Bubble Sort
function bubbleSort(arr){
  var len = arr.length;
  for(var i=len-1; i>=0; i--){
    for(var j=1; j<=i; j++){
      if(arr[j-1]>arr[j]){
        var temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
// Selection Sort
function selectionSort(arr){
  var minIdx, temp, 
      len = arr.length;
  for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
       if(arr[j]<arr[minIdx]){
          minIdx = j;
       }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}

// Insertion Sort
function insertionSort(arr){
  var i, len = arr.length, el, j;
  for(i = 1; i<len; i++){
    el = arr[i];
    j = i;
    while(j>0 && arr[j-1]>toInsert){
      arr[j] = arr[j-1];
      j--;
   }
   arr[j] = el;
  }
  return arr;
}

// Merge Sort
function mergeSort(arr){
   var len = arr.length;
   if(len <2)
      return arr;
   var mid = Math.floor(len/2),
       left = arr.slice(0,mid),
       right =arr.slice(mid);
   //send left and right to the mergeSort to broke it down into pieces
   //then merge those
   return merge(mergeSort(left),mergeSort(right));
}
        
function merge(left, right){
  var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  while(l < lLen && r < rLen){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }  
  return result.concat(left.slice(l)).concat(right.slice(r));
}

// Quick Sort
function quickSort(arr, left, right){
   var len = arr.length, 
   pivot,
   partitionIndex;
  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}
        
function partition(arr, pivot, left, right){
   var pivotValue = arr[pivot],
       partitionIndex = left;
   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}
        
function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}