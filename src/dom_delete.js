/**
 * 删除被选元素（及其子元素）
 */
export function remove() {
  var flag;
  for (flag = 0; flag < this.length; flag++) {
    this[flag].parentNode.removeChild(this[flag]);
  }
  return this;
};