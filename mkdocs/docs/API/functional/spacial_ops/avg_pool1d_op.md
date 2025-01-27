



# avg_pool1d_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/spacial_ops/avg_pool1d_op.mojo)  
  

## AvgPool1d
  
  
Namespace for 1D average pooling operations.  

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
  
Computes the shape of an array after a 1-dimensional average pooling operation with dilation.  
</summary>  
  
#### Args:  

* curr `ArrayShape`
* args `List[ArrayShape]`
  
  
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
## avg_pool1d


```swift
avg_pool1d(arg0: Array, kernel_size: Int, stride: Int = 1, padding: Int = 0, dilation: Int = 1) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Applies a 1D average pooling operation over an input array.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* kernel_size `Int`: The size of the kernel.
* stride `Int`: The stride of the pooling operation. Defaults to 1. Default: 1
* padding `Int`: The padding to apply to the input. Defaults to 0. Default: 0
* dilation `Int`: The dilation to apply to the input. Defaults to 1. Default: 1
  
#### Returns:  
  
Array: The output array.  
Type: `Array`  
  
  
</details>