var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var hashHistory = window.ReactRouter.hashHistory;
var Link = window.ReactRouter.Link;

class ShowPost extends React.Component {
    constructor(props) {
      super(props);
      this.state ={
        menuItems:[]
      };
      //TODO: find out why this doesn't work
      this.componentDidMount=this.componentDidMount.bind(this);
    }

    componentDidMount(){
      //binding this
      self = this;
      axios.get('menu_items/', {

      })
      .then(function (response) {
        self.setState({menuItems:response.data})
        console.log(self.state.menuItems)
      })
      .catch(function (error) {
        console.log('error is ',error);
      })
    }

    render() {
      return (
          <div className="list-group">
            {
              this.state.menuItems.map(function(item) {
                 return <a href="#" key={item.id} className="list-group-item active">
                          <h4 className="list-group-item-heading">{item.name}</h4>
                          <p className="list-group-item-text">{item.price}</p>
                        </a>
              })
            }
          </div>
      )
    }
}


ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={ShowPost} path="/"></Route>
    </Router>,
document.getElementById('app'));