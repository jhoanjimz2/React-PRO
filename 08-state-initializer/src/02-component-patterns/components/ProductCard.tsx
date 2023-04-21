import { ProductContextProps, Product, OnChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: ( args: OnChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValues
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
  
  const { counter, increaseBy, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider value={{ counter, increaseBy, product, maxCount: initialValues?.maxCount }}>
      <div 
        className={ `${ styles.productCard } ${ className }`}
        style={ style }
      >
        { 
          children({
            count: counter,
            maxCount: initialValues?.maxCount,
            isMaxCountReached,
            product,

            increaseBy,
            reset
          }) 
        }
      </div>
    </Provider>
  )
}
