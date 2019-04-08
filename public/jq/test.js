class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          user : false
        }
    }

    render(){
        return (
          <header id="aa-header">  
          <div className="site-navbar bg-white py-2">
<div className="search-wrap">
  <div className="container">
    <a href="#" className="search-close js-search-close"><span className="icon-close2"></span></a>
    <form action="#" method="post">
      <input type="text" className="form-control" placeholder="Search keyword and hit enter..."/>
    </form>  
  </div>
</div>

<div className="container">
  <div className="d-flex align-items-center justify-content-between">
    <div className="logo">
      <div className="site-logo">
        <a href="index.html" className="js-logo-clone">ShopMax</a>
      </div>
    </div>
    <div className="main-nav d-none d-lg-block">
      <nav className="site-navigation text-right text-md-center" role="navigation">
        <ul className="site-menu js-clone-nav d-none d-lg-block">
          <li className="has-children active">
            <a href="index.html">Home</a>
            <ul className="dropdown">
              <li><a href="#">Menu One</a></li>
              <li><a href="#">Menu Two</a></li>
              <li><a href="#">Menu Three</a></li>
              <li className="has-children">
                <a href="#">Sub Menu</a>
                <ul className="dropdown">
                  <li><a href="#">Menu One</a></li>
                  <li><a href="#">Menu Two</a></li>
                  <li><a href="#">Menu Three</a></li>
                </ul>
              </li>
            </ul>
          </li>
          
          <li><a href="shop.html">Shop</a></li>
          <li><a href="#">Catalogue</a></li>
          <li><a href="#">New Arrivals</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div className="icons">
      <a href="#" className="icons-btn d-inline-block js-search-open"><span className="icon-search"></span></a>
      <a href="#" className="icons-btn d-inline-block"><span className="icon-heart-o"></span></a>
      <a href="cart.html" className="icons-btn d-inline-block bag">
        <span className="fa fa-shopping"></span>
        <span className="number">2</span>
      </a>
      <a href="#" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span className="icon-menu"></span></a>
    </div>
  </div>
</div>
</div>
</header>
        )
    }

}




class Tabbar extends React.Component{
    constructor(props) {
        super(props);
        
    }


    render(){
        return(
        
          <div class="site-blocks-cover" data-aos="fade">
          <div class="container">
            <div class="row">
              <div class="col-md-6 ml-auto order-md-2 align-self-start">
                <div class="site-block-cover-content">
                <h2 class="sub-title">#New Summer Collection 2019</h2>
                <h1>Arrivals Sales</h1>
                <p><a href="#" class="btn btn-black rounded-0">Shop Now</a></p>
                </div>
              </div>
              <div class="col-md-6 order-1 align-self-end">
                <img src="images/model_3.png" alt="Image" class="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
        )
    }
    
}


class Showinfo extends React.Component{
    constructor(props){
        super(props)
        this.state={
          showImage: true
        }
    }

    render(){
        return (
            
          
          <div></div>)
        }
}


class Search extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <section id="aa-advance-search">
            <div className="container">
              <div className="aa-advance-search-area">
                <div className="form">
                 <div className="aa-advance-search-top">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="aa-single-advance-search">
                          <input type="text" placeholder="Type Your Location"/>
                        </div>
                      </div>
                     
                      </div>
                    </div>
                  </div>            
                    
              </div>
            </div>
          </section>
         )
    }
}


class About extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <section id="aa-about-us">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="aa-about-us-area">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="aa-about-us-left">
                            <img src="/img/about-us.png" alt="image"/>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="aa-about-us-right">
                            <div className="aa-title">
                              <h2>About Us</h2>
                              <span></span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ab dignissimos vitae maxime adipisci blanditiis rerum quae quos! Id at rerum maxime modi fugit vero corrupti, ad atque sit laborum ipsum sunt blanditiis suscipit odio, aut nostrum assumenda nobis rem a maiores temporibus non commodi laboriosam, doloremque expedita! Corporis, provident?</p>                  
                            <ul>
                              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, blanditiis.</li>
                              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia.</li>                    
                              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, blanditiis.</li>
                              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>)
    }
}





var info
class Aticle extends React.Component{
    constructor(props) {
        super(props);
       
      this.info = this.info.bind(this)
      this.cart = this.info.bind(this)
       
    }

    render(){
        return(<div className="col-md-3 col-sm-6 col-xs-12">
        <article className="aa-properties-item">
          <a href="#" className="aa-properties-item-img">
            <img src={"/uploads/"+ this.props.img} alt="img"/>
          </a>
          <div className="aa-properties-item-content">
            <div className="aa-properties-about">
          <center>
              <h6><a href="#">{this.props.title}</a></h6>
              </center>        
            </div>
            <div className="aa-properties-detial">
              <span className="aa-price">
              
              </span>
              <div className="aa-footer-middle">
              
              <a href={'/product/addCart/'+ this.props.id}><i className="fa fa-shopping-cart"></i></a>
                <a onClick ={this.info}><i className="fa fa-eye"></i></a>
                <a href="#"><i className="fa fa-youtube" id="fa-fa"></i></a>
                </div>
            </div>
          </div>
        </article>
        </div>)
    }

