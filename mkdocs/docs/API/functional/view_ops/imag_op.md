



# imag_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/view_ops/imag_op.mojo)  
  

## Imag
  
  
  

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
  
Computes the shape of the imaginary part of a complex array.  
</summary>  
  
#### Args:  

* curr `ArrayShape`: The ArrayShape to store the result of the computation.
* args `List[ArrayShape]`: The ArrayShape to compute the imaginary part of.
  
  
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
  
Show more details.  
</summary>  
  
#### Args:  

* primals `List[Array]`
* grad `Array`
* out `Array`
  
#### Returns:  
  
Type: `List[Array]`  
  
  
</details>
#### __call__


```swift
__call__(mut curr: Array, args: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Performs the forward pass for the imag operation. It sets the base of the argument to be the base of the current array and computes the shape of the current array via its dedicated ArraySahpe fwd fucntion.  
</summary>  
  
#### Args:  

* curr `Array`: The current array to store the result (modified in-place).
* args `List[Array]`: The array on which the imag view is created.
  
  


#### Note:
The information of the shape computation is stored in the ArrayShape object of the curr array.  
</details>
#### fwd


```swift
fwd(arg0: Array) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Creates a view of the input array as an imaginary array.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
  
#### Returns:  
  
A view of the input array as an imaginary array.  
Type: `Array`  
  
  


#### Note:
This function is non-differentiable.  
</details>
## imag


```swift
imag(arg0: Array) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the imaginary part of the input array.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
  
#### Returns:  
  
An array containing the imaginary part of the input array.  
Type: `Array`  
  
  


#### Examples:
```python
a = Array([[1, 2], [3, 4]])
result = imag(a)
print(result)
```

#### Note:
This function supports:
- Complex input arrays.
- Non-differentiable operation.  
</details>