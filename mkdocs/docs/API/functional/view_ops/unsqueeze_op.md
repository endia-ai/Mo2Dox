



# unsqueeze_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/view_ops/unsqueeze_op.mojo)  
  

## Unsqueeze
  
  
  

### Parent Traits
  

- AnyType
- DifferentiableViewOp
- UnknownDestructibility
  

### Functions

#### compute_shape


```swift
compute_shape(mut curr: ArrayShape, args: List[ArrayShape])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the shape of an array after unsqueezing. This adds dimensions of size 1 along the specified axes.  
</summary>  
  
#### Args:  

* curr `ArrayShape`: The ArrayShape to store the result of the computation.
* args `List[ArrayShape]`: The ArrayShape to unsqueeze, and the axes to unsqueeze along encoded in an ArrayShape.
  
  
</details>
#### __call__


```swift
__call__(mut curr: Array, args: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Performs the forward pass for the unsqueeze operation. It sets the base of the argument to be the base of the current array and computes the shape of the current array via its dedicated ArraySahpe fwd fucntion.  
</summary>  
  
#### Args:  

* curr `Array`: The current array to store the result (modified in-place).
* args `List[Array]`: The array on which the unsqueeze view is created.
  
  


#### Note:
The information of the shape computation is stored in the ArrayShape object of the curr array.  
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
  
Computes the vector-Jacobian product for the unsqueeze operation.  
</summary>  
  
#### Args:  

* primals `List[Array]`: A list containing the primal input array.
* grad `Array`: The gradient of the output with respect to some scalar function.
* out `Array`: The output of the forward pass (unused in this function).
  
#### Returns:  
  
A list containing the gradient with respect to the input.  
Type: `List[Array]`  
  
  


#### Note:
The vector-Jacobian product for unsqueeze is computed by squeezing the gradient.  
</details>
#### fwd


```swift
fwd(arg0: Array, axis: ArrayShape) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Unsqueezes the input array by adding axes of length 1.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* axis `ArrayShape`: The axis to unsqueeze.
  
#### Returns:  
  
The unsqueezed array.  
Type: `Array`  
  
  
</details>
## unsqueeze


```swift
unsqueeze(arg0: Array, axis: ArrayShape) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Unsqueezes the input array by adding axes of length 1.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* axis `ArrayShape`: The axis to unsqueeze.
  
#### Returns:  
  
The unsqueezed array.  
Type: `Array`  
  
  
</details>