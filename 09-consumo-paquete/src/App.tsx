import { ProductButtons, ProductCard, ProductImage, ProductTitle } from 'jj-product-card';
import { Button, MyLabel } from 'jj-my-storybook-components';
import './App.css';


const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

function App() {
  return (
    <div className="App App-header">
      <ProductCard
        product={ product } 
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({ reset, increaseBy, isMaxCountReached, maxCount, count }) => (
            <>
            <ProductImage/>
            <ProductTitle/>
            <ProductButtons/>
            </>
          )
        }
      </ProductCard>
      <MyLabel label={'Hola Mundo'} size={'h1'} allCaps={false} color={'primary'}/>
      <Button label={'Click me'} primary/>
    </div>
  );
}

export default App;
