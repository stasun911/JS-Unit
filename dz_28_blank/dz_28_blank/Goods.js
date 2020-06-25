class Goods {
    constructor(name, amount, image, count) {
        this.nameGoods = name;
        this.amountGoods = amount;
        this.imageGoods = image;
        this.countGoods = count;
    }

    draw(elem) {
        document.querySelector(elem).innerHTML += `
        <table>
          <thead>
            <tr>
              <td>image</td>
              <td>name</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="${this.imageGoods}" style = 'width = 30px;'height  = 30px;'></td>
              <td>${this.nameGoods}</td>
              <td>${this.amountGoods}</td>
            </tr>
          </tbody>
        </table>
        `;
    }
}