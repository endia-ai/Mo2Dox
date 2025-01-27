



# relu_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/unary_ops/relu_op.mojo)  
  

## Relu
  
  
  

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
  
Computes the rectified linear unit (ReLU) of the input array element-wise.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
  
#### Returns:  
  
An array containing the ReLU of each element in the input array.  
Type: `Array`  
  
  


#### Examples:
```python
a = Array([[1, 2], [3, 4]])
result = relu(a)
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
  
Computes the Jacobian-vector product for the ReLU function.  
</summary>  
  
#### Args:  

* primals `List[Array]`: A list containing the primal input array.
* tangents `List[Array]`: A list containing the tangent vector.
  
#### Returns:  
  
The Jacobian-vector product for the ReLU function.  
Type: `Array`  
  
  


Implements forward-mode automatic differentiation for the ReLU function.

#### Note:
The Jacobian-vector product for ReLU is computed as ge_zero(x) * dx,
where x is the primal input and dx is the tangent vector.  
</details>
#### vjp


```swift
vjp(primals: List[Array], grad: Array, out: Array) -> List[Array]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the vector-Jacobian product for the ReLU function.  
</summary>  
  
#### Args:  

* primals `List[Array]`: A list containing the primal input array.
* grad `Array`: The gradient of the output with respect to some scalar function.
* out `Array`: The output of the forward pass (unused in this function).
  
#### Returns:  
  
A list containing the gradient with respect to the input.  
Type: `List[Array]`  
  
  


Implements reverse-mode automatic differentiation for the ReLU function.

#### Note:
The vector-Jacobian product for ReLU is computed as ge_zero(x) * grad,
where x is the primal input and grad is the incoming gradient.  
</details>
#### unary_simd_op


```swift
unary_simd_op(arg0_real: SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], arg0_imag: SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]) -> Tuple[SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Low-level function to compute the rectified linear unit (ReLU) of a complex number represented as SIMD vectors.  
</summary>  
  
#### Args:  

* arg0_real `SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]`: The real part of the complex number.
* arg0_imag `SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]`: The imaginary part of the complex number.
  
#### Returns:  
  
The real and imaginary parts of the ReLU of the complex number as a tuple.  
Type: `Tuple[SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]]`  
  
  
</details>
#### __call__


```swift
__call__(mut curr: Array, args: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Performs the forward pass for element-wise ReLU computation of an array.  
</summary>  
  
#### Args:  

* curr `Array`: The current array to store the result (modified in-place).
* args `List[Array]`: A list containing the input array.
  
  


Computes the ReLU of each element in the input array and stores the result in the current array.
Initializes the current array if not already set up.

#### Note:
This function assumes that the shape and data of the args are already set up.
If the current array (curr) is not initialized, it computes the shape based on the input array and sets up the data accordingly.  
</details>
## relu


```swift
relu(arg0: Array) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the rectified linear unit (ReLU) of the input array element-wise.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
  
#### Returns:  
  
An array containing the ReLU of each element in the input array.  
Type: `Array`  
  
  


#### Examples:
```python
a = Array([[1, 2], [3, 4]])
result = relu(a)
print(result)
```

#### Note:
This function supports:
- Automatic differentiation (forward and reverse modes).
- Complex valued arguments.  
</details>