var menu
class Menu extends React.Component{
    constructor(props) {
        super(props);
        this.create = this.create.bind(this)
        this.list = this.list.bind(this)
        this.order= this.order.bind(this)
        this.months = this.months.bind(this)
       
        this.state = {
            pro : [],
            users:[],
            carts:[],
            months:[],
            statistic:[]
        }
        menu = this
    }
   
                  
                 

    render(){
        return(
            <ul className="list-group">
              <li className="list-group-item"><strong>Sản phẩm</strong></li>
            
              <li className="list-group-item"><i className="fa fa-plus-square-o fa-icon" aria-hidden="true"></i> &nbsp; <a onClick={this.create}>Thêm sản phẩm mới</a></li>
            
            
              <li className="list-group-item"><i className="fa fa-list fa-icon" aria-hidden="true"></i> &nbsp; <a onClick={this.list}>Danh sách sản phẩm</a></li>
              <li className="list-group-item"><strong>Đơn đặt hàng</strong></li>
              <li className="list-group-item"><i className="fa fa-cube fa-icon" aria-hidden="true"></i> &nbsp; <a onClick={this.order}>List</a></li>
              <li className="list-group-item"><strong>Thống kê</strong></li>
              <li className="list-group-item"><i className="fa fa-users fa-icon" aria-hidden="true"></i> &nbsp; <a onClick={this.user}>Danh sach user</a></li>
              <li className="list-group-item"><strong>Tài khoản user</strong></li>
            
              <li className="list-group-item"><i className="fa fa-user-plus fa-icon" aria-hidden="true"></i> &nbsp; <a href="/admin/user/new">New</a></li>
              <li className="list-group-item"><i className="fa fa-user fa-icon" aria-hidden="true"></i> &nbsp; <a href="/admin/users">Edit</a></li>
            
              <li className="list-group-item"><i className="fa fa-user-circle-o fa-icon" aria-hidden="true"></i> &nbsp; <a href="/admin/user/edit/{{session.userId}}">My Account</a></li>
              <li className="list-group-item"><strong>Thống kê</strong></li>
              <li className="list-group-item"><i className="fa fa-cog fa-icon" aria-hidden="true"></i> &nbsp; <a onClick={this.months}>Sản phẩm bán chạy</a></li>
              <li className="list-group-item"><i className="fa fa-bars fa-icon" aria-hidden="true"></i> &nbsp; <a onClick={this.statistic}>Doanh số theo tháng</a></li>
              <li className="list-group-item"><i className="fa fa-file-o fa-icon" aria-hidden="true"></i> &nbsp; <a href="/admin/settings/pages">Tài khoản</a></li>
              
          </ul>
        )
    }

    
    list(){
      $.get('/admin/list_product',function(pro){
         
        menu.setState({pro:pro})
    })
       
        ReactDOM.render(
            <section id="aa-agents">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="aa-agents-area">
                              <div className="aa-title">
                                <h2>Danh sách sản phẩm</h2>
                              </div>
                              </div>
                            <div className="cart-info">
                              <table className="table table-striped table-bordered">
                                <thead>
                                  <tr>
                                    <th className="product-thumbnail">Hình ảnh</th>
                                    <th className="product-name">Tên sản phẩm</th>
                                    <th className="product-quantity">Số Lượng</th>
                                    <th className="price">Giá</th>
                                    <th className="total">Action</th>
                                   
                                    
                                  </tr> 
                                </thead>
                                <tbody>
                                  
                                { this.state.pro.map(function(node,index){
                                  return <List key = { index} id={node._id} img ={node.img[0]} name = {node.name} num = {node.num} price = {node.price}></List>
                                })}
                                </tbody>
                              </table>
                            </div>
                         </div>
                      </div>
                    </div>
                  </section>, document.getElementById("div9"))
    }

