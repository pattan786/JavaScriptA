export function postAndFetchJson(hC, cardid, x, ar) {
  const postUrl = 'http://localhost:3000/cards';
  const data = {
    title: hC,
    items: [],
    id: cardid,
  };
  for (let i = 0; i < x; i += 1) {
    data.items.push({
      listitems: ar[i],
    });
    //   child = child.nextSibling;
  }
  const fetchDat = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: JSON.stringify(data),
  };
  fetch(postUrl, fetchDat);
}
export function fetchAndDeleteJson(cardid) {
  fetch(`http://localhost:3000/cards/${cardid}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
