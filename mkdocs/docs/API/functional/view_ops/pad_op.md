



# pad_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/view_ops/pad_op.mojo)  
  

## Pad
  
  
  

### Parent Traits
  

- AnyType
- UnknownDestructibility
  

### Functions

#### fwd


```swift
fwd(arg0: Array, target_shape: ArrayShape, slices_in_target: List[Slice]) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Pads an array to a target shape.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array to be padded.
* target_shape `ArrayShape`: The target shape to pad the input array to.
* slices_in_target `List[Slice]`: A list of slices specifying the region in the target shape where the input array is copied.
  
#### Returns:  
  
An array containing the input array padded to the target shape.  
Type: `Array`  
  
  


Pads the input array to the target shape by copying the input array to the target shape.
The target shape must be larger than the input array shape.
The slices in the target shape specify the region where the input array is copied.

#### Examples:
```python
a = Array([[1, 2], [3, 4]])
target_shape = ArrayShape([2, 3])
slices_in_target = [Slice(0, 2), Slice(0, 2)]
result = pad(a, target_shape, slices_in_target)
print(result)
```

#### Note:
This function supports:
- Automatic differentiation (reverse mode only).
- Complex valued arguments.  
</details>
#### vjp


```swift
vjp(primals: List[Array], grad: Array, out: Array) -> List[Array]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the vector-Jacobian product for the padding operation.  
</summary>  
  
#### Args:  

* primals `List[Array]`: A list containing the primal input array and the target shape.
* grad `Array`: The gradient of the output with respect to some scalar function.
* out `Array`: The output of the forward pass (unused in this function).
  
#### Returns:  
  
A list containing the gradient with respect to the input.  
Type: `List[Array]`  
  
  


Implements reverse-mode automatic differentiation for the padding operation.

#### Note:
The vector-Jacobian product for padding is computed as the gradient of the output array sliced to the target shape.  
</details>
#### padded_shape


```swift
padded_shape(mut curr: ArrayShape, args: List[ArrayShape])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the shape of an array after padding.  
</summary>  
  
#### Args:  

* curr `ArrayShape`: The ArrayShape to store the result of the computation.
* args `List[ArrayShape]`: The ArrayShape to pad, the target ArrayShape.
  
  
</details>
#### __call__


```swift
__call__(mut curr: Array, args: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Performs the forward pass for padding an array to a target shape.  
</summary>  
  
#### Args:  

* curr `Array`: The current array to store the result (modified in-place).
* args `List[Array]`: A list containing the input array and the target shape.
  
  


Pads the input array to the target shape and stores the result in the current array.
Initializes the current array if not already set up.

#### Note:
This function assumes that the shape and data of the args are already set up.
If the current array (curr) is not initialized, it computes the shape based on the target shape and sets up the data accordingly.  
</details>
## pad


```swift
pad(arg0: Array, target_shape: ArrayShape, slices_in_target: List[Slice]) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Pads an array to a target shape.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array to be padded.
* target_shape `ArrayShape`: The target shape to pad the input array to.
* slices_in_target `List[Slice]`: A list of slices specifying the region in the target shape where the input array is copied.
  
#### Returns:  
  
An array containing the input array padded to the target shape.  
Type: `Array`  
  
  


Pads the input array to the target shape by copying the input array to the target shape.
The target shape must be larger than the input array shape.
The slices in the target shape specify the region where the input array is copied.

#### Examples:
```python
a = Array([[1, 2], [3, 4]])
target_shape = ArrayShape([2, 3])
slices_in_target = [Slice(0, 2), Slice(0, 2)]
result = pad(a, target_shape, slices_in_target)
print(result)
```

#### Note:
This function supports:
- Automatic differentiation (reverse mode only).
- Complex valued arguments.  
</details>