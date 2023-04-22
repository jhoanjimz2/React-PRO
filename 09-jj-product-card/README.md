# JJ-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Jhoan Jimenez

## Ejemplo


```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'jj-product-card';
```


```
    <ProductCard
        product={ product } 
        initialValues={{
        count: 4,
        // maxCount: 10
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
```