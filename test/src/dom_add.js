import xhtml from '../../src/core';

xhtml(document.getElementById('dom_add'))
  .append('<div>append</div>')
  .prepend('<div>prepend</div>')
  .after('<div>after</div>')
  .before('<div>before</div>');