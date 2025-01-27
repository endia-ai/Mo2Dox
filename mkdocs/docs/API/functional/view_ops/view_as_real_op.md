



# view_as_real_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/view_ops/view_as_real_op.mojo)  
  

## ViewAsReal
  
  
  

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
  
Computes the shape of an array after viewing it as the real part of a complex array.  
</summary>  
  
#### Args:  

* curr `ArrayShape`: The ArrayShape to store the result of the computation.
* args `List[ArrayShape]`: The ArrayShape to view as the real part.
  
  
</details>
#### __call__


```swift
__call__(mut curr: Array, args: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Performs the forward pass for the view_as_real operation. It sets the base of the argument to be the base of the current array and computes the shape of the current array via its dedicated ArraySahpe fwd fucntion.  
</summary>  
  
#### Args:  

* curr `Array`: The current array to store the result (modified in-place).
* args `List[Array]`: The array on which the view_as_real view is created.
  
  


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
  
Show more details.  
</summary>  
  
#### Args:  

* primals `List[Array]`
* grad `Array`
* out `Array`
  
#### Returns:  
  
Type: `List[Array]`  
  
  
</details>
#### fwd


```swift
fwd(arg0: Array) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Creates a view of the input array as a real array.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
  
#### Returns:  
  
A view of the input array as a real array.  
Type: `Array`  
  
  
</details>
## view_as_real


```swift
view_as_real(arg0: Array) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Creates a view of the input array as the real part of a complex array.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
  
#### Returns:  
  
A view of the input array as the real part of a complex array.  
Type: `Array`  
  
  
</details>