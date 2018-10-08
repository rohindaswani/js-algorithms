
function findPeak(arr, n) {
  return findPeakUtil(arr, 0, n-1, n);
}

function findPeakUtil(arr, low, high, n) {
  mid = low + (high-low)/2;
  mid = parseInt(mid);

  if ((mid ===0 || arr[mid-1] <= arr[mid]) && (mid === n-1 || arr[mid+1 <= arr[mid]])) {
    return mid;
  } else if (mid > 0 && arr[mid-1] > arr[mid] {
    return findPeakUtil(arr,low, mid-1, n);
  } else {
    return findPeakUtil(arr, mid+1, high, n));
  }
}