    info(){
      that.setState({showinfo:false})
      that.setState({showImage:true})
        $.post('/product/info',{id: this.props.num},function(data){
          
          info.setState({info:data ,url:data.img})
        })
      }
  

}









class Footer extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render(){
        return(<footer id="aa-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <div className="aa-footer-area">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="aa-footer-left">
                   <p>Designed by <a rel="nofollow" href="http://www.markups.io/">MarkUps.io</a></p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="aa-footer-middle">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-google-plus"></i></a>
                    <a href="#"><i className="fa fa-youtube"></i></a>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="aa-footer-right">
                    <a href="#">Home</a>
                    <a href="#">Support</a>
                    <a href="#">License</a>
                    <a href="#">FAQ</a>
                    <a href="#">Privacy & Term</a>
                  </div>
                </div>            
              </div>
            </div>
          </div>
          </div>
        </div>
      </footer>)
    }
    
}




class InfoImage extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      info:[],
      url: []
    }
    info = this
  }
  
  render(){
    return(<div className="container-fuilde">
    <div className="col-lg-2">
    </div>
     <div className="col-lg-4">
     <a href="#" className="aa-properties-item-img">
        <img src={"/uploads/"+ this.state.url[0]} alt="img"/>
      </a>
     </div>
    </div>)

  }
 
  }






var that
class Body extends React.Component{
  constructor(props) {
      super(props);
      that = this
      this.state = {
        showinfo :true,
        showImage:false,
        mang:[],
      
        }
      
  }

  render(){
      
      return( 
        <div className="aa-price-range">  
          <div id="aa-preloader-area">
            <div className="pulse"></div>
            </div>
            <a className="scrollToTop" href="#"><i className="fa fa-angle-double-up"></i></a>
            <Header></Header>
            <Tabbar></Tabbar>
            <Showinfo></Showinfo>
            { this.state.showinfo ?
            <section id="aa-latest-property">
              <div className="container">
                <div className="aa-latest-property-area">
                  <div className="aa-title">
                    <h2>Latest Properties</h2>
                      <span></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sit ea nobis quae vero voluptatibus.</p>         
                  </div>
                  <div className="aa-latest-properties-content">
                    <div className="row">
                      {this.state.mang.map(function(note,index){
                        return <Aticle key ={index} id ={note._id} num ={index} title = {note.title} img ={note.img[0]}/>
                      })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </section> : null }
            {this.state.showImage ? <InfoImage/>:null}
            <ClientBrand/>
            <Service/>
            <LastBlog/>
          <Footer/>
        </div>)
      }
  componentDidMount(){
  
    $.post('/admin/list_product', function(data){
        that.setState({mang:data})    
    })  
  }
}








class Service extends React.Component{
    render(){
        return( <section id="aa-service">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-service-area">
                <div className="aa-title">
                  <h2>Our Service</h2>
                  <span></span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sit ea nobis quae vero voluptatibus.</p>
                </div>
               
                <div className="aa-service-content">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="aa-single-service">
                        <div className="aa-service-icon">
                          <span className="fa fa-home"></span>
                        </div>
                        <div className="aa-single-service-content">
                          <h4><a href="#">Property Sale</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus quasi asperiores itaque dolorem at.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="aa-single-service">
                        <div className="aa-service-icon">
                          <span className="fa fa-check"></span>
                        </div>
                        <div className="aa-single-service-content">
                          <h4><a href="#">Property Rent</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus quasi asperiores itaque dolorem at.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="aa-single-service">
                        <div className="aa-service-icon">
                          <span className="fa fa-crosshairs"></span>
                        </div>
                        <div className="aa-single-service-content">
                          <h4><a href="#">Property Development</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus quasi asperiores itaque dolorem at.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="aa-single-service">
                        <div className="aa-service-icon">
                          <span className="fa fa-bar-chart-o"></span>
                        </div>
                        <div className="aa-single-service-content">
                          <h4><a href="#">Market Analysis</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus quasi asperiores itaque dolorem at.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>)
    }
   
}






class Best extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render(){
        return(
        <section id="aa-promo-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-promo-banner-area">
                <h3>Find Your Best Property</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ex illum corporis quibusdam numquam quisquam optio explicabo. Officiis odit quia odio dignissimos eius repellat id!</p>
                <a href="#" className="aa-view-btn">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </section>)
    }
    
}