    order(){
      $.get('/admin/order', function(carts){
        menu.setState({carts:carts})
      })    
        ReactDOM.render(
          <section id="aa-agents">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="aa-agents-area">
                        <div className="aa-title">
                          <h2>Danh sách đơn hàng</h2>
                        </div>
                        </div>
                      <div className="cart-info">
                        <table className="table table-striped table-bordered">
                          <thead>
                            <tr>
                              <th className="product-thumbnail">Ngay</th>
                              <th className="product-name">Ten</th>
                              <th className="product-quantity">Sdt</th>
                              <th className="price">Tong</th>
                              <th className="price">Trang thai</th>
                              <th className="price">Cap nhat trang thai</th>
                            </tr> 
                          </thead>
                          <tbody>
                            
                          {menu.state.carts.map(function(pro,index){
                            return <Cart key ={index} id = {pro._id} date={pro.date} name = {pro.user.name} phone={pro.user.phone} addr="" status = {pro.trangthai} sum ={pro.sum}></Cart>
                           
                          })}       
                          </tbody>
                        </table>
                      </div>
                   </div>
                </div>
              </div>
            </section>, document.getElementById("div9")

      )
    }

    user(){
      $.get('/admin/user', function(users){
        menu.setState({users:users});
      })
            ReactDOM.render(
                <section id="aa-agents">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="aa-agents-area">
                              <div className="aa-title">
                                <h2>Danh sách tài khoản</h2>
                              </div>
                              </div>
                            <div className="cart-info">
                              <table className="table table-striped table-bordered">
                                <thead>
                                  <tr>
                                    <th className="product-thumbnail">Tên</th>
                                    <th className="product-name">SDT</th>
                                    <th className="product-quantity">Email</th>
                                    <th className="price">Địa chỉ</th>
                                  </tr> 
                                </thead>
                                <tbody>
                                  
                                {menu.state.users.map(function(pro,index){
                                  return <User key ={index} name={pro.name} phone = {pro.phone} email={pro.email} addr=""></User>
                                 
                                })}       
                                </tbody>
                              </table>
                            </div>
                         </div>
                      </div>
                    </div>
                  </section>, document.getElementById("div9")
            )
        
    }
    create(){
      ReactDOM.render(<Create action ="/admin/create" product="Cuốn sách mới" button="Thêm sách" name = " " dis ="" author = "" price ="" num ="" page="" size="" weight =""></Create>, document.getElementById("div9"))
    }

