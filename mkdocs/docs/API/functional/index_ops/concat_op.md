



# concat_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/index_ops/concat_op.mojo)  
  

## concat_shape


```swift
concat_shape(mut curr: ArrayShape, args: List[ArrayShape])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the shape of an array after concatenation.  
</summary>  
  
#### Args:  

* curr `ArrayShape`: The ArrayShape to store the result of the computation.
* args `List[ArrayShape]`: The ArrayShapes to concatenate, and the axis to concatenate along encoded in an ArrayShape.
  
  
</details>
## concat_fwd


```swift
concat_fwd(mut curr: Array, args: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Performs the forward pass for the concat operation. It sets the base of the argument to be the base of the current array and computes the shape of the current array via its dedicated ArraySahpe fwd fucntion.  
</summary>  
  
#### Args:  

* curr `Array`: The current array to store the result (modified in-place).
* args `List[Array]`: The arrays to concatenate.
  
  


#### Note:
The information of the shape computation is stored in the ArrayShape object of the curr array.  
</details>
## concat_vjp


```swift
concat_vjp(primals: List[Array], grad: Array, out: Array) -> List[Array]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the vector-Jacobian product for the concat operation.  
</summary>  
  
#### Args:  

* primals `List[Array]`: A list containing the primal input arrays.
* grad `Array`: The gradient of the output with respect to some scalar function.
* out `Array`: The output of the forward pass.
  
#### Returns:  
  
A list containing the gradients with respect to the input arrays.  
Type: `List[Array]`  
  
  


#### Note:
The vector-Jacobian product for concat is computed by returning an empty list.  
</details>
## concat


```swift
concat(args: List[Array], axis: Int) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Concatenates the input arrays along the given axis.  
</summary>  
  
#### Args:  

* args `List[Array]`: The arrays to concatenate.
* axis `Int`: The axis along which to concatenate.
  
#### Returns:  
  
The concatenated array.  
Type: `Array`  
  
  
</details>