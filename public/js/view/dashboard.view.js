import { RemoveLastChild } from './list.view';

export const CreateNewCard2 = (data) => {
  const card = document.createElement('div');
  card.style.width = '200px';
  card.style.height = '250px';
  card.style.border = 'gray 1px';
  card.style.boxShadow = '0px 0px 1px 1px';
  card.style.borderRadius = '15px';
  card.style.background = 'white';
  card.style.margin = '10px 10px 10px 10px';
  card.id = data.id;
  // heading
  const header = document.createElement('h3');
  // const headerContent = document.querySelector('#inputLarge').value;
  header.innerHTML = `${data.title}`;
  header.style.textAlign = 'center';
  header.style.borderBottom = 'solid 1px';
  header.style.fontWeight = '400';
  header.style.lineHeight = '1.5';
  header.style.marginBottom = '0';
  // list
  const list = document.createElement('ul');
  // const l = document.getElementById('New-List');
  // const child = l.firstChild.nextSibling;
  for (let i = 0; i < data.items.length; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = data.items[i].listitems;
    list.appendChild(li);
  }
  list.className = 'sortable';
  // card footer cancel button
  const butt = document.createElement('button');
  butt.className = 'btn cardButt';
  // butt.className += 'cardButt';
  butt.innerHTML = '<strong>X</strong>';
  butt.onclick = function () {
    // deleating card
    this.parentElement.remove();
    // deleating card from json
    fetch(`http://localhost:3000/cards/${data.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  };
  // append amd return
  card.appendChild(header);
  card.appendChild(list);
  card.appendChild(butt);
  const container = document.getElementById('cardCreate');
  container.appendChild(card);
  return container;
};


export function RefreshModal() {
  document.getElementById('inputLarge').value = null;
  const rl = document.getElementById('New-List');
  for (let i = 0; i < rl.childElementCount;) {
    RemoveLastChild();
  }
}
