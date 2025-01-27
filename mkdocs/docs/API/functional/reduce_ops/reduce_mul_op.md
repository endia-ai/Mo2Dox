



# reduce_mul_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/reduce_ops/reduce_mul_op.mojo)  
  

## ReduceMul
  
  
  

### Parent Traits
  

- AnyType
- DifferentiableReduceOp
- UnknownDestructibility
  

### Functions

#### compute_shape


```swift
compute_shape(mut curr: ArrayShape, args: List[ArrayShape])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the shape of an array after reducing along a specific axis.  
</summary>  
  
#### Args:  

* curr `ArrayShape`: The ArrayShape to store the result of the computation.
* args `List[ArrayShape]`: The ArrayShape to reduce, and the axis to reduce along encoded in an ArrayShape.
  
  


#### Constraints:
- The axis must be a valid axis of the ArrayShape (args[0]).
- The number of axis must not exceed the number of dimensions of the ArrayShape (args[0]).  
</details>
#### __call__


```swift
__call__(mut curr: Array, args: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Performs the forward pass for element-wise mulition of two arrays.  
</summary>  
  
#### Args:  

* curr `Array`: The current array to store the result (modified in-place).
* args `List[Array]`: A list containing the input arrays.
  
  


Computes the sum of the input arrays and stores the result in the current array.
Initializes the current array if not already set up.

#### Note:
This function assumes that the shape and data of the args are already set up.
If the current array (curr) is not initialized, it computes the shape based on the input array and the axis and sets up the data accordingly.  
</details>
#### jvp


```swift
jvp(primals: List[Array], tangents: List[Array]) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* primals `List[Array]`
* tangents `List[Array]`
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
#### vjp


```swift
vjp(primals: List[Array], grad: Array, out: Array) -> List[Array]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the vector-Jacobian product for the mulition function.  
</summary>  
  
#### Args:  

* primals `List[Array]`: A list containing the primal input arrays.
* grad `Array`: The gradient of the output with respect to some scalar function.
* out `Array`: The output of the forward pass (unused in this function).
  
#### Returns:  
  
A list containing the gradient with respect to the input.  
Type: `List[Array]`  
  
  


Implements reverse-mode automatic differentiation for the mulition function.

#### Note:
The vector-Jacobian product for the mulition is computed as the gradient itself.  
</details>
#### fwd


```swift
fwd(arg0: Array, axis: List[Int]) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Reduces the input array along the specified axis by summing the elements.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* axis `List[Int]`: The axis along which to reduce the array.
  
#### Returns:  
  
An array containing the sum of the input array along the specified axis.  
Type: `Array`  
  
  


#### Examples:
```python
a = Array([[1, 2], [3, 4]])
result = reduce_mul(a, List(0))
print(result)
```

#### Note:
This function supports:
- Automatic differentiation (forward and reverse modes).
- Complex valued arguments.  
</details>
## reduce_mul


```swift
reduce_mul(arg0: Array, axis: List[Int]) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Reduces the input array along the specified axis by summing the elements.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* axis `List[Int]`: The axis along which to reduce the array.
  
#### Returns:  
  
An array containing the sum of the input array along the specified axis.  
Type: `Array`  
  
  


#### Examples:
```python
a = Array([[1, 2], [3, 4]])
result = reduce_mul(a, List(0))
print(result)
```

#### Note:
This function supports:
- Automatic differentiation (forward and reverse modes).
- Complex valued arguments.  
</details>