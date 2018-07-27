import { CreateNewCard2 } from '../view/dashboard.view';


export default function () {
  const getUrl = 'http://localhost:3000/cards';
  fetch(getUrl)
    .then(resp => resp.json())
    .then((data) => {
      // data.map((dat) => {
      //   dat.items.map((listItem) => {
      //   });
      // });
      for (let j = 0; j < data.length; j += 1) {
        CreateNewCard2(data[j]);
      }
    });
}
// export default getjsondata;
