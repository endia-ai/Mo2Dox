



# view_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/view_ops/view_op.mojo)  
  

## Reshape
  
  
  

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
  
Computes the shape of an array after reshaping.  
</summary>  
  
#### Args:  

* curr `ArrayShape`: The ArrayShape to store the result of the computation.
* args `List[ArrayShape]`: The ArrayShape to reshape, and the shape, stride and storage offset of the target ArrayShape encoded in a  single ArrayShape.
  
  
</details>
#### __call__


```swift
__call__(mut curr: Array, args: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Performs the forward pass for the reshape operation. It sets the base of the argument to be the base of the current array and computes the shape of the current array via its dedicated ArraySahpe fwd fucntion.  
</summary>  
  
#### Args:  

* curr `Array`: The current array to store the result (modified in-place).
* args `List[Array]`: The array on which the reshape view is created.
  
  


#### Note:
The information of the shape computation is stored in the ArrayShape object of the curr array.

#### Constraints:
- The number of elements in the input array must be equal to the number of elements in the target shape.  
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
  
Computes the vector-Jacobian product for the reshape operation.  
</summary>  
  
#### Args:  

* primals `List[Array]`: A list containing the primal input array.
* grad `Array`: The gradient of the output with respect to some scalar function.
* out `Array`: The output of the forward pass.
  
#### Returns:  
  
A list containing the gradient with respect to the input.  
Type: `List[Array]`  
  
  


#### Note:
The vector-Jacobian product for reshape is computed by calling the reshape operation.  
</details>
#### fwd


```swift
fwd(arg0: Array, shape: List[Int]) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Creates a view of the input array with the given shape.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* shape `List[Int]`: The target shape.
  
#### Returns:  
  
The reshaped array.  
Type: `Array`  
  
  


#### Constraints:
- The number of elements in the input array must be equal to the number of elements in the target shape.  
</details>
## reshape


```swift
reshape(arg0: Array, shape: List[Int]) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Creates a view of the input array with the given shape.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* shape `List[Int]`: The target shape.
  
#### Returns:  
  
The reshaped array.  
Type: `Array`  
  
  


#### Constraints:
- The number of elements in the input array must be equal to the number of elements in the target shape.  
</details>
## view


```swift
view(arg0: Array, shape: List[Int]) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Creates a view of the input array with the given shape.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* shape `List[Int]`: The target shape.
  
#### Returns:  
  
The reshaped array.  
Type: `Array`  
  
  


#### Constraints:
- The number of elements in the input array must be equal to the number of elements in the target shape.

#### Note:
This function is a wrapper around the reshape function.  
</details>
## flatten


```swift
flatten(arg0: Array) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Flattens the input array.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
  
#### Returns:  
  
The flattened array.  
Type: `Array`  
  
  


#### Note:
This function is a wrapper around the reshape function.  
</details>