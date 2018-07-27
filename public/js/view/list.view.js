

export function createListElement() {
  const CardList = document.getElementById('New-List');
  const x = document.createElement('INPUT');
  x.setAttribute('type', 'text');
  x.id = CardList.childElementCount;
  x.className = 'width';
  CardList.appendChild(x);
  return CardList;
}

export function RemoveLastChild() {
  const lc = document.getElementById('New-List');
  if (lc.childElementCount > 0) {
    lc.removeChild(lc.lastChild);
  }
}
