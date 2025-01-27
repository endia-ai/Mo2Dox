



# pow_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/binary_ops/pow_op.mojo)  
  

## Pow
  
  
  

### Parent Traits
  

- AnyType
- DifferentiableBinaryOp
- UnknownDestructibility
  

### Functions

#### fwd


```swift
fwd(arg0: Array, arg1: Array) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Raises the first array to the power of the second array element-wise.  
</summary>  
  
#### Args:  

* arg0 `Array`: The first input array.
* arg1 `Array`: The second input array.
  
#### Returns:  
  
The element-wise result of raising arg0 to the power of arg1.  
Type: `Array`  
  
  


#### Examples:
```python
a = Array([[1, 2], [3, 4]])
b = Array([[5, 6], [7, 8]])
result = pow_to(a, b)
print(result)
```

#### This function supports
- Broadcasting.
- Automatic differentiation (forward and reverse modes).
- Complex valued arguments.  
</details>
#### jvp


```swift
jvp(primals: List[Array], tangents: List[Array]) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Compute Jacobian-vector product for array exponentiation.  
</summary>  
  
#### Args:  

* primals `List[Array]`: Primal input arrays.
* tangents `List[Array]`: Tangent vectors.
  
#### Returns:  
  
Array: Jacobian-vector product.  
Type: `Array`  
  
  


#### Note:
Implements forward-mode automatic differentiation for exponentiation.
The result represents how the output changes with respect to
infinitesimal changes in the inputs along the directions specified by the tangents.

#### See Also:
pow_vjp: Reverse-mode autodiff for exponentiation.  
</details>
#### vjp


```swift
vjp(primals: List[Array], grad: Array, out: Array) -> List[Array]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Compute vector-Jacobian product for array exponentiation.  
</summary>  
  
#### Args:  

* primals `List[Array]`: Primal input arrays.
* grad `Array`: Gradient of the output with respect to some scalar function.
* out `Array`: The output of the forward pass.
  
#### Returns:  
  
List[Array]: Gradients with respect to each input.  
Type: `List[Array]`  
  
  


#### Note:
Implements reverse-mode automatic differentiation for exponentiation.
Returns arrays with shape zero for inputs that do not require gradients.

#### See Also:
pow_jvp: Forward-mode autodiff for exponentiation.  
</details>
#### binary_simd_op


```swift
binary_simd_op(arg0_real: SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], arg1_real: SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], arg0_imag: SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], arg1_imag: SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]) -> Tuple[SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Low-level function to raise a complex number to a complex power represented as SIMD vectors.  
</summary>  
  
#### Args:  

* arg0_real `SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]`: The real part of the complex number.
* arg1_real `SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]`: The real part of the power.
* arg0_imag `SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]`: The imaginary part of the complex number.
* arg1_imag `SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]`: The imaginary part of the power.
  
#### Returns:  
  
The real and imaginary parts of the complex number raised to the complex power as a tuple.  
Type: `Tuple[SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]]`  
  
  
</details>
#### __call__


```swift
__call__(mut curr: Array, args: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Raises the first array to the power of the second array element-wise and stores the result in the current array (curr). The function assumes that the shape and data of the args are already set up. If the shape and data of the current array (curr) is not set up, the function will compute the shape based on the shapes of the args and set up the data accordingly.  
</summary>  
  
#### Args:  

* curr `Array`: The current array, must be mutable.
* args `List[Array]`: The two arrays to raise to the power.
  
  
</details>
## pow_to


```swift
pow_to(arg0: Array, arg1: Array) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Raises the first array to the power of the second array element-wise.  
</summary>  
  
#### Args:  

* arg0 `Array`: The first input array.
* arg1 `Array`: The second input array.
  
#### Returns:  
  
The element-wise result of raising arg0 to the power of arg1.  
Type: `Array`  
  
  


#### Examples:
```python
a = Array([[1, 2], [3, 4]])
b = Array([[5, 6], [7, 8]])
result = pow(a, b)
print(result)
```

#### This function supports
- Broadcasting.
- Automatic differentiation (forward and reverse modes).
- Complex valued arguments.  
</details>