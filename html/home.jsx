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
    }

    componentDidMount(){
      var self = this;
      axios.get('menu_items/', {

      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log('error is ',error);
      });
    }

    render() {
      return (
          <div className="list-group">
            <a href="#" className="list-group-item active">
              <h4 className="list-group-item-heading">List group item heading</h4>
              <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            </a>
            <a href="#" className="list-group-item">
              <h4 className="list-group-item-heading">List group item heading</h4>
              <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            </a>
            <a href="#" className="list-group-item">
              <h4 className="list-group-item-heading">List group item heading</h4>
              <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            </a>
          </div>
      )
    }
}


ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={ShowPost} path="/"></Route>
    </Router>,
document.getElementById('app'));