class Title extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-header-area">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-6">
                <div className="aa-header-left">
                  <div className="aa-telephone-no">
                    <span className="fa fa-phone"></span>
                    1-900-523-3564
                  </div>
                  <div className="aa-email hidden-xs">
                    <span className="fa fa-envelope-o"></span> info@markups.com
                  </div>
                </div>              
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6">
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav navbar-right">
                   <li><a href="/cart" className="menu-btn"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart <span className="badge" id="cart-count"></span></a></li>
                                        
                      <li><a href="/users/logout"><i className="fa fa-sign-out" aria-hidden="true"> </i>Logout</a></li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        )
    }
}




class Tabbar extends React.Component{
    constructor(props) {
        super(props);
        
    }


    render(){
        return(
            <div id="navbar" className="navbar-collapse collapse">
            <ul id="top-menu" className="nav navbar-nav navbar-right aa-main-nav">
              <li className="active"><a href="index.html">HOME</a></li>
               <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="properties.html">PROPERTIES <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">                
                  <li><a href="properties.html">PROPERTIES</a></li>
                  <li><a href="properties-detail.html">PROPERTIES DETAIL</a></li>                                            
                </ul>
              </li>
              <li><a href="gallery.html">GALLERY</a></li>                                         
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="blog-archive.html">BLOG <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">                
                  <li><a href="blog-archive.html">BLOG</a></li>
                  <li><a href="blog-single.html">BLOG DETAILS</a></li>                                            
                </ul>
              </li>
              <li><a href="contact.html">CONTACT</a></li>
             <li><a href="404.html">404 PAGE</a></li>
            </ul>                            
          </div>     
             
        )
    }
    
}


class Showinfo extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            
          

            <section id="aa-slider">
            <div className="aa-slider-area"> 
            
              <div className="aa-top-slider">
               
                <div className="aa-top-slider-single">
                  <img src="/img/slider/1.jpg" alt="img"/>
                
                  <div className="aa-top-slider-content">
                    <span className="aa-top-slider-catg">Duplex</span>
                    <h2 className="aa-top-slider-title">1560 Square Feet</h2>
                    <p className="aa-top-slider-location"><i className="fa fa-map-marker"></i>South Beach, Miami (USA)</p>
                    <span className="aa-top-slider-off">30% OFF</span>
                    <p className="aa-top-slider-price">$460,000</p>
                    <a href="#" className="aa-top-slider-btn">Read More <span className="fa fa-angle-double-right"></span></a>
                  </div>
                
                </div>
                

           </div>
            </div>
          </section>)     
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
                      <div className="col-md-2">
                        <div className="aa-single-advance-search">
                          <select>
                           <option value="0" >Category</option>
                            <option value="1">Flat</option>
                            <option value="2">Land</option>
                            <option value="3">Plot</option>
                            <option value="4">Commercial</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2">
                         <div className="aa-single-advance-search">
                          <select>
                            <option value="0" >Type</option>
                            <option value="1">Flat</option>
                            <option value="2">Land</option>
                            <option value="3">Plot</option>
                            <option value="4">Commercial</option>
                          </select>
                      </div>
                      </div>
                      <div className="col-md-2">
                         <div className="aa-single-advance-search">
                          <select>
                            <option value="0" >Type</option>
                            <option value="1">Flat</option>
                            <option value="2">Land</option>
                            <option value="3">Plot</option>
                            <option value="4">Commercial</option>
                          </select>
                      </div>
                      </div>
                      <div className="col-md-2">
                        <div className="aa-single-advance-search">
                          <input className="aa-search-btn" type="submit" value="Search"/>
                        </div>
                      </div>
                    </div>
                  </div>
                 <div className="aa-advance-search-bottom">
                   <div className="row">
                    <div className="col-md-6">
                      <div className="aa-single-filter-search">
                        <span>AREA (SQ)</span>
                        <span>FROM</span>
                        <span id="skip-value-lower" className="example-val">30.00</span>
                        <span>TO</span>
                        <span id="skip-value-upper" className="example-val">100.00</span>
                        <div id="aa-sqrfeet-range" className="noUi-target noUi-ltr noUi-horizontal noUi-background">
                        </div>                  
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="aa-single-filter-search">
                        <span>PRICE ($)</span>
                        <span>FROM</span>
                        <span id="skip-value-lower2" className="example-val">30.00</span>
                        <span>TO</span>
                        <span id="skip-value-upper2" className="example-val">100.00</span>
                        <div id="aa-price-range" className="noUi-target noUi-ltr noUi-horizontal noUi-background">
                        </div>      
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


class Aticle extends React.Component{
    constructor(props) {
        super(props);
       
    }

    render(){
        return(<div className="col-md-4">
        <article className="aa-properties-item">
          <a href="#" className="aa-properties-item-img">
            <img src="/img/item/1.jpg" alt="img"/>
          </a>
          <div className="aa-properties-item-content">
            <div className="aa-properties-about">
              <h3><a href="#">{this.props.title}</a></h3>
              <p></p>                      
            </div>
            <div className="aa-properties-detial">
              <span className="aa-price">
               {this.props.price}
              </span>
              <a href="/product/{this.id}" className="aa-secondary-btn">Xem chi tiết</a>
            </div>
          </div>
        </article>
        </div>)
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


class Body extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          mang:[]
         }
        
    }

    render(){
        return(
        <div className="aa-price-range">  
        <div id="aa-preloader-area">
        <div className="pulse"></div>
      </div>
     
        <a className="scrollToTop" href="#"><i className="fa fa-angle-double-up"></i></a>
     
      <header id="aa-header">  
       <Title/>
      </header>
     
      <section id="aa-menu-area">
        <nav className="navbar navbar-default main-navbar" role="navigation">  
          <div className="container">
            <div className="navbar-header">
            
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
             
               <a className="navbar-brand aa-logo" href="index.html"> Home <span>Property</span></a>    
            </div>
           
          <Tabbar/> 
          </div>
        </nav> 
      </section>      
            <Showinfo/>      
            <Search/>
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
                {this.state.mang.map(function(index,note ){
                  return <Aticle key ={index} id ={index} title = {note.title}/>
                })}
    
              </div>
            </div>
          </div>
        </div>
        </section>
        </div>)
     
    }  
    
    ConponentDidMount(){
      that = this.state
      $.get('/user', function(data){
          that.setState =({mang:data})
          console.log(data)
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
                          <a href="#"><img src="/img/blog-img-1.jpg" alt="img"/></a>
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
                 
                    <div className="col-md-4">
                      <article className="aa-blog-single">
                        <figure className="aa-blog-img">
                          <a href="#"><img src="/img/blog-img-3.jpg" alt="img"/></a>
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
<div>
<Body/> 
<Service/>
<LastBlog/>
<Footer/>
</div>  ,document.getElementById("1"))