class ClientSay extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render(){
        return(<section id="aa-client-testimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-client-testimonial-area">
                <div className="aa-title">
                  <h2>What Client Say</h2>
                  <span></span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eaque quas debitis animi ipsum, veritatis!</p>
                </div>
                
                <div className="aa-testimonial-content">
                 
                  <ul className="aa-testimonial-slider">
                    <li>
                      <div className="aa-testimonial-single">
                        <div className="aa-testimonial-img">
                          <img src="/img/testimonial-1.png" alt="testimonial img"/>
                        </div>
                        <div className="aa-testimonial-info">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate consequuntur ducimus cumque iure modi nesciunt recusandae eligendi vitae voluptatibus, voluptatum tempore, ipsum nisi perspiciatis. Rerum nesciunt fuga ab natus, dolorem?</p>
                        </div>
                        <div className="aa-testimonial-bio">
                          <p>David Muller</p>
                          <span>Web Designer</span>
                        </div>
                      </div>
                    </li>
                     <li>
                      <div className="aa-testimonial-single">
                        <div className="aa-testimonial-img">
                          <img src="/img/testimonial-3.png" alt="testimonial img"/>
                        </div>
                        <div className="aa-testimonial-info">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate consequuntur ducimus cumque iure modi nesciunt recusandae eligendi vitae voluptatibus, voluptatum tempore, ipsum nisi perspiciatis. Rerum nesciunt fuga ab natus, dolorem?</p>
                        </div>
                        <div className="aa-testimonial-bio">
                          <p>David Muller</p>
                          <span>Web Designer</span>
                        </div>
                      </div>
                    </li>
                     <li>
                      <div className="aa-testimonial-single">
                        <div className="aa-testimonial-img">
                          <img src="/img/testimonial-2.png" alt="testimonial img"/>
                        </div>
                        <div className="aa-testimonial-info">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate consequuntur ducimus cumque iure modi nesciunt recusandae eligendi vitae voluptatibus, voluptatum tempore, ipsum nisi perspiciatis. Rerum nesciunt fuga ab natus, dolorem?</p>
                        </div>
                        <div className="aa-testimonial-bio">
                          <p>David Muller</p>
                          <span>Web Designer</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>)
    }
    
}









class ClientBrand extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render(){
        return( <section id="aa-client-brand">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-client-brand-area">
                <ul className="aa-client-brand-slider">
                  <li>
                    <div className="aa-client-single-brand">
                      <img src="/img/client-brand-1.png" alt="brand image"/>
                    </div>
                  </li>
                  <li>
                    <div className="aa-client-single-brand">
                      <img src="/img/client-brand-2.png" alt="brand image"/>
                    </div>
                  </li>
                  <li>
                    <div className="aa-client-single-brand">
                      <img src="/img/client-brand-3.png" alt="brand image"/>
                    </div>
                  </li>
                  <li>
                    <div className="aa-client-single-brand">
                      <img src="/img/client-brand-5.png" alt="brand image"/>
                    </div>
                  </li>
                  <li>
                    <div className="aa-client-single-brand">
                      <img src="/img/client-brand-4.png" alt="brand image"/>
                    </div>
                  </li>
                   <li>
                    <div className="aa-client-single-brand">
                      <img src="/img/client-brand-1.png" alt="brand image"/>
                    </div>
                  </li>
                  <li>
                    <div className="aa-client-single-brand">
                      <img src="/img/client-brand-2.png" alt="brand image"/>
                    </div>
                  </li>
                  <li>
                    <div className="aa-client-single-brand">
                      <img src="/img/client-brand-3.png" alt="brand image"/>
                    </div>
                  </li>
                  <li>
                    <div className="aa-client-single-brand">
                      <img src="/img/client-brand-5.png" alt="brand image"/>
                    </div>
                  </li>
                  <li>
                    <div className="aa-client-single-brand">
                      <img src="/img/client-brand-4.png" alt="brand image"/>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    )
    }
    
}









class LastBlog extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render(){
        return(
        <section id="aa-latest-blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-latest-blog-area">
                <div className="aa-title">
                  <h2>Latest News</h2>
                  <span></span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe magni, est harum repellendus. Accusantium, nostrum!</p>
                </div>
                <div className="aa-latest-blog-content">
                  <div className="row">
                    <div className="col-md-4">
                      <article className="aa-blog-single">
                        <figure className="aa-blog-img">
                          <a href="#"><img src="/img/blog-img-2.jpg" alt="img"/></a>
                          <span className="aa-date-tag">15 April, 16</span>
                        </figure>
                        <div className="aa-blog-single-content">
                          <h3><a href="#">Lorem ipsum dolor sit amet, consectetur.</a></h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio est quaerat magnam exercitationem voluptas, voluptatem sed quam ab laborum voluptatum tempore dolores itaque, molestias vitae.</p>
                          <div className="aa-blog-single-bottom">
                            <a href="#" className="aa-blog-author"><i className="fa fa-user"></i> Admin</a>
                            <a href="#" className="aa-blog-comments"><i className="fa fa-comment-o"></i>6</a>
                          </div>
                        </div>                   
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>)
    }
    
}







ReactDOM.render(


    <Body></Body>

 ,document.getElementById("1"))