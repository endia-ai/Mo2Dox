



# max_pool1d_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/spacial_ops/max_pool1d_op.mojo)  
  

## MaxPool1d
  
  
  

### Parent Traits
  

- AnyType
- UnknownDestructibility
  

### Functions

#### compute_shape


```swift
compute_shape(mut curr: ArrayShape, args: List[ArrayShape])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the shape of an array after a 1-dimensional max pooling operation with dilation.  
</summary>  
  
#### Args:  

* curr `ArrayShape`: The ArrayShape to store the result of the computation.
* args `List[ArrayShape]`: The input ArrayShape, and the pooling parameters encoded in an ArrayShape.
  
  
</details>
#### __call__


```swift
__call__(mut curr: Array, args: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* curr `Array`
* args `List[Array]`
  
  
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
#### fwd


```swift
fwd(arg0: Array, kernel_size: Int, stride: Int = 1, padding: Int = 0, dilation: Int = 1) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg0 `Array`
* kernel_size `Int`
* stride `Int` Default: 1
* padding `Int` Default: 0
* dilation `Int` Default: 1
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## max_pool1d


```swift
max_pool1d(arg0: Array, kernel_size: Int, stride: Int = 1, padding: Int = 0, dilation: Int = 1) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the 1-dimensional max pooling operation with dilation.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input tensor.
* kernel_size `Int`: The size of the pooling kernel.
* stride `Int`: The stride of the pooling operation. Default: 1
* padding `Int`: The padding to apply to the input tensor. Default: 0
* dilation `Int`: The dilation to apply to the input tensor. Default: 1
  
#### Returns:  
  
The result of the 1-dimensional max pooling operation.  
Type: `Array`  
  
  
</details>