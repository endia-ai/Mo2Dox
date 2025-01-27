



# expand_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/view_ops/expand_op.mojo)  
  

## Expand
  
  
  

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
  
Computes the shape resulting from broadcasting one array to another.  
</summary>  
  
#### Args:  

* curr `ArrayShape`: The ArrayShape to store the result of the computation.
* args `List[ArrayShape]`: Source ArrayShape, target ArrayShape, and axes to ignore during broadcasting.
  
  


#### Constraints:
- The number of dimensions of the source ArrayShape must be less than or equal to the number of dimensions of the target ArrayShape.  
</details>
#### __call__


```swift
__call__(mut curr: Array, args: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Performs the forward pass for the expand operation. It sets the base of the argument to be the base of the current array and computes the shape of the current array via its dedicated ArraySahpe fwd fucntion.  
</summary>  
  
#### Args:  

* curr `Array`: The current array to store the result (modified in-place).
* args `List[Array]`: The array on which the expanded view is created.
  
  


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
  
Computes the vector-Jacobian product for the expand operation.  
</summary>  
  
#### Args:  

* primals `List[Array]`: A list containing the primal input array.
* grad `Array`: The gradient of the output with respect to some scalar function.
* out `Array`: The output of the forward pass (unused in this function).
  
#### Returns:  
  
A list containing the gradient with respect to the input.  
Type: `List[Array]`  
  
  


#### Note:
The vector-Jacobian product for expand is computed by reducing the gradient along the axes that were expanded.  
</details>
#### fwd


```swift
fwd(arg0: Array, array_shape: ArrayShape, ignore_axes: List[Int] = List()) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Expands the input array to the given shape.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* array_shape `ArrayShape`: The target shape.
* ignore_axes `List[Int]`: The axes to ignore during expansion. Default: List()
  
#### Returns:  
  
The expanded array.  
Type: `Array`  
  
  


#### Constraints:
- The number of dimensions of the source ArrayShape must be less than or equal to the number of dimensions of the target ArrayShape.
- The number of axis to ignore must be less than or equal to the number of dimensions of the source ArrayShape.

#### Note:
When performing an expand operation in eager mode, the function checks if the shape of the input array is equal to the target shape. If they are equal, the function returns the input array as is. This is done to avoid unnecessary computation.  
</details>
## expand


```swift
expand(arg0: Array, shape: ArrayShape, ignore_axes: List[Int] = List()) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Expands the input array to the given shape.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* shape `ArrayShape`: The target shape.
* ignore_axes `List[Int]`: The axes to ignore during expansion. Default: List()
  
#### Returns:  
  
The expanded array.  
Type: `Array`  
  
  


#### Note:
This function is a wrapper around the expand function with the target shape being the shape of the target array.  
</details>
## expand_as


```swift
expand_as(arg0: Array, arg1: Array) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Expands the input array to the shape of the target array.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* arg1 `Array`: The target array.
  
#### Returns:  
  
A view on the input array with the shape of the target array.  
Type: `Array`  
  
  


#### Note:
This function is a wrapper around the expand function with the target shape being the shape of the target array.  
</details>
## broadcast_to


```swift
broadcast_to(arg0: Array, shape: List[Int]) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Broadcasts the input array to the given shape.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* shape `List[Int]`: The target shape.
  
#### Returns:  
  
A view on the input array with the target shape.  
Type: `Array`  
  
  


#### Note:
This function is a wrapper around the expand function with the target shape being the shape of the target array.  
</details>