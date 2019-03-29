class Menu extends React.Component{
    constructor(props) {
        super(props);
        this.create = this.create.bind(this)
        
    }

    render(){
        return(
            <ul className="list-group">
        <li className="list-group-item"><strong>Products</strong></li>
       
        <li className="list-group-item"><i className="fa fa-plus-square-o fa-icon" aria-hidden="true"></i> &nbsp; <button onClick={this.create}>New</button></li>
       
      
        <li className="list-group-item"><i className="fa fa-list fa-icon" aria-hidden="true"></i> &nbsp; <a href="/admin/list_product">List</a></li>
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
      ReactDOM.render(<Create/>, document.getElementById("div9"))

   
    
}
}

class Create extends React.Component{
    render(){
        return(
            <form method="post" className="form-horizontal" id="insert_form" action="/admin/create" enctype="multipart/form-data">
            <div className="col-lg-12">
                <div className="page-header">
                    <div className="pull-right">
                        <button id="frm_edit_product_save" className="btn btn-success" type="submit">Add product <i className="fa fa-plus"></i></button>
                    </div>
                    <h2>New product</h2>
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
                            <input type="number" name="price" className="form-control" step="1000" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="frmProductPublished" className="col-sm-2 control-label">Status</label>
                    <div className="col-sm-6">
                        <select className="form-control" id="frmProductPublished" name="Status">
                            <option value="true" selected>Published</option>
                            <option value="false">Draft</option>
                        </select>
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
                                    <button id="product_opt_add" className="btn btn-success">Add</button>
                                </div></div>
                            </li>                        
                        </ul>
                       
                    </div>
                </div>
                <div class="form-group">
                <input type="hidden" id="productOptJson" name="productOptJson" value="result.productOptions" />
                <label htmlFor="editor" className="col-sm-2 control-label">Image:</label>
                <div class="col-lg-10">
                    <ul class="list-group" id="product_opt_wrapper">
                        <li class="list-group-item">
                            <div class="row">
                            <div class="col-lg-2" >
                                <input type="file" name="filename" id="f_1" class="f"/>
                            </div>
                            <div class="col-lg-4" id="file"></div>
                            <input type="file" name="filename"/>
                          </div>
                        </li>                     
                    </ul>
                   
                </div> 
          </div>
                <div className="form-group">
                    <label for="frmProductTags" className="col-sm-2 control-label">Product tag words</label>
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