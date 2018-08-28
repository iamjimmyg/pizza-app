import React, {Component} from 'react'

class Table extends Component {


  render() {
    var total = 2
    let ingredientsTable = this.props.ingredientsUsed.map((item,i) => {
      if(item.picked === true){
        total = total + .5
        return <tr>
            <td>{item.ingredient}</td>
            <td>$0.50</td>
        </tr>
      }


    })
    return (
      <div className='row' id='table'>
        <div className='col'>
          <div className='table table-hover'>
            <table>
              <thead className='thead-inverse'>
                <tr>
                  <th className=''>Item</th>
                  <th className=''>Price</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>{this.props.crust} Crust</td>
                    <td>$2.00</td>
                  </tr>
                  {ingredientsTable}
                  <tr>
                    <td>
                      TOTAL
                    </td>
                    <td>
                      ${total.toFixed(2)}
                    </td>
                  </tr>
              </tbody>

            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Table