    months(){
      $.get('/admin/statistic_book', function(months){
        menu.setState({months:months})
      })
      var chartbook=[];
      { menu.state.months.forEach(element => {
        chartbook.push(element)
        
      })}
      ReactDOM.render(
        <section id="aa-agents">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="aa-agents-area">
                      <div className="aa-title">
                        <h2>Tổng số sách bán được</h2>
                      </div>
                      </div>
                    <div className="cart-info">
                      <table className="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th>Tháng</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>10</th>
                            <th>11</th>
                            <th>12</th>
                          </tr> 
                        </thead>
                        <tbody>
                          <tr>
                            <th>Số lượng</th>
                        {menu.state.months.map(function(pro,index){
                            return <th key ={index}>{pro}</th>
                           
                          })} 
                          </tr>  
                        </tbody>
                      </table>
                    </div>
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Thống kê sách bán theo tháng</h4>
                         
                          <canvas id="barChart" style={{height:200 + 'px'}}></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>, document.getElementById("div9")
      )
    
      var data = {
       labels: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12"],
       datasets: [{
       label: '# of Votes',
       data: chartbook,
       backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)',
         'rgba(255, 99, 132, 0.2)',
           'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)'
         ],
         borderColor: [
           'rgba(255,99,132,1)',
           'rgba(54, 162, 235, 1)',
           'rgba(255, 206, 86, 1)',
           'rgba(75, 192, 192, 1)',
           'rgba(153, 102, 255, 1)',
           'rgba(255, 159, 64, 1)',
           'rgba(255,99,132,1)',
           'rgba(54, 162, 235, 1)',
           'rgba(255, 206, 86, 1)',
           'rgba(75, 192, 192, 1)',
           'rgba(153, 102, 255, 1)',
           'rgba(255, 159, 64, 1)'
         ],
         borderWidth: 1
       }]
     };
 
     var options = {
         scales: {
           yAxes: [{
             ticks: {
               beginAtZero: true
             }
           }]
         },
         legend: {
           display: false
         },
         elements: {
           point: {
             radius: 0
           }
         }
 
       };
 
     if ($("#barChart").length) {
       var barChartCanvas = $("#barChart").get(0).getContext("2d");
       // This will get the first returned node in the jQuery collection.
       var barChart = new Chart(barChartCanvas, {
         type: 'bar',
         data: data,
         options: options
       });
     }
    }


    statistic(){
      $.get('/admin/statistic', function(statistic){
        menu.setState({statistic:statistic})
      })
      var chart=[];
      { menu.state.statistic.forEach(element => {
        chart.push(element)
        
      })}
      ReactDOM.render(
        <section id="aa-agents">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="aa-agents-area">
                      <div className="aa-title">
                        <h2>Tổng số sách bán được</h2>
                      </div>
                      </div>
                    <div className="cart-info">
                      <table className="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th>Tháng</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>10</th>
                            <th>11</th>
                            <th>12</th>
                          </tr> 
                        </thead>
                        <tbody>
                          <tr>
                            <th>Số lượng</th>
                        {menu.state.statistic.map(function(pro,index){
                            return <th key ={index}>{pro}</th>
                           
                          })} 
                          </tr>  
                        </tbody>
                      </table>
                    </div>
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Thống kê sách bán theo tháng</h4>
                         
                          <canvas id="barChart1" style={{height:200 + 'px'}}></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>, document.getElementById("div9")
      )
    
      var data = {
       labels: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12"],
       datasets: [{
       label: '# of Votes',
       data: chart,
       backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)',
         'rgba(255, 99, 132, 0.2)',
           'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)'
         ],
         borderColor: [
           'rgba(255,99,132,1)',
           'rgba(54, 162, 235, 1)',
           'rgba(255, 206, 86, 1)',
           'rgba(75, 192, 192, 1)',
           'rgba(153, 102, 255, 1)',
           'rgba(255, 159, 64, 1)',
           'rgba(255,99,132,1)',
           'rgba(54, 162, 235, 1)',
           'rgba(255, 206, 86, 1)',
           'rgba(75, 192, 192, 1)',
           'rgba(153, 102, 255, 1)',
           'rgba(255, 159, 64, 1)'
         ],
         borderWidth: 1
       }]
     };
 
     var options = {
         scales: {
           yAxes: [{
             ticks: {
               beginAtZero: true
             }
           }]
         },
         legend: {
           display: false
         },
         elements: {
           point: {
             radius: 0
           }
         }
 
       };
 
     if ($("#barChart1").length) {
       var barChartCanvas = $("#barChart1").get(0).getContext("2d");
       // This will get the first returned node in the jQuery collection.
       var barChart = new Chart(barChartCanvas, {
         type: 'bar',
         data: data,
         options: options
       });
     }
    }



    
    
    componentDidMount(){
      $.get('/admin/user', function(users){
        menu.setState({users:users});
      })

      $.get('/admin/list_product',function(pro){
         
        menu.setState({pro:pro})
      })
      $.get('/admin/order', function(carts){
        menu.setState({carts:carts})
      })
      $.get('/admin/statistic_book', function(months){
        menu.setState({months:months})
      })
      $.get('/admin/statistic', function(statistic){
        menu.setState({statistic:statistic})
      })
    }  
      
}


var data;
class User extends React.Component{


