class Goods2 extends Goods {
    constructor(name, amount, image, count, sale) {
        super(name, amount, image, count);
        this.saleGoods = sale;
    }
    draw(elem) {
        document.querySelector(elem).innerHTML += `
        <table>
          <thead>
            <tr>
              <td>image</td>
              <td>name</td>
              <td>Price</td>
              <td>sale</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="${this.imageGoods}" style = 'width = 30px;'height  = 30px;'></td>
              <td>${this.nameGoods}</td>
              <td>${this.amountGoods}</td>
              <td>${this.saleGoods}</td>
            </tr>
          </tbody>
        </table>
        `;
    }
}