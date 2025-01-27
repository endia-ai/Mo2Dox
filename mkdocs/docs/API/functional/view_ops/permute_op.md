



# permute_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/view_ops/permute_op.mojo)  
  

## Permute
  
  
  

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
  
Permutes the dimensions of an array shape given a list of axes.  
</summary>  
  
#### Args:  

* curr `ArrayShape`: The ArrayShape to store the result of the computation.
* args `List[ArrayShape]`: The ArrayShape to permute, and the list of axes to permute.
  
  


#### Constraints:
- The number of axes in the list must not exceed the number of dimensions of the ArrayShape.  
</details>
#### __call__


```swift
__call__(mut curr: Array, args: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Permutes the input array based on the given axis and stores the result in the current array (curr). The first agument is set as the base of the current array.  
</summary>  
  
#### Args:  

* curr `Array`: The current array, must be mutable.
* args `List[Array]`: The input array and the axis to permute.
  
  
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
  
Compute vector-Jacobian product for array permutation.  
</summary>  
  
#### Args:  

* primals `List[Array]`: Primal input arrays.
* grad `Array`: Gradient of the output with respect to some scalar function.
* out `Array`: The output of the forward pass.
  
#### Returns:  
  
List[Array]: Gradients with respect to each input.  
Type: `List[Array]`  
  
  


#### Note:
Implements reverse-mode automatic differentiation for permutation.
Returns arrays with shape zero for inputs that do not require gradients.

#### See Also:
permute_jvp: Forward-mode autodiff for permutation.  
</details>
#### fwd


```swift
fwd(arg0: Array, axis: ArrayShape) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Creates a view of the input array with its dimensions permuted based on the given axis.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* axis `ArrayShape`: The axis to permute.
  
#### Returns:  
  
A view of the input array with its dimensions permuted.  
Type: `Array`  
  
  
</details>
## InvPermute
  
  
  

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
  
Permutes the dimensions of an array shape given a list of axes, in an inverse manner to the permute_shape function.  
</summary>  
  
#### Args:  

* curr `ArrayShape`: The ArrayShape to store the result of the computation.
* args `List[ArrayShape]`: The ArrayShape to permute, and the list of axes to permute.
  
  


#### Constraints:
- The number of axes in the list must not exceed the number of dimensions of the ArrayShape.  
</details>
#### __call__


```swift
__call__(mut curr: Array, args: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Permutes the input array based on the given axis and stores the result in the current array (curr). The first agument is set as the base of the current array.  
</summary>  
  
#### Args:  

* curr `Array`: The current array, must be mutable.
* args `List[Array]`: The input array and the axis to permute.
  
  
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
  
Compute vector-Jacobian product for array permutation.  
</summary>  
  
#### Args:  

* primals `List[Array]`: Primal input arrays.
* grad `Array`: Gradient of the output with respect to some scalar function.
* out `Array`: The output of the forward pass.
  
#### Returns:  
  
List[Array]: Gradients with respect to each input.  
Type: `List[Array]`  
  
  


#### Note:
Implements reverse-mode automatic differentiation for permutation.
Returns arrays with shape zero for inputs that do not require gradients.

#### See Also:
permute_inv_jvp: Forward-mode autodiff for permutation.  
</details>
#### fwd


```swift
fwd(arg0: Array, axis: ArrayShape) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Creates a view of the input array with its dimensions permuted based on the given axis.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* axis `ArrayShape`: The axis to permute.
  
#### Returns:  
  
A view of the input array with its dimensions permuted.  
Type: `Array`  
  
  


#### Examples:
```python
a = Array([[1, 2], [3, 4]])
result = permute_inv(a, axis=List(-1,-2))
print(result)
```

#### This function supports
- Automatic differentiation (forward and reverse modes).
- Complex valued arguments.  
</details>
## permute


```swift
permute(arg0: Array, axis: ArrayShape) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Creates a view of the input array with its dimensions permuted based on the given axis.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* axis `ArrayShape`: The axis to permute.
  
#### Returns:  
  
A view of the input array with its dimensions permuted.  
Type: `Array`  
  
  


#### Examples:
```python
 a = Array([[1, 2], [3, 4]])
 result = permute(a, axis=List(-1,-2))
 print(result)
```

#### This function supports
- Automatic differentiation (forward and reverse modes).
- Complex valued arguments.  
</details>
## transpose


```swift
transpose(arg0: Array, axis1: Int, axis2: Int) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Transposes the input array based on the given axes.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* axis1 `Int`: The first axis to transpose.
* axis2 `Int`: The second axis to transpose.
  
#### Returns:  
  
The transposed array.  
Type: `Array`  
  
  


#### Note:
This function is a wrapper around the permute function with the given axes.  
</details>
## swapaxes


```swift
swapaxes(arg0: Array, axis1: Int, axis2: Int) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Swaps the input array's axes based on the given axes.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* axis1 `Int`: The first axis to swap.
* axis2 `Int`: The second axis to swap.
  
#### Returns:  
  
The array with the axes swapped.  
Type: `Array`  
  
  


#### Note:
This function is a wrapper around the transpose function with the given axes.  
</details>
## swapdims


```swift
swapdims(arg0: Array, axis1: Int, axis2: Int) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Swaps the input array's dimensions based on the given axes.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* axis1 `Int`: The first axis to swap.
* axis2 `Int`: The second axis to swap.
  
#### Returns:  
  
The array with the dimensions swapped.  
Type: `Array`  
  
  


#### Note:
This function is a wrapper around the transpose function with the given axes.  
</details>
## permute_inv


```swift
permute_inv(arg0: Array, axis: ArrayShape) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Creates a view of the input array with its dimensions permuted based on the given axis.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* axis `ArrayShape`: The axis to permute.
  
#### Returns:  
  
A view of the input array with its dimensions permuted.  
Type: `Array`  
  
  


#### Examples:
```python
a = Array([[1, 2], [3, 4]])
result = permute_inv(a, axis=List(-1,-2))
print(result)
```

#### This function supports
- Automatic differentiation (forward and reverse modes).
- Complex valued arguments.  
</details>