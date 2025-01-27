



# conv1d_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/spacial_ops/conv1d_op.mojo)  
  

## Conv1d
  
  
Namespace for 1D convolution operations.  

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
  
Computes the shape of an array after a 1-dimensional convolution operation.  
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
fwd(arg0: Array, kernel: Array, bias: Array, stride: Int, padding: Int, dilation: Int, groups: Int) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg0 `Array`
* kernel `Array`
* bias `Array`
* stride `Int`
* padding `Int`
* dilation `Int`
* groups `Int`
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## conv1d


```swift
conv1d(arg0: Array, kernel: Array, bias: Array, stride: Int, padding: Int, dilation: Int, groups: Int) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Applies a 1D convolution over an input signal composed of several input planes.  
</summary>  
  
#### Args:  

* arg0 `Array`: Input tensor of shape (batch_size, in_channels, length).
* kernel `Array`: Convolution kernel of shape (out_channels, in_channels // groups, kernel_size).
* bias `Array`: Bias tensor of shape (out_channels).
* stride `Int`: Stride of the convolution.
* padding `Int`: Zero-padding added to both sides of the input.
* dilation `Int`: Spacing between kernel elements.
* groups `Int`: Number of blocked connections from input channels to output channels.
  
#### Returns:  
  
Output tensor of shape (batch_size, out_channels, output_length).  
Type: `Array`  
  
  
</details>