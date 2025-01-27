



# as_strided_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/view_ops/as_strided_op.mojo)  
  

## AsStrided
  
  
  

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
  
Computes the shape of an array after striding.  
</summary>  
  
#### Args:  

* curr `ArrayShape`: The ArrayShape to store the result of the computation.
* args `List[ArrayShape]`: The ArrayShape to stride, the shape, stride and storage offset of the target ArrayShape encoded in a  single ArrayShape.
  
  
</details>
#### __call__


```swift
__call__(mut curr: Array, args: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Performs the forward pass for the as_strided operation. It sets the base of the argument to be the base of the current array and computes the shape of the current array via its dedicated ArraySahpe fwd fucntion.  
</summary>  
  
#### Args:  

* curr `Array`: The current array to store the result (modified in-place).
* args `List[Array]`: The array on which the as_strided view is created.
  
  


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
  
Computes the vector-Jacobian product for the as_strided operation.  
</summary>  
  
#### Args:  

* primals `List[Array]`: A list containing the primal input array.
* grad `Array`: The gradient of the output with respect to some scalar function.
* out `Array`: The output of the forward pass.
  
#### Returns:  
  
A list containing the gradient with respect to the input.  
Type: `List[Array]`  
  
  


#### Note:
The vector-Jacobian product for as_strided is computed by calling the inverse operation as_strided_inv.  
</details>
#### fwd


```swift
fwd(arg0: Array, shape: List[Int], stride: List[Int], storage_offset: Int) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Creates a view of the input array with the given shape and stride.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* shape `List[Int]`: The shape of the view.
* stride `List[Int]`: The stride of the view.
* storage_offset `Int`: The storage offset of the view.
  
#### Returns:  
  
A view of the input array with the given shape and stride.  
Type: `Array`  
  
  
</details>
## AsStridedInv
  
  
  

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
  
Computes the shape of an array after striding, in an inverse manner to the as_strided_shape function.  
</summary>  
  
#### Args:  

* curr `ArrayShape`: The ArrayShape to store the result of the computation.
* args `List[ArrayShape]`: The ArrayShape to stride, the shape, stride and storage offset of the target ArrayShape encoded in a  single ArrayShape.
  
  
</details>
#### __call__


```swift
__call__(mut curr: Array, args: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Performs the forward pass for the as_strided_inv operation. It sets the base of the argument to be the base of the current array and computes the shape of the current array via its dedicated ArraySahpe fwd fucntion.  
</summary>  
  
#### Args:  

* curr `Array`: The current array to store the result (modified in-place).
* args `List[Array]`: The array on which the as_strided_inv view is created.
  
  


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
  
Computes the vector-Jacobian product for the as_strided_inv operation.  
</summary>  
  
#### Args:  

* primals `List[Array]`: A list containing the primal input array.
* grad `Array`: The gradient of the output with respect to some scalar function.
* out `Array`: The output of the forward pass.
  
#### Returns:  
  
A list containing the gradient with respect to the input.  
Type: `List[Array]`  
  
  


#### Note:
The vector-Jacobian product for as_strided_inv is computed by calling the as_strided operation.  
</details>
#### fwd


```swift
fwd(arg0: Array, target_shape: ArrayShape, shape: List[Int], stride: List[Int], storage_offset: Int) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Creates a view of the input array with the given shape and stride.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* target_shape `ArrayShape`: The target shape of the view.
* shape `List[Int]`: The shape of the view.
* stride `List[Int]`: The stride of the view.
* storage_offset `Int`: The storage offset of the view.
  
#### Returns:  
  
A view of the input array with the given shape and stride.  
Type: `Array`  
  
  
</details>
## as_strided


```swift
as_strided(arg0: Array, shape: List[Int], stride: List[Int], storage_offset: Int) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Creates a view of the input array with the given shape and stride.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* shape `List[Int]`: The shape of the view.
* stride `List[Int]`: The stride of the view.
* storage_offset `Int`: The storage offset of the view.
  
#### Returns:  
  
A view of the input array with the given shape and stride.  
Type: `Array`  
  
  
</details>
## as_strided_inv


```swift
as_strided_inv(arg0: Array, target_shape: ArrayShape, shape: List[Int], stride: List[Int], storage_offset: Int) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Creates a view of the input array with the given shape and stride.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* target_shape `ArrayShape`: The target shape of the view.
* shape `List[Int]`: The shape of the view.
* stride `List[Int]`: The stride of the view.
* storage_offset `Int`: The storage offset of the view.
  
#### Returns:  
  
A view of the input array with the given shape and stride.  
Type: `Array`  
  
  
</details>