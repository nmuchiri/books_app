
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'

//CSS import
import "../css/components/Home.css";

const Home = () => {

//   // Setting up state that will be used for repos

  // const [data, setData]=useState([])

  // // used for handling loader
  // const [loading, setLoading]= useState(true)
 
  // useEffect(()=>{
  //   axios.get('https://api.github.com/users/nmuchiri/repos').then((res)=>{
  //     console.log(res.data)
  //    setData(res.data)
  //   }).then (()=> setLoading(false))
  // }, [])

  // const display =()=>{
  //   if (loading){
  //     return <Spinner/>

  //   }else{

  //     return data.map ((card)=>(
  //       <div key={card.id} className="col s12 m6">
  //         <div className="card blue-grey darken-1">
  //           <div className="card-content white-text">
  //             <span className="card-title">{card.name}</span>
  //             <p>I am a very simple card. I am good at containing small bits of information.
  //             I am convenient because I require little markup to use effectively.</p>
  //           </div>
  //           <div className="card-action">
  //             <a href="#">This is a link</a>
  //             <a href="#">This is a link</a>
  //           </div>
  //         </div>
  //     </div>
  //     ))
  //     }
  // }


// return(
// <div className= "container">
//   <h1>Naomi Portfolio</h1>
//  <div className= "row">{display()}</div>

// </div>
// )

return(
  <div>
    <div>
    <h1>Naomi's Portfolio</h1>
    </div>
    <container>
    <Col xs={6} md={4}>
      <Image src="https://images.unsplash.com/photo-1612170482263-b7e393c4e87f?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" roundedCircle />
    </Col>
    </container>
  </div>

)
}

export default Home;
