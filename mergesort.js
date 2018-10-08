
function merge(arr, l, m, r) {
  n1 = m - l +1;
  n2 = r-m;

  L = [0] * n1;
  R = [0] * n2;

  for (let i = 0; i<n1; i++) {
    L[i] = arr[l+i];
  }
  for (let j=0; j<n2;j++) {
    R[j] = arr[m +1+j];
  }

  i=0,j=0,k=l;
  while(i<n1 && j<n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++
    } else {
      arr[k] = R[j];
      j++;
    }
    k+=1;
  }

  while (i<n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j<n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}


function mergeSort(arr, l, r) {
  if (l<r) {
    m = (l+(r-1))/2;
    mergeSort(arr,l,m);
    mergeSort(arr, m+1,r);
    merge(arr,l,m,r);
  }
}