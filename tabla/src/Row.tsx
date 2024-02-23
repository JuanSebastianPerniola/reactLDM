//data de la tablas y el for para crearlas
import img1 from './alien.png';
import img2 from './alien2.png';
import img3 from './alien3.png';
//un array de items que tendra la tabla con sus tipo de valor
//export se usa cuando decimos que puede ser importad
export type Item = {
  //string
  name: string;
  //number or int
  price: number;
  //number or int
  quantity: number;
    //img
   img?: string;
};
export const dummyData = (): Item[] => {
    const items: Item[] = [];
    //porque tengo que iniciarlo antes?¿ 
    //me da erroe de q se usaba antes de ser asginado 
    let img: string = ''; 

  
    for (let i = 0; i < 100; i++) {
      if (i < 33) {
        img = img1;
      } else if (i < 66) {
        img = img2;
      } else if (i < 88) {
        img = img3;
      }
      items.push({
        name: `Item ${i + 1}`,
        price: 50,
        quantity: 1,
        img: img
      });
    }
    return items;
  };
  