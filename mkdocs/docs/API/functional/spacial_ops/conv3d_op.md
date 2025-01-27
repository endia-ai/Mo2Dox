



# conv3d_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/spacial_ops/conv3d_op.mojo)  
  

## Conv3d
  
  
Namespace for 3D convolution operations.  

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
  
Computes the shape of an array after a 3-dimensional convolution operation.  
</summary>  
  
#### Args:  

* curr `ArrayShape`: The ArrayShape to store the result of the computation.
* args `List[ArrayShape]`: The input ArrayShape, and the convolution parameters encoded in an ArrayShape.
  
  
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
fwd(arg0: Array, kernel: Array, bias: Array, stride: Tuple[Int, Int, Int] = Tuple(VariadicPack(<store_to_mem({1}), store_to_mem({1}), store_to_mem({1})>, True)), padding: Tuple[Int, Int, Int] = Tuple(VariadicPack(<store_to_mem({0}), store_to_mem({0}), store_to_mem({0})>, True)), dilation: Tuple[Int, Int, Int] = Tuple(VariadicPack(<store_to_mem({1}), store_to_mem({1}), store_to_mem({1})>, True)), groups: Int = 1) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg0 `Array`
* kernel `Array`
* bias `Array`
* stride `Tuple[Int, Int, Int]` Default: Tuple(VariadicPack(<store_to_mem({1}), store_to_mem({1}), store_to_mem({1})>, True))
* padding `Tuple[Int, Int, Int]` Default: Tuple(VariadicPack(<store_to_mem({0}), store_to_mem({0}), store_to_mem({0})>, True))
* dilation `Tuple[Int, Int, Int]` Default: Tuple(VariadicPack(<store_to_mem({1}), store_to_mem({1}), store_to_mem({1})>, True))
* groups `Int` Default: 1
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## conv3d


```swift
conv3d(arg0: Array, kernel: Array, bias: Array, stride: Tuple[Int, Int, Int] = Tuple(VariadicPack(<store_to_mem({1}), store_to_mem({1}), store_to_mem({1})>, True)), padding: Tuple[Int, Int, Int] = Tuple(VariadicPack(<store_to_mem({0}), store_to_mem({0}), store_to_mem({0})>, True)), dilation: Tuple[Int, Int, Int] = Tuple(VariadicPack(<store_to_mem({1}), store_to_mem({1}), store_to_mem({1})>, True)), groups: Int = 1) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Applies a 3D convolution operation over an input array.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* kernel `Array`: The convolution kernel.
* bias `Array`: The bias tensor.
* stride `Tuple[Int, Int, Int]`: The stride of the convolution operation. Defaults to (1, 1, 1). Default: Tuple(VariadicPack(<store_to_mem({1}), store_to_mem({1}), store_to_mem({1})>, True))
* padding `Tuple[Int, Int, Int]`: The padding to apply to the input. Defaults to (0, 0, 0). Default: Tuple(VariadicPack(<store_to_mem({0}), store_to_mem({0}), store_to_mem({0})>, True))
* dilation `Tuple[Int, Int, Int]`: The dilation to apply to the input. Defaults to (1, 1, 1). Default: Tuple(VariadicPack(<store_to_mem({1}), store_to_mem({1}), store_to_mem({1})>, True))
* groups `Int`: The number of groups to split the input and output channels into. Defaults to 1. Default: 1
  
#### Returns:  
  
Array: The output array.  
Type: `Array`  
  
  
</details>