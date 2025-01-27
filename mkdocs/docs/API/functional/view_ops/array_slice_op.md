



# array_slice_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/view_ops/array_slice_op.mojo)  
  

## ArraySlice
  
  
  

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
  
Computes the shape of an array after slicing.  
</summary>  
  
#### Args:  

* curr `ArrayShape`: The ArrayShape to store the result of the computation.
* args `List[ArrayShape]`: The ArrayShape to slice, and the list of slices encoded in an ArrayShape via the array_shape_to_slices function.
  
  
</details>
#### __call__


```swift
__call__(mut curr: Array, args: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Performs the forward pass for the slice operation. It sets the base of the argument to be the base of the current array and computes the shape of the current array via its dedicated ArraySahpe fwd fucntion.  
</summary>  
  
#### Args:  

* curr `Array`: The current array to store the result (modified in-place).
* args `List[Array]`: The array on which the slice view is created.
  
  


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
  
Computes the vector-Jacobian product for the slice operation.  
</summary>  
  
#### Args:  

* primals `List[Array]`: A list containing the primal input array.
* grad `Array`: The gradient of the output with respect to some scalar function.
* out `Array`: The output of the forward pass (unused in this function).
  
#### Returns:  
  
A list containing the gradient with respect to the input.  
Type: `List[Array]`  
  
  


#### Note:
The vector-Jacobian product for slice is computed by padding the gradient with zeros along the axes that were sliced.  
</details>
#### fwd


```swift
fwd(arg0: Array, slices: List[Slice]) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Slices the input array based on the given slices.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* slices `List[Slice]`: The slices to apply.
  
#### Returns:  
  
The sliced array.  
Type: `Array`  
  
  
</details>
## array_slice


```swift
array_slice(arg0: Array, slices: List[Slice]) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Slices the input array based on the given slices.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* slices `List[Slice]`: The slices to apply.
  
#### Returns:  
  
The sliced array.  
Type: `Array`  
  
  
</details>