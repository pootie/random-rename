const fs = require('fs');

var _args = process.argv.slice(2);
if (_args.length > 0) {
  let path = _args[0];
  fs.readdir(path, function(err, items) {
    if (err) {
      console.error(err);
      return;
    }

    shuffle(items);

    // rename
    for (var i=0; i<items.length; i++) {
      let orig = items[i];
      if (fs.lstatSync(`${path}/${orig}`).isDirectory())
        continue;

      let stripped = orig;
      if (orig.indexOf(' - ') > -1) {
        stripped = orig.substring(orig.indexOf(' - ') + 3);
      }
      let num = new String(i).padStart(4, '0');
      orig = `${path}/${orig}`;
      let updated = `${path}/${num} - ${stripped}`;
      console.log(`${orig} -> ${updated}`);
      try {
        fs.renameSync(orig, updated);
      } catch (err2) {
        console.error(err2);
      }
    }
  });
} else {
  console.log('usage: node index.js "path\to\files"')
}

// Fisher-Yates Shuffle: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}