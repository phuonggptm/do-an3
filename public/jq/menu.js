
class Menu extends React.Component{
    constructor(props) {
        super(props);
        this.create = this.create.bind(this)
        this.list = this.list.bind(this)
        this.state = {
            pro : []
        }

        
        
    }
   
    list(){
        var that = this
        $.post('/admin/list_product',function(pro){
         
            that.setState({pro:pro})
        })
        
        ReactDOM.unmountComponentAtNode(document.getElementById('div9'))
        ReactDOM.render(
            <section id="aa-agents">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-agents-area">
            <div className="aa-title">
              <h2>Our Agents</h2>
              <span></span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sit ea nobis quae vero voluptatibus.</p>
            </div>
        <  div className="aa-agents-content">
        <ul className="aa-agents-slider">
        
        
        { this.state.pro.map(function(node,index){
           return <List key = { index} id={index} img ={node.img[0]} title = {node.title}></List>
        })}

        </ul>
        </  div>
        </div>
        </  div>
        </div>
        </div>
        </section>, document.getElementById("div9"))
    }

    render(){
        return(
            <ul className="list-group">
        <li className="list-group-item"><strong>Products</strong></li>
       
        <li className="list-group-item"><i className="fa fa-plus-square-o fa-icon" aria-hidden="true"></i> &nbsp; <button onClick={this.create}>New</button></li>
       
      
        <li className="list-group-item"><i className="fa fa-list fa-icon" aria-hidden="true"></i> &nbsp; <button onClick={this.list}>List</button></li>
        <li className="list-group-item"><strong>Orders</strong></li>
        <li className="list-group-item"><i className="fa fa-cube fa-icon" aria-hidden="true"></i> &nbsp; <a href="/admin/orders">List</a></li>
        <li className="list-group-item"><strong>Customers</strong></li>
        <li className="list-group-item"><i className="fa fa-users fa-icon" aria-hidden="true"></i> &nbsp; <a href="/admin/customers">List</a></li>
        <li className="list-group-item"><strong>Users</strong></li>
      
        <li className="list-group-item"><i className="fa fa-user-plus fa-icon" aria-hidden="true"></i> &nbsp; <a href="/admin/user/new">New</a></li>
        <li className="list-group-item"><i className="fa fa-user fa-icon" aria-hidden="true"></i> &nbsp; <a href="/admin/users">Edit</a></li>
       
        <li className="list-group-item"><i className="fa fa-user-circle-o fa-icon" aria-hidden="true"></i> &nbsp; <a href="/admin/user/edit/{{session.userId}}">My Account</a></li>
        <li className="list-group-item"><strong>Settings</strong></li>
        <li className="list-group-item"><i className="fa fa-cog fa-icon" aria-hidden="true"></i> &nbsp; <a href="/admin/settings">General settings</a></li>
        <li className="list-group-item"><i className="fa fa-bars fa-icon" aria-hidden="true"></i> &nbsp; <a href="/admin/settings/menu">Menu</a></li>
        <li className="list-group-item"><i className="fa fa-file-o fa-icon" aria-hidden="true"></i> &nbsp; <a href="/admin/settings/pages">Static pages</a></li>
        
    </ul>
        )
    }
    create(){
      ReactDOM.render(<Create product="New Product" button="Add Product"></Create>, document.getElementById("div9"))

   
    
}
}


class List extends React.Component{
    constructor(props) {
        super(props);
       
        
    }
   

    render(){
        return(
          
            <li>
            <div className="aa-single-agents">
              <div className="aa-agents-img">
                <img src={"/uploads/"+ this.props.img} alt="agent member image"/>
              </div>
              <div className="aa-agetns-info">
                <h4><a href="#"> {this.props.title}</a></h4>
                
              </div>
            </div>
          </li>
        
        )
    }
    
}

class Create extends React.Component{
    constructor(props) {
        super(props);
      
    }
   
    render(){
        return(
            <form method="post" className="form-horizontal" id="insert_form" action="/admin/create" encType="multipart/form-data">
            <div className="col-lg-12">
                <div className="page-header">
                    <div className="pull-right">
                        <button id="frm_edit_product_save" className="btn btn-success" type="submit">{this.props.button} <i className="fa fa-plus"></i></button>
                    </div>
                    <h2>{this.props.product}</h2>
                </div>
                <div className="form-group">
                    <label htmlFor="frmProductTitle" className="col-sm-2 control-label">Product title *</label>
                    <div className="col-sm-10">
                        <input type="text" id="frmProductTitle" name="title" className="form-control" minLength="5" maxLength="200" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="frmProductPrice" className="col-sm-2 control-label">Product price *</label>
                    <div className="col-sm-6">
                        <div className="input-group">
                            <span className="input-group-addon">$</span>
                            <input type="number" name="price" className="form-control"  />
                        </div>
                    </div>
                </div>
                
                <div className="form-group" id="editor-wrapper">
                    <label htmlFor="editor" className="col-sm-2 control-label">Product description *</label>
                    <div className="col-sm-10">
                        <textarea id="editor" minLength="5" rows="10" name="dis" className="form-control" required></textarea>
                    </div>
                </div>
               
                
                <div className="form-group">
                    <input type="hidden" id="productOptJson" name="productOptJson" value="result.productOptions" />
                    <label htmlFor="editor" className="col-sm-2 control-label">Product options</label>
                    <div className="col-lg-10">
                        <ul className="list-group" id="product_opt_wrapper">
                            <li className="list-group-item">
                                <div className="row">
                                <div className="col-lg-2">
                                    <strong>Name:</strong>
                                    <input type="text" id="product_optName" className="form-control" name ="name" placeholder="" />
                                </div>
                                <div className="col-lg-2">
                                    <strong>Label:</strong>
                                    <input type="text" id="product_optLabel"name="type" className="form-control" placeholder="Select size"/>
                                </div>
                                <div className="col-lg-2">
                                    <strong>Type:</strong>
                                    <select id="product_optType" className="form-control" name ="size">
                                        <option value="select">Select</option>
                                        <option value="radio">Radio</option>
                                        <option value="checkbox">Checkbox</option>
                                    </select>
                                </div>
                                <div className="col-lg-4">
                                    <strong>Options:</strong>
                                    <input type="number" id="product_optOptions" name ="num"className="form-control" placeholder="comma, seporated, list"/>
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
                <label htmlFor="editor" className="col-sm-2 control-label">Image:</label>
                <div className="col-lg-10">
                    <ul className="list-group" id="product_opt_wrapper">
                        <li className="list-group-item">
                            <div className="row">
                            <div className="col-lg-2" >
                                <input type="file" name="filename" id="f_1" className="f"/>
                            </div>
                            <div className="col-lg-4" id="file"></div>
                            <input type="file" name="filename"/>
                          </div>
                        </li>                     
                    </ul>
                   
                </div> 
          </div>
                <div className="form-group">
                    <label htmlFor="frmProductTags" className="col-sm-2 control-label">Product tag words</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="frmProductTags" name="frmProductTags"/>
                        <p className="help-block">Tag words used to indexed products, making them easier to find and filter.</p>
                    </div>
                </div>
            </div>
        </form>)
        
    }

   
}

ReactDOM.render(<Menu/>, document.getElementById("menu"))