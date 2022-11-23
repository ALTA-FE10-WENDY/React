import logo from './logo.svg';
import './App.css';
import Proptest from '../components/Props';
import Dummy from '../components/Dummy';
import Maptest from '../components/Maptest';
import Card from '../components/Card';
import { Container } from 'postcss';
import Navbar from '../components/Navbar';

function App() {

  const data = [
    {
      title: "item 1", description: "abc", image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/45fc99105415493.619ded0619991.jpg"
    },
    {
      title: "item 2", description: "def", image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/45fc99105415493.619ded0619991.jpg"
    },
  ]

  return (
    <>
      <Navbar/>
      <div className='flex flex-col pl-[5%] pr-[5%]'>
        <div className='grid grid-cols-4 gap-4'>
          {
            data.map((item) => {
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

export default App;
