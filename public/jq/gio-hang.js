class menu extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            show: true
        }   
    }

  render(){
    return(
        <div>
            <li className="nav-item">
                <a className="nav-link disabled" href="/users/dangnhap"></a>
            </li>

            <li className="nav-item dropdown" >
                <a  className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Tai khoan
                </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/users/logout">Logout</a>
                <a className="dropdown-item"  href="/index/update">Update</a>
            </div>         
            </li>
        </div>
    )
  }    
}
var that;
var total = 0;
var product
class Cart extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      mang:[]
    }
    that = this
  }

  render(){
    return(
      <section id="product">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <span className="divider">/</span>
            </li>
            <li className="active"> Shopping Cart</li>
          </ul>       
          <center> <h1><span className="subtext"> Giỏ hàng của bạn</span></h1></center> 
          <div className="cart-info">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th className="image">Image</th>
                  <th className="name">Product Name</th>
                  <th className="quantity">Số Lượng</th>
                  <th className="total">Action</th>
                  <th className="price">Giá</th>
                  <th className="total">Tiền</th>
                </tr> 
              </thead>
              <tbody>
                {this.state.mang.map(function(node,index){
                  {total += node.tien}
                  return <Product key = {index} id ={node._id} name = {node.name} img = {node.item.img[0]} quantity = {node.soluong} price = {node.item.price} cost ={node.tien}></Product>
              })}
              </tbody>
            </table>
          </div>
          <form action={"/product/submitCart"+ total} method="post" encType="multipart/form-data">   
            <div className="container">
              <div className="pull-right">
                  <div className="span4 pull-right">
                    <table className="table table-striped table-bordered ">
                      <tbody>
                        <tr>
                          <td><span className="extra bold totalamout">Total :</span></td>
                        <td>
                          <span className="pp">
                          {total}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button className="btn btn-orange pull-right">Đặt Hàng</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>)
  }

  componentDidMount(){
    $.post('/product/infoCart',function(data){
      that.setState({
        mang: data
      })
    })
  } 
}
  


class Product extends React.Component{
  constructor(props) {
    super(props);
    this.sum = this.sum.bind(this)
    product = this
  }

  render(){
    return(
        <tr>
          <td className ="image"><a href="#"><img title="product" alt="product" src={"/uploads/"+ this.props.img}height="50" width="50" /></a></td>
          <td className ="name"><a href="">{this.props.name}</a></td>
          <td type="number" className="quantity">{this.props.quantity}</td>
          <td><a href={"/product/delCart/" + this.props.id}>Xóa</a></td>
          <td>{this.sum(this.props.price)}</td>
          <td>{this.sum(this.props.cost)}</td>
        </tr>
    )
  }

  sum(amount){
    var decimalCount = 2, decimal = ".", thousands = ","
      try {
        decimalCount = Math.abs(decimalCount)
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
        const negativeSign = amount < 0 ? "-" : "";
        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;
        return negativeSign + (j ? i.substr(0,j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands);
      } catch (e) {
        console.log(e)
    }
  }
}

ReactDOM.render(<Cart></Cart>, document.getElementById('maincontainer'))