  render(){
    return(
      <tr>
      <td className ="name">{this.props.name}</td>
      <td className ="name">{this.props.phone}</td>
      <td className ="name">{this.props.email}</td>
      <td className ="name">{this.props.addr}</td>
     </tr>
    )
  }
}
class List extends React.Component{
    constructor(props) {
        super(props);
     
        this.delete = this.delete.bind(this)
        this.edit = this.edit.bind(this)
        this.state = {
          data : {}
        }
      
        
    }
    render(){
        return(
          <tr>
          <td className ="image"><a href="#"><img title="product" alt="product" src={"/uploads/"+ this.props.img} height="50" width="50" /></a></td>
          <td className ="name"><a href="">{this.props.name}</a></td>
          <td className ="name">{this.props.num}</td>
          <td className ="name">{this.props.price}</td>
          <td><button onClick={this.delete}>Xóa</button>/<button onClick={this.edit}>Sửa</button></td>
         </tr>
        )
    }

    edit(){
      data = this
      $.post('/admin/edit',{id:this.props.id}, function(dt){
        ReactDOM.render(<Create action={"/admin/edit/"+ data.props.id } product=" Chi tiêt cuốn sách" button="Chỉnh sửa" name ={dt.name} price = {dt.price} num = {dt.num} type = {dt.type} author = {dt.author} dis = {dt.dis}  page={dt.page} size={dt.size} weight ={dt.weight}></Create>, document.getElementById("div9"))
      })
      menu.list();
    }

    delete(){
      $.post('/admin/delete',{id:data.props.id},function(data){
        menu.setState({pro:data})
        menu.list();
      })
    }
 
    
}


class Cart extends React.Component{
  constructor(props) {
    super(props);
    this.editCart = this.editCart.bind(this)
      
  }
  render(){
    return(
      <tr>
        <td className ="name"><a href="">{this.props.date}</a></td>
      <td className ="name"><a href="">{this.props.name}</a></td>
      <td className ="name">{this.props.phone}</td>
      <td className ="name">{this.props.sum}</td>
      <td className ="name">{this.props.status}</td>
      <td>
      <select id="product_optStaus" ref ="txt" className="form-control" name ="status">
        <option value="Đang chờ xử lý">Đang chờ xử lý</option>
        <option value="Đang vận chuyển ">Đang vận chuyển</option>
        <option value="Đã thanh toán">Đã thanh toán</option>
      </select>
      </td>
      <td><button onClick={this.editCart}>Sửa</button></td>
      </tr>
    )
  }

  editCart(){
    data = this
    status = this.refs.txt.value;
    $.post('/admin/status',{id:data.props.id, status:status} , function(dt){
      menu.setState({carts:dt})
      menu.order();
    })

  }
 
}


class Create extends React.Component{
  constructor(props) {
      super(props);
    
  }
  
