import logo from './logo.svg';
import './App.css';
import Proptest from '../components/Props';
import Dummy from '../components/Dummy';
import Maptest from '../components/Maptest';
import Card from '../components/Card';
import { Container } from 'postcss';
import Navbar from '../components/Navbar';
import axios from "axios"
import { Component } from 'react';
import Alternateapi from './Alternateapi';


class App extends Component {

  state = {
    data: [],
  };

  async getAllProducts() {
    try {
      const response = await Alternateapi.all_products();
      this.setState({ data: response.data })
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  // getData() {
  //   axios
  //     .get(`https://fakestoreapi.com/products`)
  //     .then((response) => {
  //       this.setState({ data: response.data });
  //     })
  //     .catch((error) => {
  //       console.warn("failed to fetch from API")
  //     })
  // }

  componentDidMount() {
    // this.getData();
    this.getAllProducts();
  }

  render() {
    const result = this.state.data;
    return (
      <>
        <Navbar />
        <div className='flex flex-col pl-[5%] pr-[5%]'>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
            {
              result.map((item) => {
                return (
                  <Card
                    title={item.title} description={item.description} image={item.image}
                  />
                )
              }
              )
            }
          </div>
          {/* <Proptest /> */}
          {/* <Dummy /> */}
          {/* <Maptest /> */}
        </div>
      </>
    );
  }
}

export default App;
