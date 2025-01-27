



# asin_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/unary_ops/asin_op.mojo)  
  

## ASin
  
  
  

### Parent Traits
  

- AnyType
- DifferentiableUnaryOp
- UnknownDestructibility
  

### Functions

#### fwd


```swift
fwd(arg0: Array) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the arcsine of the input array element-wise.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
  
#### Returns:  
  
An array containing the arcsine of each element in the input array.  
Type: `Array`  
  
  


#### Examples:
```python
a = Array([[1, 2], [3, 4]])
result = asin(a)
print(result)
```

#### Note:
This function supports:
- Automatic differentiation (forward and reverse modes).
- Complex valued arguments.  
</details>
#### jvp


```swift
jvp(primals: List[Array], tangents: List[Array]) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the Jacobian-vector product for the arcsine function.  
</summary>  
  
#### Args:  

* primals `List[Array]`: A list containing the primal input array.
* tangents `List[Array]`: A list containing the tangent vector.
  
#### Returns:  
  
The Jacobian-vector product for the arcsine function.  
Type: `Array`  
  
  


Implements forward-mode automatic differentiation for the arcsine function.
  
</details>
#### vjp


```swift
vjp(primals: List[Array], grad: Array, out: Array) -> List[Array]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the vector-Jacobian product for the arcsine function.  
</summary>  
  
#### Args:  

* primals `List[Array]`: A list containing the primal input array.
* grad `Array`: The gradient of the output with respect to some scalar function.
* out `Array`: The output of the forward pass (unused in this function).
  
#### Returns:  
  
A list containing the gradient with respect to the input.  
Type: `List[Array]`  
  
  


Implements reverse-mode automatic differentiation for the arcsine function.
  
</details>
#### unary_simd_op


```swift
unary_simd_op(arg0_real: SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], arg0_imag: SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]) -> Tuple[SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Low-level function to compute the arcsine of a complex number represented as SIMD vectors.  
</summary>  
  
#### Args:  

* arg0_real `SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]`: The real part of the complex number.
* arg0_imag `SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]`: The imaginary part of the complex number.
  
#### Returns:  
  
The real and imaginary parts of the arcsine of the complex number as a tuple.  
Type: `Tuple[SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]]`  
  
  
</details>
#### __call__


```swift
__call__(mut curr: Array, args: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Performs the forward pass for element-wise arcsine computation of an array.  
</summary>  
  
#### Args:  

* curr `Array`: The current array to store the result (modified in-place).
* args `List[Array]`: A list containing the input array.
  
  


Computes the arcsine of each element in the input array and stores the result in the current array.
Initializes the current array if not already set up.

#### Note:
This function assumes that the shape and data of the args are already set up.
If the current array (curr) is not initialized, it computes the shape based on the input array and sets up the data accordingly.  
</details>
## asin


```swift
asin(arg0: Array) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the arcsine of the input array element-wise.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
  
#### Returns:  
  
An array containing the arcsine of each element in the input array.  
Type: `Array`  
  
  


#### Examples:
```python
a = Array([[1, 2], [3, 4]])
result = asin(a)
print(result)
```

#### Note:
This function supports:
- Automatic differentiation (forward and reverse modes).
- Complex valued arguments.  
</details>