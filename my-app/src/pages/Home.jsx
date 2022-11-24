import logo from './logo.svg';
import './Home.css';

import { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from 'postcss';
import axios from "axios"

import Proptest from '../components/Props';
import Dummy from '../components/Dummy';
import Maptest from '../components/Maptest';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

import Alternateapi from './Alternateapi';

class Home extends Component {

  state = {
    data: [],
  };

  // async getAllProducts() {
  //   try {
  //     const response = await Alternateapi.all_products();
  //     this.setState({ data: response.data })
  //     console.log(response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  getData() {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=45396c865133efebe99ead193799eb62&language=en-US&page=1`)
      .then((response) => {
        this.setState({ data: response.data.results });
        console.log(response.data.results)
      })
      .catch((error) => {
        console.warn("failed to fetch from API")
      })
  }

  componentDidMount() {
    this.getData();
    // this.getAllProducts();
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
                    title={item.title} description={item.description} image={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
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

export default Home;
