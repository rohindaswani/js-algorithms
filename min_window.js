var findSubstring = (str, pat) => {
  let len1 = str.length();
  let len2 = pat.length();

  if (len1 < len2 ) {
    console.log('No such pattern');
  }

  let hash_pat = {};
  let hash_str = {};

  for (let i = 0; i<len2; i++) {
    let ch = pat[i]
    if (hash_pat.hasOwnProperty(ch)) {
      hash_pat[ch]++;
    } else {
      hash_pat[ch] = 1
    }
  }

  let start = 0; startIndex = -1;min_len = 1000;
  let count = 0;

  for (let j=0; j<len1;j++) {
    let ch = str[i];
    if (hash_str.hasOwnProperty(ch)) {
      hash_str[ch]++;
    } else {
      hash_str[ch] = 1
    }

    if (hash_pat.hasOwnProperty(ch) && hash_pat[ch]!= 0 && hash_str[ch] <= hash_pat[ch]) {
      count++;
    }

    if (count === len2) {

      while ()
    }
  }
}
