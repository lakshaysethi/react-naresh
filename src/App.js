
import './App.css';
import Card from './components/Card';
import Test from './components/Test';
import ImageA from './components/assets/images/image1.jpg'
import ImageB from './components/assets/images/image2.jpg'
import ImageC from './components/assets/images/image3.jpg'
import { Box } from '@mui/system';
function App() {
  return (
    <div className="App">
      <Box sx={{display:"flex",
       flexWrap:"wrap",
       justifyContent:"space-around"
       }}>
      <Card 
      title="Upgrade your home | Amazon Brands & more"
      img_src={ImageA}
      btn_txt="see more"
      />
      <Card 
      title="Upgrade your home | Amazon Brands & more"
      img_src={ImageB}
      btn_txt="see more"
      />
      <Card 
      title="Upgrade your home | Amazon Brands & more"
      img_src={ImageC}
      btn_txt="see more"
      />
      </Box>
      <Test />
    </div>
  );
}

export default App;
