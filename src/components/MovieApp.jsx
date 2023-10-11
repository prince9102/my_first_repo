import React, { useEffect, useState } from 'react'
import Items from './Items';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import { Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import ClipLoader from "react-spinners/ClipLoader";
import NavBar from './NavBar';




const MovieApp = () => {
    

    useEffect(() => {

        getMovie()
    }, [])



    const [movie, setMovie] = useState([])
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('')
    const [pre, setpre] = useState(0)
    const [next, setnext] = useState(4)
    let [color, setColor] = useState("#ffffff")
    const [loading, setLoading] = useState(false)
    const [randomData, setRandomData] = useState([]);
const [movieData , setmovieData] = useState([])


    function getRandomData(num) {
        

        let data = []
        for (let i = 0; i < num; i++) {
            let index = Math.floor(Math.random() * movie.length);
            data.push(movie[index]);
        }
        setRandomData([...data])
   
    }
    useEffect(() => {
        // setInterval(()=>{
        // getRandomData(4);
        // },10000)
    }, [movie])

    const getMovie = () => {
        setLoading(true)
        axios.get('http://localhost:3002/movies')
            .then((res) => {
                setMovie(res.data)
                setmovieData(res.data)
                setLoading(false)
                console.log(res.data)
            })
            .catch(error => console.log(error))
    }



const getSearchData = (e) => {
 let y =  movieData.slice(pre, next).filter((element) => {
    return  element.title.toLowerCase().includes(e.toLowerCase());
    
        });

setMovie(y)
// return element.title.toLowerCase() == (e.toLowerCase())
// })
}

const updateCategory = (selectedCategory) => {

        let x =  movieData.filter((data)=>{
          return data.genres.includes(selectedCategory)})
          console.log(x,'hgh')
    setMovie(x);

}


    return (
        <>
        
           <NavBar searchData={getSearchData} categoryData = {updateCategory}/>
            <Row>
              {loading ? <ClipLoader
                    color="red"
                    loading={true}

                    size={190}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> :
                    movie.slice(pre, next).map((data, index) => {
                        return (
                            <Col md={3}>
                                <Card className='my-2' key={index} >
                                    <Card.Img varient="top" src={data.posterUrl} alt={data.title} style={{ width: 350, height: 200 }} />
                                    <Card.Body>
                                        <Card.Title>{data.title}</Card.Title>
                                        <Card.Text>{data.plot}
                                            <span className='d-flex  text-md text-black'>Year : {data.year}</span></Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>)

                    })}
            </Row>




            <button onClick={() => {
                pre > 0 &&
                    setpre(pre - 4)
                setnext(next - 4)
            }} className='btn btn-primary rounded m-2 ' >Previous</button>
            <button

                onClick={() => {
                    setpre(pre + 4)
                    setnext(next + 4)

                }}
                className='btn btn-primary rounded'>Next</button>



<hr></hr>
            <h2 className='d-flex justify-content-center'>Random Movie</h2>
            <Row>
                {console.log(randomData)}
                {
                    randomData.map((data, index) => (
                        <Col md={3}>
                            <Card className='my-2' key={index} >
                                <Card.Img varient="top" src={data?.posterUrl} alt={data?.title} style={{ width: 350, height: 200 }} />
                                <Card.Body>
                                    <Card.Title>{data?.title}</Card.Title>
                                    <Card.Text>{data?.plot}
                                        <span className='d-flex  text-md text-black'>Year : {data?.year}</span></Card.Text>

                                </Card.Body>
                            </Card>

                        </Col>
                    ))}
            </Row>



        </>
    )
}

export default MovieApp










// filter((data)=>{
//     return search.toLowerCase()==='' ? data : data.title.toLowerCase().includes(search)

// }).















































































































































// import React, { useEffect, useState } from 'react'
// import Items from './Items';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card'
// import { Row, Col } from 'react-bootstrap';
// import Dropdown from 'react-bootstrap/esm/Dropdown';
// import ClipLoader from "react-spinners/ClipLoader";



// const MovieApp = () => {

//     useEffect(() => {


//         getMovie()


//         // category()
//     }, [])



//     const [movie, setMovie] = useState([])
//     const [search, setSearch] = useState('');
//     const [category, setCategory] = useState('')
//     const [pre, setpre] = useState(0)
//     const [next, setnext] = useState(4)
//     let [color, setColor] = useState("#ffffff")
//     const [loading, setLoading] = useState(false)
//     const [randomData, setRandomData] = useState([]);

//     function getRandomData(num) {

//         let data = []
//         for (let i = 0; i < num; i++) {
//             let index = Math.floor(Math.random() * movie.length);
//             data.push(movie[index]);
//         }
//         setRandomData([...data])
//     }
//     useEffect(() => {
//         getRandomData(4);
//     }, [movie])

//     const getMovie = () => {
//         setLoading(true)
//         axios.get('http://localhost:3002/movies')
//             .then((res) => {
//                 setMovie(res.data)
//                 setLoading(false)
//                 console.log(res.data)
//             })
//             .catch(error => console.log(error))
//     }








//     const updateCategory = (selectedCategory) => {
//         console.log(selectedCategory, 'selectedCategory');
//         setCategory(selectedCategory);


//         // let xx =  movie.filter((data)=>{
//         //   return data.genres.includes(category)

//         // })

//         // console.log(xx);

//     };


//     const filterMovies = (movies) => {
//         return movies.filter((data) => {
//             const matchesSearch = !search || data.title.toLowerCase().includes(search.toLowerCase());
//             const matchesCategory = !category || data.genres.includes(category);
//             return matchesSearch && matchesCategory;
//         });
    // };



//     return (
//         <>
//             <Navbar expand="lg" className="bg-dark">
//                 <Container fluid>
//                     <Navbar.Brand className='text-white' >Movie App</Navbar.Brand>
//                     <Navbar.Toggle aria-controls="navbarScroll" />
//                     <Navbar.Collapse id="navbarScroll">
//                         <Nav
//                             className="me-auto my-2 my-lg-0"
//                         // style={{ maxHeight: '100px' }}
//                         // navbarScroll
//                         >
//                             <Nav.Link className='text-white hover:color-blue'>Home</Nav.Link>

//                             <Dropdown onSelect={(e) => {
//                                 updateCategory(e)
//                             }}  >
//                                 <Dropdown.Toggle data-bs-theme='dark'>
//                                     Category
//                                 </Dropdown.Toggle>

//                                 <Dropdown.Menu data-bs-theme='dark' >
//                                     <Dropdown.Item eventKey='Crime' >Crime</Dropdown.Item>
//                                     <Dropdown.Item eventKey='Drama'>Drama</Dropdown.Item>
//                                     <Dropdown.Item eventKey='Music'>Music </Dropdown.Item>
//                                     <Dropdown.Item eventKey='Adventure'>Adventure </Dropdown.Item>
//                                 </Dropdown.Menu>
//                             </Dropdown>
//                             <Nav.Link to={'/login'} className='text-white'>Login</Nav.Link>
//                             <Nav.Link to={'/register'} className='text-white'>Register</Nav.Link>

//                         </Nav>
//                         <Form className="d-flex">
//                             <Form.Control
//                                 type="search"
//                                 placeholder="Search"
//                                 className="me-2"
//                                 aria-label="Search"
//                                 onChange={(e) => setSearch(e.target.value)}

//                             />
//                             {/* <Button variant="outline-success" onChange={(e)=>setSearch(e.target.value)}>Search</Button> */}
//                         </Form>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>

//             <Row>

//                 {/* {movie.filter((data)=>{

//                     if(search == ''){
//                         return data ; 
//                     }
//                     else if(data.title.toLowerCase().includes(search.toLowerCase())){
//                         return data;

//                     }
//                      }) */}





//                 {loading ? <ClipLoader
//                     color="red"
//                     loading={true}

//                     size={190}
//                     aria-label="Loading Spinner"
//                     data-testid="loader"
//                 /> :
//                     filterMovies(movie.slice(pre, next)).map((data, index) => {
//                         return (
//                             <Col md={3}>
//                                 <Card className='my-2' key={index} >
//                                     <Card.Img varient="top" src={data.posterUrl} alt={data.title} style={{ width: 350, height: 200 }} />
//                                     <Card.Body>
//                                         <Card.Title>{data.title}</Card.Title>
//                                         <Card.Text>{data.plot}
//                                             <span className='d-flex  text-md text-black'>Year : {data.year}</span></Card.Text>

//                                     </Card.Body>
//                                 </Card>
//                             </Col>)

//                     })}
//             </Row>




//             <button onClick={() => {
//                 pre > 0 &&
//                     setpre(pre - 4)
//                 setnext(next - 4)
//             }} className='btn btn-primary rounded m-2 ' >Previous</button>
//             <button

//                 onClick={() => {
//                     setpre(pre + 4)
//                     setnext(next + 4)

//                 }}
//                 className='btn btn-primary rounded'>Next</button>


//             <h2 className='d-flex justify-content-center'>Random Movie</h2>
//             <Row>
//                 {console.log(randomData)}
//                 {
//                     randomData.map((data, index) => (
//                         <Col md={3}>
//                             <Card className='my-2' key={index} >
//                                 <Card.Img varient="top" src={data?.posterUrl} alt={data?.title} style={{ width: 350, height: 200 }} />
//                                 <Card.Body>
//                                     <Card.Title>{data?.title}</Card.Title>
//                                     <Card.Text>{data?.plot}
//                                         <span className='d-flex  text-md text-black'>Year : {data?.year}</span></Card.Text>

//                                 </Card.Body>
//                             </Card>

//                         </Col>
//                     ))}
//             </Row>



//         </>
//     )
// }

// export default MovieApp










// filter((data)=>{
//     return search.toLowerCase()==='' ? data : data.title.toLowerCase().includes(search)

// }).