  render(){
      return(
          <form method="post" className="form-horizontal" id="insert_form" action={this.props.action} encType="multipart/form-data">
          <div className="col-lg-12">
              <div className="page-header">
                  <div className="pull-right">
                      <button id="frm_edit_product_save" className="btn btn-success" type="submit">{this.props.button} <i className="fa fa-plus"></i></button>
                  </div>
                  <h2>{this.props.product}</h2>
              </div>
              <div className="form-group">
                  <label htmlFor="frmProductTitle" className="col-sm-2 control-label">Tên cuốn sách *</label>
                  <div className="col-sm-10">
                      <input type="text" id="frmProductTitle" name="name" className="form-control" minLength="5" defaultValue ={this.props.name} required/>

                  </div>
              </div>
              <div className="form-group">
                  <label htmlFor="frmProductPrice" className="col-sm-2 control-label">Giá sản phẩm *</label>
                  <div className="col-sm-6">
                      <div className="input-group">
                          <span className="input-group-addon">đ</span>
                          <input type="number" name="price" minLength="5" className="control-label" defaultValue ={this.props.price} required/>
                      </div>
                  </div>
              </div>
              
              <div className="form-group" id="editor-wrapper">
                  <label htmlFor="editor" className="col-sm-2 control-label">Mô tả *</label>
                  <div className="col-sm-10">
                      <textarea id="editor" minLength="5" rows="10" name="dis" className="form-control" defaultValue={this.props.dis} required></textarea>
                  </div>
              </div>
              
              
              <div className="form-group">
                  <input type="hidden" id="productOptJson" name="productOptJson" value="result.productOptions" />
                  <label htmlFor="editor" className="col-sm-2 control-label">Chi tiết</label>
                  <div className="col-lg-10">
                      <ul className="list-group" id="product_opt_wrapper">
                          <li className="list-group-item">
                              <div className="row">
                              <div className="col-lg-2">
                                  <strong>Tác giả:</strong>
                                  <input type="text" minLength="5" id="product_optName" className="form-control" name ="author" defaultValue={this.props.author} required />
                              </div>
                              <div className="col-lg-2">
                                  <strong>Nhà xuất bản:</strong>
                                  <input type="text"   minLength="5" id="product_optLabel" name="product" className="form-control" defaultValue ={this.props.product}required/>
                              </div>
                              <div className="col-lg-2">
                                  <strong>Thể loại:</strong>
                                  <select id="product_optType" className="form-control" name ="type">
                                      <option value="1">Tình yêu</option>
                                      <option value="2">Cổ tích</option>
                                      <option value="3">Truyện ngắn</option>
                                      <option value="4">Tiểu thuyết</option>
                                  </select>
                              </div>
                              <div className="col-lg-4">
                                  <strong>Số lượng:</strong>
                                  <input type="number"  minLength="1" id="product_optOptions" name ="num" className="form-control" defaulValue ={this.props.num} required/>
                              </div>
                              <div className="col-lg-2 text-right"><br/>
                                  <button id="product_opt_add" className="btn btn-success">{this.props.button}</button>
                              </div></div>
                          </li>                        
                      </ul>
                      
                  </div>
                </div>


                <div className="form-group">
                  <input type="hidden" id="productOptJson" name="productOptJson" value="result.productOptions" />
                  <label htmlFor="editor" className="col-sm-2 control-label">Chi tiết</label>
                  <div className="col-lg-10">
                      <ul className="list-group" id="product_opt_wrapper">
                          <li className="list-group-item">
                              <div className="row">
                              <div className="col-lg-4">
                                  <strong>Số trang:</strong>
                                  <input type="text" minLength="5" id="product_optName" className="form-control" name ="page" defaultValue={this.props.page} required />
                              </div>
                              <div className="col-lg-4">
                                  <strong>Kích thước:</strong>
                                  <input type="text"   minLength="5" id="product_optLabel" name="size" className="form-control" defaultValue ={this.props.size}required/>
                              </div>
                             
                              <div className="col-lg-4">
                       
                                  <strong>Cân nặng</strong>
                                  <input type="number"  minLength="1" id="product_optOptions" name ="weight" className="form-control" defaulValue ={this.props.weight} required/>
                              </div>
                              </div>
                          </li>                        
                      </ul>
                    </div>
                  </div>
                <div className="form-group">
                <input type="hidden" id="productOptJson" name="productOptJson" value="result.productOptions" />
                <label htmlFor="editor" className="col-sm-2 control-label">Image:</label>
                <div className="col-lg-10">
                    <ul className="list-group" id="product_opt_wrapper">
                        <li className="list-group-item">
                            <div className="row">
                            <div className="col-lg-2" >
                                <input type="file"  minLength="5"  name="filename" id="f_1" className="f" required/>
                            </div>
                            <div className="col-lg-4" id="file"></div>
                            <input type="file"  minLength="5" name="filename"  required/>
                          </div>
                        </li>                     
                    </ul>
                   
                </div> 
          </div>
               
            </div>
        </form>)
        
    }

   
}

ReactDOM.render(<Menu/>, document.getElementById("menu"))