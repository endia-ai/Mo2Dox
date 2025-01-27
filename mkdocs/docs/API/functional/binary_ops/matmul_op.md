



# matmul_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/binary_ops/matmul_op.mojo)  
  

## matmul_shape


```swift
matmul_shape(mut curr: ArrayShape, args: List[ArrayShape])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the shape of the result of a batched matrix multiplication operation. Given a lhs Array Shape (_,M,K) and a rhs Array Shape (_,K,N), the result will be (_,M,N). It also performs broadcasting on the two input shapes to make them compatible for matrix multiplication.  
</summary>  
  
#### Args:  

* curr `ArrayShape`: The ArrayShape to store the result of the computation.
* args `List[ArrayShape]`: Lhs ArrayShape, rhs ArrayShape.
  
  


#### Constraints:
- The number of dimensions of the lhs ArrayShape and rhs ArrayShape must be greater than or equal to 2.
- The last dimension of the lhs ArrayShape must be equal to the second-to-last dimension of the rhs ArrayShape.  
</details>
## matmul_fwd


```swift
matmul_fwd(mut curr: Array, args: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Perfomr batched matrix multiplication between two arrays and stores the result in the current array (curr). The function assumes that the shape and data of the args are already set up.  
</summary>  
  
#### Args:  

* curr `Array`: The current array, must be mutable.
* args `List[Array]`: The two arrays to multiply.
  
  
</details>
## matmul_vjp


```swift
matmul_vjp(primals: List[Array], grad: Array, out: Array) -> List[Array]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Compute vector-Jacobian product for batched matrix multiplication.  
</summary>  
  
#### Args:  

* primals `List[Array]`: Primal input arrays.
* grad `Array`: Gradient of the output with respect to some scalar function.
* out `Array`: The output of the forward pass.
  
#### Returns:  
  
List[Array]: Gradients with respect to each input.  
Type: `List[Array]`  
  
  


#### Note:
Implements reverse-mode automatic differentiation for batched matrix multiplication.
Returns arrays with shape zero for inputs that do not require gradients.

#### See Also:
fwd: Forward-mode autodiff for batched matrix multiplication.  
</details>
## matmul_jvp


```swift
matmul_jvp(primals: List[Array], tangents: List[Array]) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Compute Jacobian-vector product for batched matrix multiplication.  
</summary>  
  
#### Args:  

* primals `List[Array]`: Primal input arrays.
* tangents `List[Array]`: Tangent vectors.
  
#### Returns:  
  
Array: Jacobian-vector product.  
Type: `Array`  
  
  


#### Note:
Implements forward-mode automatic differentiation for batched matrix multiplication.
The result represents how the output changes with respect to
infinitesimal changes in the inputs along the directions specified by the tangents.

#### See Also:
vjp: Reverse-mode autodiff for batched matrix multiplication.  
</details>
## matmul


```swift
matmul(arg0: Array, arg1: Array) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Perform batched matrix multiplication between two arrays.  
</summary>  
  
#### Args:  

* arg0 `Array`: The first input array.
* arg1 `Array`: The second input array.
  
#### Returns:  
  
The result of the batched matrix multiplication.  
Type: `Array`  
  
  


#### Examples:
```python
 a = Array([[1, 2], [3, 4]])
 b = Array([[5, 6], [7, 8]])
 result = matmul(a, b)
 print(result)
```

#### Note:
The shapes of the two arrays must be compatible for matrix multiplication, i.e. the last dimension of the first array must be equal to the second last dimension of the second array.  
</details>