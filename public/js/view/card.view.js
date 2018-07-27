import { postAndFetchJson, fetchAndDeleteJson } from '../service/card.service';


export default function () {
  const card = document.createElement('div');
  card.style.width = '200px';
  card.style.height = '250px';
  card.style.border = 'gray 1px';
  card.style.boxShadow = '0px 0px 1px 1px';
  card.style.borderRadius = '15px';
  card.style.background = 'white';
  card.style.margin = '10px 10px 10px 10px';
  let m;
  const no = document.getElementById('cardCreate');
  if (no.childElementCount === 0) {
    m = 1;
  } else {
    m = parseInt(no.lastChild.id, 10) + 1;
  }
  // setting id to cards
  card.id = m;
  const header = document.createElement('h3');
  const headerContent = document.querySelector('#inputLarge').value;
  const list = document.createElement('ul');
  const l = document.getElementById('New-List');
  const child = l.firstChild.nextSibling;
  let Schild = child;
  const n = l.childElementCount;
  const arr = [];
  for (let i = 0; i < l.childElementCount; i += 1) {
    arr.push(child.value);
  }
  // posting data into json
  postAndFetchJson(headerContent, card.id, n, arr);
  // heading
  header.innerHTML = headerContent;
  header.style.textAlign = 'center';
  header.style.borderBottom = 'solid 1px';
  header.style.fontWeight = '400';
  header.style.lineHeight = '1.5';
  header.style.marginBottom = '0';
  // list
  for (let i = 0; i < l.childElementCount; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = Schild.value;
    list.appendChild(li);
    Schild = Schild.nextSibling;
  }
  list.className = 'sortable';
  // card footer cancel button
  const butt = document.createElement('button');
  butt.className = 'btn cardButt';
  // butt.className += 'cardButt';
  butt.innerHTML = '<strong>X</strong>';
  butt.onclick = function () {
    // deleting card
    this.parentElement.remove();
    // deleting card from Json
    fetchAndDeleteJson(card.id);
  };
  // append amd return
  card.appendChild(header);
  card.appendChild(list);
  card.appendChild(butt);
  const container = document.getElementById('cardCreate');
  container.appendChild(card);
  return container;
}
