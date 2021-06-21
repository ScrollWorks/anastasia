


const sortVowels = s => typeof s !== 'string' ? '' : [...s].map(e => /[aeiou]/i.test(e) ? `|${e}` : `${e}|`).join('\n');

function sortVowels(s) { 
    if (typeof s !== 'string') {
      return '';
    } else {
      return [...s].map(letra => {
        if(/[aeiou]/i.test(letra)) {
           return`|${letra}`;
        } else {
          return `${letra}|`;
        }
      }).join('\n');
  }
  }