import Card from "./Component/card";
import Nav from "./Component/nav";
import './App.css'
function App() {
  console.log(Nav)
  let products = [{
    title:"My most favorite place in the world",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloribus dolorum ratione optio. Tenetur id fugiat totam, ducimus velit? Officia mollitia reiciendis ipsum!"
  },{
    title:"My most favorite place in the world",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloribus dolorum ratione optio. Tenetur id fugiat totam, ducimus velit? Officia mollitia reiciendis ipsum!"
  },{
    title:"My most favorite place in the world",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloribus dolorum ratione optio. Tenetur id fugiat totam, ducimus velit? Officia mollitia reiciendis ipsum!"
  },{
    title:"My most favorite place in the world",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloribus dolorum ratione optio. Tenetur id fugiat totam, ducimus velit? Officia mollitia reiciendis ipsum!"
  },{
    title:"My most favorite place in the world",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloribus dolorum ratione optio. Tenetur id fugiat totam, ducimus velit? Officia mollitia reiciendis ipsum!"
  },{
    title:"My most favorite place in the world",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloribus dolorum ratione optio. Tenetur id fugiat totam, ducimus velit? Officia mollitia reiciendis ipsum!"
  },{
    title:"My most favorite place in the world",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloribus dolorum ratione optio. Tenetur id fugiat totam, ducimus velit? Officia mollitia reiciendis ipsum!"
  }]
  return (
    <div >
      <Nav/>
      <div class='scrollable'>
{products.map((product, index) => <Card key={index} product = {product} />)}
            </div>
    </div>
  );
}

export default App;
