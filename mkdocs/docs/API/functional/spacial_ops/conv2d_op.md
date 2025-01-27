



# conv2d_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/spacial_ops/conv2d_op.mojo)  
  

## Conv2d
  
  
Namespace for 2D convolution operations.  

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
  
Computes the shape of an array after a 2-dimensional convolution operation.  
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
fwd(arg0: Array, kernel: Array, bias: Array, stride: Tuple[Int, Int] = Tuple(VariadicPack(<store_to_mem({1}), store_to_mem({1})>, True)), padding: Tuple[Int, Int] = Tuple(VariadicPack(<store_to_mem({0}), store_to_mem({0})>, True)), dilation: Tuple[Int, Int] = Tuple(VariadicPack(<store_to_mem({1}), store_to_mem({1})>, True)), groups: Int = 1) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg0 `Array`
* kernel `Array`
* bias `Array`
* stride `Tuple[Int, Int]` Default: Tuple(VariadicPack(<store_to_mem({1}), store_to_mem({1})>, True))
* padding `Tuple[Int, Int]` Default: Tuple(VariadicPack(<store_to_mem({0}), store_to_mem({0})>, True))
* dilation `Tuple[Int, Int]` Default: Tuple(VariadicPack(<store_to_mem({1}), store_to_mem({1})>, True))
* groups `Int` Default: 1
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## conv2d


```swift
conv2d(arg0: Array, kernel: Array, bias: Array, stride: Tuple[Int, Int] = Tuple(VariadicPack(<store_to_mem({1}), store_to_mem({1})>, True)), padding: Tuple[Int, Int] = Tuple(VariadicPack(<store_to_mem({0}), store_to_mem({0})>, True)), dilation: Tuple[Int, Int] = Tuple(VariadicPack(<store_to_mem({1}), store_to_mem({1})>, True)), groups: Int = 1) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Applies a 2D convolution over an input image composed of several input planes.  
</summary>  
  
#### Args:  

* arg0 `Array`: Input tensor of shape (batch_size, in_channels, height, width).
* kernel `Array`: Convolution kernel of shape (out_channels, in_channels // groups, kernel_height, kernel_width).
* bias `Array`: Bias tensor of shape (out_channels).
* stride `Tuple[Int, Int]`: Stride of the convolution. Default: Tuple(VariadicPack(<store_to_mem({1}), store_to_mem({1})>, True))
* padding `Tuple[Int, Int]`: Zero-padding added to both sides of the input. Default: Tuple(VariadicPack(<store_to_mem({0}), store_to_mem({0})>, True))
* dilation `Tuple[Int, Int]`: Spacing between kernel elements. Default: Tuple(VariadicPack(<store_to_mem({1}), store_to_mem({1})>, True))
* groups `Int`: Number of blocked connections from input channels to output channels. Default: 1
  
#### Returns:  
  
Output tensor of shape (batch_size, out_channels, output_height, output_width).  
Type: `Array`  
  
  
</details>